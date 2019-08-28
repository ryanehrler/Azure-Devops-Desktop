const electron = require('electron')
const {app, BrowserWindow} = electron

// Adds start menu item and handles other installer events
require("./installers/squirrelSetupEvents").handleSquirrelEvent();

let mainWindow

function createWindow () {
  const {width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: false
    },
    icon: __dirname + '/assets/azure-devops-icon.png'
  })

  mainWindow.loadURL('https://dev.azure.com/')

  mainWindow.maximize();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})