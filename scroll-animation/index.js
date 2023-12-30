const scrollbar = document.querySelector('.scrollbar')  

window.addEventListener('scroll', () => {
    console.log("scrollY",window.scrollY)
    console.log("scrollHeight",document.body.scrollHeight)
    console.log("innerHeight",window.innerHeight)
    let percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    scrollbar.style.width = percentage + '%'
})

// scrollY == distance from the top of the page to the top of the scrollbar
// innerHeight == height of the page (which includes height of the page + height of the scrollbar)
// scrollHeight == total height of the page (which includes height of the page + height of the scrollbar)