
// Brittney start
var money = "$10,000";
var startBtnEl = document.getElementById("btn")

var startGame  = function() {
getPlayerName();
localStorage.setItem("Player money", money);
localStorage.setItem("player name", getPlayerName);
 window.location.replace(" ");
};

var getPlayerName = function () {
    var name = " ";
    console.log("player " + name);
    return name;
};
startBtnEl.addEventListener("click", startGame);
// Brittney end
