const input = document.querySelector("#Input_qr");
const Qrcode = document.querySelector("#Qrcode");



document.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){

        gerarQRcode();
    }
})


function gerarQRcode(){
    if (!input.value) return;

    Qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
 
        GerarData();
}})

function GerarData(){
    
let data = new Date()
let dia = String(data.getDate()).padStart(2, '0')
let mes = String(data.getMonth()+1).padStart(2, '0')
let ano = data.getFullYear()
let dataAtual = `${dia}/${mes}/${ano}`

document.getElementById("data").innerHTML = dataAtual}

