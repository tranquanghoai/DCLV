module.exports = app => {
    // Generate default options in order to render view
    app.defaultOptions = req => {
        return {
            title: app.title,
            version: app.version,
            keywords: app.keywords,
            description: app.description,
            user: req.session.user,
            token: req.session.id,
            isDebug: app.isDebug,
            timestamp: Date.now() + 6 * 60 * 60 * 1000
        };
    };

    // Redirect to webpack server
    app.redirectToWebpackServer = () => {
        if (app.isDebug) {
            app.get('/*.js', (req, res) => {
                if (req.originalUrl.endsWith('.min.js')) {
                    res.next();
                } else {
                    res.redirect('http://localhost:' + (app.port + 1) + '/js/' + app.path.basename(req.originalUrl));
                }
            });
        }
    };

    // Response html file
    app.createResponse = (req, res, path) => {
        if (app.isDebug) {
            const http = require('http');
            http.get('http://localhost:' + (app.port + 1) + path, response => {
                let data = '';
                response.on('data', chunk => data += chunk);
                response.on('end', () => res.send(data));
            });
        } else {
            app.fs.readFile(app.publicPath + path, 'utf8', function (err, data) {
                res.send(data);
            });
            // res.sendFile(app.publicPath + path);
        }
    };


    // Load models & controllers
    const loadFiles = (loadPath, loadText) => {
        let names = '';
        app.fs.readdirSync(loadPath).forEach((filename) => {
            const filepath = app.path.join(loadPath, filename);
            if (app.fs.existsSync(filepath) && app.fs.statSync(filepath).isFile() && filepath.endsWith('.js')) {
                require(filepath)(app);
                names += ', ' + filename.substring(0, filename.lastIndexOf('.'));
            }
        });

        if (names.length > 0) console.log(loadText + names.substring(2) + '.');
    };
    app.loadModels = () => loadFiles(app.modelPath, ' - Load model: ');
    app.loadControllers = () => loadFiles(app.controllerPath, ' - Load controller: ');

    // Download file (http / https)
    app.downloadFile = (url, path) => {
        let network = require(url.startsWith('http') ? 'http' : 'https'),
            file = app.fs.createWriteStream(path);
        network.get(url, response => response.pipe(file));
    };

    app.createFolder = dirs => {
        if (!Array.isArray(dirs)) dirs = [dirs];
        dirs.forEach(dir => {
            if (!app.fs.existsSync(dir)) app.fs.mkdirSync(dir);
        });

    };

    app.clone = function () {
        let result = {};
        for (let i = 0, length = arguments.length; i < length; i++) {
            const obj = JSON.parse(JSON.stringify(arguments[i]));
            Object.keys(obj).forEach(key => result[key] = obj[key]);
        }
        return result;
    }
};