var name = window.prompt("Ola! Por favor, informe seu nome");

var greeting = document.getElementById("greeting").innerHTML += ", " + name;

var enterDays = document.getElementById("enterDays");

enterDays.onclick = calculateDays;

function calculateDays(){

  var daysInput = document.getElementById("days");

  var days = daysInput.value;

  var daysMessage = document.getElementById("daysMessage");

  if(days < 4){
    daysMessage.innerHTML = "Corra, seu tempo é curto. Aproveite cada minuto como se fosse o último !";
  }
  else if(days < 7){
    daysMessage.innerHTML = "Esqueça o trabalho, é hora de curtir e relaxar ! ";
  }
  else{
    daysMessage.innerHTML = "Você tem tempo de sobra para aproveitar todas as atrações, se aventurar por lugares desconhecidos e porque não, descançar um pouco.";
  }

  var hours = days * 24;

  var minutes = hours * 60;

  var seconds = minutes * 60;

  var hoursMessage = document.getElementById("hoursMessage");
  var minutesMessage = document.getElementById("minutesMessage");
  var secondsMessage = document.getElementById("secondsMessage");

  hoursMessage.innerHTML = "Sua aventura irá durar " + hours + " horas.";
  minutesMessage.innerHTML = "Ou seja " + minutes + " minutos.";
  secondsMessage.innerHTML = "O que dá " + seconds + " segundos de pura diversão !!!.";

  var timingNext = document.getElementById("timingNext");
  timingNext.removeAttribute("hidden");

  timingNext.onclick = function(){
    document.getElementById("budgetSection").removeAttribute("hidden");
  }

}
var enterBudget = document.getElementById("enterBudget");
enterBudget.onclick = calculateBudget;

function calculateBudget(){
  var tripBudget = document.getElementById("tripBudget").value;

  var tripExchangeMsg = document.getElementById("tripExchangeMsg");

  var calcBudget = tripBudget/3.13;

  tripExchangeMsg.innerHTML = "Você tem USD $" + calcBudget + " para sua viagem";

  var BudgetPeerDay = calcBudget/days;

  var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");

  dailyExchangeMsg.innerHTML = "Você poderá gastar até $" + BudgetPeerDay + " por dia";

  var exchange10Msg = document.getElementById("exchange10Msg");

  exchange10Msg.innerHTML = "Você irá gastar R$" + (3.13 * 10) + " em um item de 10 doláres";

  exchange500Msg = document.getElementById("exchange500Msg");

  exchange500Msg.innerHTML = "Você irá gastar R$" + (3.13 * 500) + " em um item de 500 doláres";



}
