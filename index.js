var mSecCon = document.getElementById("mSec-container");
var secCon = document.getElementById("sec-container");
var minCon = document.getElementById("min-container");
var hourCon = document.getElementById("hour-container");
var lapCon = document.getElementById("lap-container");
var icon = document.getElementById("try");
var mSec = 00;
var sec = 00;
var min = 00;
var hour = 00;
var interval;

function render() {
    mSecCon.innerHTML = (mSec < 10) ? "0" + mSec : mSec;
    secCon.innerHTML = (sec < 10) ? "0" + sec : sec;
    minCon.innerHTML = (min < 10) ? "0" + min : min;
    hourCon.innerHTML = (hour < 10) ? "0" + hour : hour;
}
function timer() {
    mSec++
    if (mSec > 9) {
        sec++;
        mSec = 0;
    }
    else if (sec >= 59) {
        min++;
        sec = 00;
    }
    else if (min >= 59) {
        hour++;
        min = 00;
    }
    render();
}

function start() {
    if (icon.className == "fa fa-play") {
        interval = setInterval(timer, 100)
        icon.className = "fa fa-pause"
    }
    else if (icon.className == "fa fa-pause") {
        clearInterval(interval)
        icon.className = "fa fa-play"
    }
}
function stop() {
    clearInterval(interval);
    icon.className = "fa fa-play"
    mSec = 00;
    sec = 00;
    min = 00;
    hour = 00;
    render();
}

function lap() {
    var lap = "<li>" +
        ((hour < 10) ? "0" + hour : hour) +
        ":" +
        ((min < 10) ? "0" + min : min) +
        ":" +
        ((sec < 10) ? "0" + sec : sec) +
        ":" +
        ((mSec < 10) ? "0" + mSec : mSec) +
        "</li>";
    lapCon.innerHTML += lap;

}
