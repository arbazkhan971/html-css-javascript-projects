const btn = document.querySelector(".button")


btn.addEventListener("click", (event)=>{
    console.log("event",event.clientX,event.clientY)
    const rect = btn.getBoundingClientRect()
    console.log("rect",rect)
    let circle = document.createElement("span")
    circle.className = "circle"
    circle.style.height = circle.style.width = `${rect.width}px`
    circle.style.left = `${event.clientX - rect.left - rect.width/2}px`
    circle.style.top = `${event.clientY - rect.top - rect.width/2}px`
    btn.appendChild(circle)
})