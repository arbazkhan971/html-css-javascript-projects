const quotes = document.querySelector('#quotes');
const author = document.querySelector('#author');
const btn = document.querySelector('#new-quote');

async function getQuote() {
    const quotes = await fetch("https://api.quotable.io/quotes/random");
    const data = await quotes.json();
    console.log(quotes)
    console.log(data[0])
    console.log("author",data[0].author)
    console.log("content",data[0].content)
    quotes.textContent = data[0].content;
    author.textContent =  "-"+ " "+data[0].author;
}


btn.addEventListener('click', getQuote);