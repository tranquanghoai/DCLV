module.exports = (app, http) => {

    app.io = require('socket.io')(http);
    app.io.on('connection', socket => app.onSocketConnect(socket));

    if (app.isDebug) {
        app.fs.watch('public/js', (eventType, filename) => {
            console.log('Reload client!');
            app.io.emit('debug', 'reload');
        });
    }
};