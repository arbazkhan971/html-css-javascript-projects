const output = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
console.log("buttons", buttons)
console.log("output", output)
let str = '';
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log("e.target.textContent", e.target.textContent.trim())
        if( e.target.textContent.trim() === 'AC'){
            str = ''
            output.value = str;
        }else if( e.target.textContent.trim() === '='){
            str = eval(str);
            output.value = str;
        }else if( e.target.textContent.trim() === 'DEL'){
            str = str.substring(0, str.length - 1);
            output.value = str;
        }else {
            str += e.target.textContent.trim();
            output.value = str;
        }
    });
});