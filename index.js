const { BrowserWindow, app } =require('electron');
require('@electron/remote/main').initialize()

function createWindow() {
    // create the browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            enableRemoteModule: true
        },
        
    })

    win.loadURL('http://localhost:3000')
}

// quite when all windows are closed
app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // for macOs when close window the app isn't closed
    if(BrowserWindow.getAllWindows().length === 0 ) createWindow()
})

app.on('ready', createWindow)