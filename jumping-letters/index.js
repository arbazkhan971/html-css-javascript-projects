const container = document.querySelectorAll("span")
console.log(container)
container.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })
})
