const input = document.querySelector(".input")
const sizes = document.querySelector(".sizes")
const generateBtn = document.getElementById('gen-btn')
const downloadBtn = document.getElementById('dow-btn')
const qrBody = document.querySelector('.qr-body');
const qrimg = document.getElementById('qrimg');

let size = sizes.value

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQrCode();
    isEmpty()
});

sizes.addEventListener('change', (e) => {
    size = e.target.value
    generateQrCode()
    isEmpty()
})

function generateQrCode() {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${input.value}`;
}

function isEmpty() {
    if(input.value.length > 0){
        generateQrCode()
    }
    else{
        alert("Please enter any text into the textbox")
    }
}


downloadBtn.addEventListener('click' , ()=> {
    if(qrimg !== null){
        let imgArr = qrimg.getAttribute('src')
        downloadBtn.setAttribute("href", imgArr)
    }
    else{
        alert("Please enter any text into the textbox")
    }
})






// var qrcode = new QRCode("test", {
//     text: "http://jindo.dev.naver.com/collie",
//     width: 128,
//     height: 128,
//     colorDark : "#000000",
//     colorLight : "#ffffff",
//     correctLevel : QRCode.CorrectLevel.H
// });