const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

console.log(timer);
console.log(start);
console.log(reset);

let active = false;
let [ss,mm,hh] = [0,0,0];
let interval;

function watchcount(){
    ss++;
    if ( ss > 59 ) {
        ss = 0;
        mm++;
        if ( mm > 59){
            mm = 0;
            hh++;
        }
    }
    console.log(ss,mm,hh)  
    hh = String(hh).padStart(2,'0');
    mm = String(mm).padStart(2,'0');
    ss = String(ss).padStart(2,'0');
    timer.textContent = `${hh}:${mm}:${ss}`;  
}


start.addEventListener('click', () => {

    active = active ? false : true;
    if ( active ) {
        start.textContent = 'Stop';
        start.classList.add('active');
        interval = setInterval(watchcount,100);

    }else{
        start.textContent = 'Start';
        start.classList.remove('active');
        clearInterval(interval);

    }

});

reset.addEventListener('click', () => { 
    clearInterval(interval);
    [ss,mm,hh] = [0,0,0];
    timer.textContent = '00:00:00';
});