const text = document.querySelector('.text');
console.log(text.innerHTML)

const value = document.querySelector('#speed');
console.log(value.value)
let speed = 1500/value.value;
let textContent = "I love programming";
value.addEventListener('input', (e)=>{
    console.log(e.target.value)
    speed = 1500/e.target.value;
    // text.style.animationDuration = `${e.target.value}s`
})
let index = 1;
function writeText(){
    text.innerHTML = textContent.slice(0, index);
    index++;
    if(index > textContent.length){
        index = 1;
    }
    setInterval(writeText, speed);
}

writeText();
