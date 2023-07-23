const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');

console.log(qrinput, qrimg, qrbutton)

qrbutton.addEventListener('click', () => {

    const inputValue = qrinput.value;
    console.log(inputValue)    

    if( !inputValue ) {
        alert('Please enter a valid URL');
        return;
    }else{
        qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        arimg.alt = `QR code for ${inputValue}`;
    }

});