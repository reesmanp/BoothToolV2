import { app, BrowserWindow } from 'electron';

let win;

const createWindow = () => {
  win = new BrowserWindow({width: 800, height: 600});

  win.loadURL(`file://${__dirname}/../views/index.html`);

  process.env.NODE_ENV !== 'production' && win.webContents.openDevTools();

  win.on('closed', () => win = null);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());

app.on('activate', () => win === null && createWindow());
