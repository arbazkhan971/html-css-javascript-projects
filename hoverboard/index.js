const container = document.querySelector(".container")
const n_of_square = 500;
const colors = ["green","orange","yellow","red","violet","pink"];

function randomC(colors){
    return colors[Math.floor(Math.random()*colors.length)]
}

function setColor(element){
    element.style.backgroundColor = randomC(colors);
}

function unsetColor(element){
    element.style.backgroundColor = "#1D1D1D";
    element.style.boxShadow = "0 0 2px 0 rbga(0,0,0,0.3)";
}

for(let i=0;i<n_of_square;i++){
    const square = document.createElement("div")
    square.classList.add("square");
    square.addEventListener("mouseover",()=>{
        setColor(square)
    })
    square.addEventListener("mouseout",()=>{
        unsetColor(square)  
    })
    container.appendChild(square)
}