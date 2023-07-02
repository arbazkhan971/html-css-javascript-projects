const cards = document.querySelectorAll('.inner-container');

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove("active")
    });
}
cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add("active")
    });
})

