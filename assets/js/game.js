//Brittney start
const startMoney = "$10,000";
var money = " ";
var buyBtn = document.getElementById("trade");
var sellBtn = document.getElementById("sell")

var endGame = function() {
if (money <= startMoney) {
    console.log("You did not become a crypto-Millionaire! You lose!")
} else {
    console.log("Congratulations, You Win!")
};

localStorage.setItem("Player's Money", money)

var playAgain = window.confirm("Do you want to play again?") 
 if (playAgain === true) {
     startGame();
 } else {
     window.location.replace(" ")
 }
};

var getCryptos = function() {
    var cryptoApi = " "
    fetch(cryptoApi)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                displayCryptos()
            })
        } else {
            alert("Unable to get Cryptos at this time")
        }
    })
}
// event.preventDefault()
// Brittney end