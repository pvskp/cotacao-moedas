const { app, BrowserWindow } = require('electron')

function createWindow(){
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true
    })
    window.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow()
})