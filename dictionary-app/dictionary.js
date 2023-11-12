const input = document.querySelector('#input');
const output = document.querySelector('#meaning');
const search = document.querySelector('#search');

search.addEventListener('click', async() => {
    const val = input.value;
    if( val === ""){
        alert("Please enter a word");
    }else {    
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
        let meaning = await fetch(url);
        meaning = await meaning.json();
        console.log("meaning",meaning[0]['meanings'][0]["definitions"][0]["definition"])  
        output.textContent = meaning[0]['meanings'][0]["definitions"][0]["definition"];       
    }
});