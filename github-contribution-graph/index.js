const cont = document.querySelector(".container")
console.log(cont)
const colors = ["#196127","#219A3A","#EAEDF0","#C6E48B","#7BC96F"]
let square_count = 365;
for(let i= 0;i< 365;i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.style.backgroundColor = randomColor(colors)
    cont.appendChild(square)
}
function randomColor(colors){
    return colors[Math.floor(Math.random()*colors.length)]
}

