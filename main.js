const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 1366
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  
  
});

