const {BrowserWindow, app, crashReporter} = require('electron');
//const BrowserWindow = require('browser-window');

//require('crash-reporter').start();
//crashReporter.start();

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 1360, height: 800 });
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

