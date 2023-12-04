const { app, BrowserWindow } = require('electron');
// 引入Electron模块和处理文件路径、URL的模块
const url = require('url');
const path = require('path');

// 创建主窗口
function createMainWindow() {
    // 创建一个Electron窗口
    const mainWindow = new BrowserWindow({
        title: 'Electron', // 窗口标题
        width: 1000, // 窗口宽度
        height: 600 // 窗口高度
    });

    // 加载初始URL到主窗口
    mainWindow.loadURL('http://localhost:3000');
}

// 当应用程序准备好时，创建主窗口
app.whenReady().then(createMainWindow);

