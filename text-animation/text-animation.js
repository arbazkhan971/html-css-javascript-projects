const animatedtext =document.querySelector(".animated-text");
const text = "Subscribe to Procode Youtube Channel"
let i = 0;
let speed = 50;

function animate(){
    animatedtext.textContent = text.substring(0,i)
    i++;
    console.log(i)
    if( i > text.length){
        i = 0;
    }
    setTimeout(animate,speed)
}

animate();