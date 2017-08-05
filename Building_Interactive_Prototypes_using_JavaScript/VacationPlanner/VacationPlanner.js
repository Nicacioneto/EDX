var name = window.prompt("Ola! Por favor, informe seu nome");

var greeting = document.getElementById("greeting").innerHTML += ", " + name;

var enterDays = document.getElementById("enterDays");

enterDays.onclick = calculateDays;

console.log("calculateDays was called");

 function calculateDays(){

   console.log("On calculateDays function");

   var daysInput = document.getElementById("days");

   var days = daysInput.value;

   console.log("Numero de dias informado = " + days);

   var daysMessage = document.getElementById("daysMessage");

    if(days < 4){
       daysMessage.innerHTML = "Aproveite cada minuto de seu tempo !";
    }
    else if(days < 7){
       daysMessage.innerHTML = "Curta todas as atrações e relaxe um pouco ! ";
    }
    else{
       daysMessage.innerHTML = "Você terá tempo de sobra para aproveitar todas as atrações e relaxar!";
     }

     var hours = days * 24;

     console.log(hours);

     var minutes = hours * 60;

     console.log(minutes);

     var seconds = minutes * 60;

     console.log(seconds);


     var hoursMessage = document.getElementById("hoursMessage");
     var minutesMessage = document.getElementById("minutesMessage");
     var secondsMessage = document.getElementById("secondsMessage");

     hoursMessage.innerHTML = "Significa que você estará no Brasil por " + hours + " hours.";
     minutesMessage.innerHTML = "Significa que você estará no Brasil por " + minutes + " minutes.";
     secondsMessage.innerHTML = "Significa que você estará no Brasil por " + seconds + " seconds.";

 }
