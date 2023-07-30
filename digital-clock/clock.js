const timer = document.querySelector('.timer');

console.log(timer,"timer");

function getTime() {
    console.log("getTime");
    const now = new Date();
    console.log(now,"now");
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    console.log(h,m,s);
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    const timerstr = h + ":" + m + ":" + s;
    timer.textContent = timerstr;
}

setInterval(getTime, 1000);