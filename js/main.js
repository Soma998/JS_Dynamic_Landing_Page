const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');

//Show Time
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //am or pm
    const amPm = hour >= 12 ?  'De.' : 'Du.';

    //12h format
    hour = hour % 12 || 12;

    //output
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBg() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Jó Reggelt';
    } else if(hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Jó Napot";
    } else {
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Jó Estét';
        document.body.style.color = 'white';
    }
}

//Run functions
showTime();
setBg();