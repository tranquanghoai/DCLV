module.exports = app => {

    app.onSocketConnect = socket => {
        console.log('A user connected.');
        socket.on('disconnect', () => console.log('A user disconnected'));

        // Authenticate ------------------------------------------------------------------------------------------------
        socket.on('user:login', (email, password) => app.loginUserOnMobile(socket, email, password));
        socket.on('user:logout', () => app.logoutUserOnMobile(socket));
        socket.on('user:register', (name, phoneNumber, email, password) => app.registerUserOnMobile(socket, name, phoneNumber, email, password));

        // User --------------------------------------------------------------------------------------------------------
        socket.on('user:update', (name, phoneNumber, email) => {
            if (socket.user) {
                let changes = {};
                if (name && name !== '') changes.name = name;
                if (phoneNumber) changes.phoneNumber = phoneNumber;
                if (email && email !== '') changes.email = email;

                if (Object.keys(changes).length > 0) {
                    app.model.user.update(socket.user._id, changes, (error, user) => {
                        if (error) {
                            console.error('Error: socket->user:update', error);
                            socket.emit('user:update', 'Some errors occurred during save your profile!');
                        } else {
                            socket.emit('user:update', null, user);
                            socket.user = user;
                        }
                    });
                } else {
                    socket.emit('user:update', null, socket.user);
                }
            } else {
                socket.emit('user:update', 'You must login first!');
            }
        });
        socket.on('user:change-password', (currentPassword, newPassword) => {
            if (socket.user) {
                if (socket.user.equalPassword(currentPassword)) {
                    socket.user.password = app.model.user.hashPassword(newPassword);
                    socket.user.save(error => socket.emit('user:change-password', error));
                } else {
                    socket.emit('user:change-password', 'Current password is not correct!');
                }
            } else {
                socket.emit('user:change-password', 'You must login first!');
            }
        });
        socket.on('user:change-avatar', () => {
            let taskName = 'user:change-avatar:' + socket.user._id,
                taskToken = app.getToken(12);
            app.model.task.create(taskName, taskToken, () => socket.emit('user:task-token', 'user:change-avatar', taskToken));
        });

        // Receive token of mobile -------------------------------------------------------------------------------------
        socket.on('api:mobile-token', token => app.model.mobile.create({token}, error => {
            if (error) {
                console.error('API Error: mobile-token:', error);
            } else {
                console.log('API: mobile-token: add', token);
            }
        }));

        // Contact -----------------------------------------------------------------------------------------------------
        socket.on('contact:message', (email, title, message) =>
            app.model.contact.create({email, title, message}, (error) => {
                if (error) {
                    console.error('IO:contact:message', error);
                } else {
                    app.email.sendEmail(email, [app.defaultAdminEmail], 'SSCC App: Contact',
                        `Hi, We has received your contact. Thanks for contacting us. The title of your contact is '${title}'. The message of your contact is '${message}'. We will reply to you as soon as possible. Best Regards, SSCC admin.`,
                        `Hi,<br/><br/>We has received your contact. Thanks for contacting us.<br/>The title of your contact is: '<b>${title}</b>'.<br/>The message of your contact is:<br/>'<i>${message}</i>'.<br/>We will reply to you as soon as possible.<br/><br/>Best Regards,<br/>SSCC admin.`);
                }
                socket.emit('contact:message', error);
            }));
    };

    app.get('/api/jobhub/page/:pageNumber/:pageSize', (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.jobHub.getPage(pageNumber, pageSize, {active: true}, (error, page) => res.send({error, page}));
    });
    app.get('/api/event/page/:pageNumber/:pageSize', (req, res) => {
        const pageNumber = parseInt(req.params.pageNumber),
            pageSize = parseInt(req.params.pageSize);
        app.model.event.getPage(pageNumber, pageSize, {active: true}, (error, page) => res.send({error, page}));
    });

    app.get('/api/jobhub/item/:Id', (req, res) =>
        app.model.jobHub.read(req.params.Id, (error, item) => res.send({error, item})));
    app.get('/api/event/item/:Id', (req, res) =>
        app.model.event.read(req.params.Id, (error, item) => res.send({error, item})));
    app.get('/api/news/item/:Id', (req, res) =>
        app.model.news.read(req.params.Id, (error, item) => res.send({error, item})));

    app.post('/api/user/upload/avatar/:Id', (req, res) => {
        app.getUploadForm().parse(req, (error, fields, files) => {
            if (files && files.image && files.image.length > 0 && fields.token && fields.token.length > 0) {
                const userId = req.params.Id,
                    taskName = 'user:change-avatar:' + userId,
                    imageSrcPath = files.image[0].path,
                    imageLink = '/img/user/' + userId + app.path.extname(imageSrcPath),
                    imageDestPath = app.publicPath + imageLink;
                app.model.task.get(taskName, (error, task) => {
                    if (error || task == null || task.value !== fields.token[0]) {
                        app.fs.unlinkSync(imageSrcPath);
                        res.send({error: 'Invalid token!'});
                    } else {
                        app.model.user.get(userId, (error, user) => {
                            if (error || user == null) {
                                app.fs.unlinkSync(imageSrcPath);
                                res.send({error: 'Upload image has some errors!'});
                            } else {
                                if (user.image && app.fs.existsSync(app.publicPath + user.image)) {
                                    app.fs.unlinkSync(app.publicPath + user.image);
                                }

                                app.jimp.read(imageSrcPath).then(image => {
                                    image.resize(512, app.jimp.AUTO).write(imageDestPath);
                                    app.fs.unlinkSync(imageSrcPath);

                                    user.image = imageLink + '?v=' + new Date().getTime();
                                    user.save(error => {
                                        if (error) {
                                            res.send({error: 'Update user has some errors!'});
                                        } else {
                                            app.model.task.delete(taskName, error => {
                                                res.send({
                                                    error: error ? 'Upload image has some errors!' : null,
                                                    currentUser: app.clone(user, {password: null}),
                                                });
                                            });
                                        }
                                    });
                                }).catch(error => {
                                    console.error(error);
                                    res.send({error: 'Process image has some errors!'});
                                });
                            }
                        });
                    }
                });
            } else {
                res.send({error: 'Process image has some errors!'});
            }
        })
    });
};