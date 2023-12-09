const clickme = document.querySelector('#btn')
console.log("clickme",clickme)
const output = document.querySelector(".output")
console.log("output",output)

const url = "https://emoji-api.com/emojis?access_key=8bd7c2327a663e6d1b92a245cc9b14a0b56f7bf6";

function getRandom(n){
    return Math.floor(Math.random()*n)
}

clickme.addEventListener("click",async ()=> {
    console.log("hello from clickme")

    let getData = await fetch(url)
    getData = await getData.json()
    console.log("getdata length", getData.length)
    console.log("getData",getData)
    console.log(getRandom(getData.length),"getRandom")
    console.log("random getDataObject", getData[200])
    console.log("random getRandomData",getData[getRandom(getData.length)])
    const randomN = getRandom(getData.length)
    const character= getData[randomN].character
    const uniCode = getData[randomN].unicodeName
    console.log(character)
    console.log(uniCode)
    clickme.textContent = character
    output.textContent = uniCode

});