const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const captcha = document.querySelector(".captcha")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const refresh = document.querySelector("#refresh")

submit.addEventListener("click",()=>{
    const inpval = input.value;
    const captchaval = captcha.textContent.trim();
    console.log(inpval)
    console.log(captchaval)
    if( inpval == captchaval ){
        alert("Captcha is Matched")
    }else {
        alert("Captcha is not Matched")
    }
})


refresh.addEventListener("click",()=>{
    captcha.textContent = generateCaptcha();
})
function generateCaptcha(){
    let captcha_gen = "";
    for(let i=0;i<6;i++){
        captcha_gen+= chars[Math.floor(Math.random()*chars.length)]
    }
    return captcha_gen
}

console.log(generateCaptcha())