const {BrowserWindow, app} = require('electron');

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 1360, height: 800 });
  mainWindow.loadURL('file://' + __dirname + '/html/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

