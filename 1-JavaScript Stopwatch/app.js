var seconds = document.getElementById("seconds");
var tensSpan = document.getElementById("tens");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var tens = 00;
var second = 00;

function startTimer(){
    tens++;
    tensSpan.innerHTML = tens;

    if(tensSpan.innerHTML <= 9){
       tensSpan.innerHTML = "0"+tens;
    }
    if(tensSpan.innerHTML > 99){
        second++;
        seconds.innerHTML = "0"+second;
        tens = 00
    }
    if(seconds.innerHTML > 9){
        seconds.innerHTML = second;
    }
}
buttonStart.onclick = function(){
   Interval = setInterval(startTimer,10);
}
buttonStop.onclick = function(){
    clearInterval(Interval);
}
buttonReset.onclick = function(){
    clearInterval(Interval);
    seconds.innerHTML = "00"
    tensSpan.innerHTML = "00"
    tens = 00;
    second = 00;
}
