import { app, BrowserWindow } from 'electron';

let win: Electron.BrowserWindow;

function createWindow() {
    win = new BrowserWindow({
        height: 600,
        width: 800,
    });

    win.loadFile('index.html');

    // open dev tools for now
    win.webContents.openDevTools();
}

app.on('ready', createWindow);

// Keep application running on mac even when all windows closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// Re-create window on mac if first window open again
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});