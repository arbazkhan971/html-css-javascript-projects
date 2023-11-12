const clickme = document.querySelector('#btn');
const emojiname = document.querySelector('#emoji-name');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(1000),"random number 0 - 9")


clickme.addEventListener('click', async() => {
    const data = await fetch('https://emoji-api.com/emojis?access_key=8bd7c2327a663e6d1b92a245cc9b14a0b56f7bf6');
    console.log("data from endpoint emoji-api",data)
    const emojis = await data.json();
    console.log("emojis",emojis)
    console.log("emojis[0]",emojis[0])
    console.log("emojis[0].character",emojis[0].character)
    console.log("emojis[0].slug",emojis[0].slug)
    console.log("emojis[0].unicodeName",emojis[0].unicodeName)
    console.log("emojis[0].codePoint",emojis[0].codePoint)
    console.log("emojis[0].group",emojis[0].group)
    console.log(emojis.length,"emojis.lenght")
    const randomNumber = getRandomInt(emojis.length);
    const emoji = emojis[randomNumber];
    console.log("emoji",emoji)
    emojiname.innerHTML = emoji.unicodeName;
    clickme.innerHTML = emoji.character;
});