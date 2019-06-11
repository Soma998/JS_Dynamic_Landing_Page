const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');
const felsoDiv = document.querySelector('#felso');
const alsoDiv = document.querySelector('#also');

//Show Time
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //12h format
    // hour = hour % 12 || 12;

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
    hour = 16;
    // hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Jó Reggelt';

    } else if(hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Jó Napot";
        document.body.style.color = "white";
        focus.style.opacity = '1';
        felsoDiv.style.marginBottom = "-3rem";

    } else {
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Jó Estét';
        document.body.style.color = 'white';
        felsoDiv.style.marginBottom = "-2.5rem";
        alsoDiv.innerHTML = "<h2>Ideje lenne haza menni</h2>"
    }
}

//Get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '(Add meg a neved)';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set name
function setName(e) {
    if (e.type === 'keypress') {
        // keypress === enter
        if (e.wich == 13 ||e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '(Add meg mire fokuszálsz ma)';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // keypress === enter
        if (e.wich == 13 ||e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



//Run functions
showTime();
getName();
getFocus();
setBg();