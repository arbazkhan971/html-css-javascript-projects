const xpos = document.querySelector("#xpos-value");
const ypos = document.querySelector("#ypos-value");


window.addEventListener("mouseover", (event) => {
    console.log(event);
    const xclient = event.clientX;
    const yclient = event.clientY;
    xpos.textContent = xclient;
    ypos.textContent = yclient;
} );