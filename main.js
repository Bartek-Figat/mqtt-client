const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    autoHideMenuBar: true,
    titleBarOverlay: {
      color: "#2f3241",
      symbolColor: "#74b1be",
    },
    webPreferences: {
      contextIsolation: true,
      devTools: true,
      nodeIntegration: true,
    },
  });

  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, "../build.index.html"));
  } else {
    mainWindow.loadURL("http://localhost:3000");
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
