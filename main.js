const electron = require ('electron');
const {ipcRenderer} = electron ;

//################################BOOKS##############################################
document.getElementById('books').addEventListener('click',()=>{
    
    document.querySelector('article').innerHTML=    
    `
    <link rel="stylesheet" href="index.css">
    <iframe src="lists/bookList.htm" width="970" height="420"> </iframe>
    <div id='footers'>
    <button class='footer-button-books' disabled='true' id='editBooks'> ویرایش کردن  </button>
    <button class='footer-button-books' disabled='true' id='deleteBooks'> حذف کردن </button>
    <button class='footer-button-books' id='addBooks'> اضافه کردن </button>
    </div>
    `
    document.getElementById('addBooks').addEventListener('click',()=>{
        const myWindow = 'book';
        ipcRenderer.send('add',myWindow);
    })
})

//###################################PERSONEL#####################################################

document.getElementById('personel').addEventListener('click',()=>{
    ipcRenderer.send('sqlLoad');
    document.querySelector('article').innerHTML=    
    `
    <link rel="stylesheet" href="index.css">
    <iframe src="lists/personelList.htm" width="970" height="420"> </iframe>
    <div id='footers'>
    <button class='footer-button-personel' disabled='true' id='editPersonel'> ویرایش کردن  </button>
    <button class='footer-button-personel' disabled='true' id='deletePersonel'> حذف کردن </button>
    <button class='footer-button-personel' id='addPersonel'> اضافه کردن </button>
    </div>
    `

    document.getElementById('addPersonel').addEventListener('click',()=>{
        const myWindow = 'personel';
        ipcRenderer.send('add',myWindow);
    })
})

//###############################MEMBER############################################

document.getElementById('member').addEventListener('click',()=>{
    document.querySelector('article').innerHTML =
    `
    <link rel="stylesheet" href="index.css">
    <iframe src="lists/memberList.htm" width="970" height="420"> </iframe>
    <div id='footers'>
    <button class='footer-button-member' disabled='true' id='editMember'> ویرایش کردن  </button>
    <button class='footer-button-member' disabled='true' id='deleteMember'> حذف کردن </button>
    <button class='footer-button-member' id='addMember'> اضافه کردن </button>
    </div>
    `
    document.getElementById('addMember').addEventListener('click',()=>{
        const myWindow = 'member';
        ipcRenderer.send('add',myWindow);
    })
})
