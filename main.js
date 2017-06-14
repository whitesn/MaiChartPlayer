const {app, shell, BrowserWindow} = require('electron');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 750,
        height: 750,
        backgroundColor: '#2e2c29'
    });

    win.once('ready-to-show', () => {
        win.show()
    });

    win.loadURL('file://' + __dirname + '/index.html');
});
