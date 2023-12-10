const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

const imgContainer = document.querySelector(".img-container")

let count  = 0;
let widht = 500;

prev.addEventListener("click",()=>{
    console.log("clicked prev")
    if ( count > 0){
        count--;
        imgContainer.style.transform = `translateX(-${count*widht}px)`;
    }


})

next.addEventListener("click",()=>{
    console.log("clicked next")
    if(count < 5){
        count++;
        imgContainer.style.transform = `translateX(-${count*widht}px)`;
    }

})