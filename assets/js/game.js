//Brittney start
const startMoney = "$10,000";
var money = " ";
var buyBtn = document.getElementById("trade");
var sellBtn = document.getElementById("sell");

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

const baseUrl = 'https:api.coincap.io';
      const endpoint = '/v2/assets';
      const url = baseUrl + endpoint;
      function apiCall() {
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            for (i = 0; i < 20; i++) {
                var cname = data.data[i].name;
                console.log(cname);

                var list = document.getElementById('crypList');
                var el = document.createElement('div');
                el.classList.add('clist', 'dropdown-item');
                el.textContent = cname;
                list.appendChild(el);   
            }

            var dropdown = document.querySelector('.dropdown');
            dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdown.classList.toggle('is-active');
            });
          });
      }
      apiCall();
// event.preventDefault()
// Brittney end

//reddit api -Jessica
const baseUrl2 = 'https://www.reddit.com/r/CryptoCurrency/top.json?limit=10';
      function apiCall2() {
        fetch(baseUrl2)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);

            for (i=0; i < 10; i++) {
                var redditSection = document.querySelector('.reddit');
                var redditPost = document.createElement('div');
                redditPost.classList.add('redditPost');
                redditSection.appendChild(redditPost);

                var rAuthor = document.createElement('h3');
                rAuthor.textContent = data.data.children[i].data.author;
                redditPost.appendChild(rAuthor);

                var rTitle = document.createElement('div');
                rTitle.textContent = data.data.children[i].data.title;
                redditPost.appendChild(rTitle);            

                var rMessage = document.createElement('div');
                rMessage.textContent = data.data.children[i].data.selftext;
                //redditPost.appendChild(rMessage);

                var rLink = document.createElement('a');
                rLink.type = 'a';
                rLink.innerHTML = 'click to read more';
                rLink.href = data.data.children[i].data.url;
                rLink.target = '_blank';
                rLink.rel = 'noopener noreferrer';
                redditPost.appendChild(rLink);
            }
          });
      };

      apiCall2();
