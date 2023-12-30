const container = document.querySelector(".image-container")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

let count = 0;
let width = 500;

prev.addEventListener("click",()=>{
    console.log(count)
    if(count > 0){
        count--;
        container.style.transform = `translateX(-${width*count}px)`
    }
})

next.addEventListener("click",()=>{
    console.log("inside next")
    console.log(count)
    if(count < 4){
        count++;
        container.style.transform = `translateX(-${width*count}px)`
    }

})