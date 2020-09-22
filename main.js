const { app, BrowserWindow } = require('electron')
const {
  getRenderUrl,
  isDevelopment
} = require('./tools/index.js')

let rootWindow

function createWindow () {
  // 创建浏览器窗口
  rootWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true
    }
  })
  if (isDevelopment()) {
    rootWindow.webContents.openDevTools()
  }

  app.on('close', () => { rootWindow = null })
  // 加载index.html
  rootWindow.loadURL(getRenderUrl())
}

app.whenReady().then(createWindow)
