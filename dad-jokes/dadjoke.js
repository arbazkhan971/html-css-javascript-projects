const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#get-joke');


async function generateJoke(){
    const header = {
        headers: { 'X-Api-Key': 'APUFhJBLuaMPjcJswqx9Tw==5oDPPS7wbSQfev4D'}
    }
    const url = `https://api.api-ninjas.com/v1/dadjokes?limit=1`
    let dadjoke = await fetch(url, header);
    dadjoke = await dadjoke.json();
    console.log(dadjoke,"dad joke");
    console.log(dadjoke[0])
    console.log(dadjoke[0].joke)
    joke.innerHTML = dadjoke[0].joke;

}


jokeBtn.addEventListener('click', generateJoke);