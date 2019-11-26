const electron = require ('electron');
const {app, BrowserWindow, ipcMain} = electron ;

app.on('ready',()=>{
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true,
        } ,
        width : 1000,
        height : 600,
        resizable:false
    });
    mainWindow.loadURL(`file://${__dirname}/index.htm`);
    mainWindow.on('closed',()=>{
        app.exit ()
    })


    ipcMain.on('add',(event,myWindow)=>{
        if (myWindow == 'book'){
            const addBookWindow = new BrowserWindow ({
                width : 1000,
                height : 650,
                resizable : false
            });
            addBookWindow.loadURL(`file://${__dirname}/addingBooks.htm`);
            ipcMain.on('cancel',()=>{
                addBookWindow.close()
            })
        }
        if (myWindow == 'personel') {
            const addPersonlWindow = new BrowserWindow ({
                width : 800,
                height : 500,
                resizable : false
            });
            addPersonelWindow.loadURL(`file://${__dirname}/addingPersonel.htm`);
        }

        if(myWindow == 'member') {
            const addMemberWindow = new BrowserWindow ({
                width : 450,
                height : 650,
                resizable : false
            });
            addMemberWindow.loadURL(`file://${__dirname}/addingMember.htm`);
        }

    })

});


