startdate = new Date();
clockStart = startdate.getTime();

function initStopwatch() {
    var thisTime = new Date();
    return (thisTime.getTime() - clockStart)/1000;
}

function getSecs() {
    var tSecs = Math.round(initStopwatch());
    var iSecs = parseInt(tSecs/ 5);
    document.getElementById("timer-counter").innerHTML = iSecs;
    setTimeout('getSecs()', 1000);
}