//Brittney start
const startMoney = "$10,000";
var money = " ";
var buyBtn = document.getElementById("trade");
var sellBtn = document.getElementById("sell");
// Doug Start
// var playerName = localStorage.getItem('pName');
var playerMoney = localStorage.getItem('pMoney');


function onLoad() {
    var playerName = localStorage.getItem('pName');
    var play = document.getElementById("player")
    if (!playerName) {
    play.textContent = "Crypto Watch"
    
} 
else 
{

    console.log("playerName>>> " + playerName)
    console.log("Play>>> " + play)
    play.textContent = playerName + "'s Crypto Watch"
}
}
onLoad()
// Doug End

var addBtn = document.getElementById("#add");




var buildWatchList = function() {
  var CryptoName = document.createElement("p");
  CryptoName.textContent = data.data[0].name;
  var marketCap = document.createElement("p");
  marketCap.textContent = data.data[0].marketCapUsd;
 var cryptoPrice = documnt.createElement("p");
 cryptoPrice.textContent = data.data[0].priceUsd

};

function addToWatchList (event) {
    console.log(event.target.textContent)
    console.log(Number(event.target.getAttribute("data-price")))

    var watchListDiv = document.querySelector("#watchList");

    var cryptoContainer = document.createElement("div");
    cryptoContainer.classList.add("cryptoContainer");

    // append the cryptoname
    var CryptoName = document.createElement("p");
    CryptoName.textContent = event.target.textContent;
    
    var cryptoPrice = document.createElement("p");
    cryptoPrice.textContent = Number(event.target.getAttribute("data-price")).toFixed(2);

    var marketCap = document.createElement("p");
    marketCap.textContent = Number(event.target.getAttribute("market-cap")).toFixed(2);
    
    cryptoContainer.append(CryptoName, cryptoPrice, marketCap);
    watchListDiv.append(cryptoContainer)

    localStorage.setItem(addToWatchList);
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
            // console.log(data);
            for (i = 0; i < 20; i++) {
                var cname = data.data[i].name;
                var cprice = data.data[i].priceUsd;
                var marketCapValue = data.data[i].marketCapUsd;
                console.log(cname);

                var list = document.getElementById('crypList');
                var el = document.createElement('div');
                el.classList.add('clist', 'dropdown-item');
                el.textContent = cname;
                el.setAttribute("data-price", cprice)
                el.setAttribute("market-cap", marketCapValue)

                el.addEventListener("click", addToWatchList)

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
               var redditSection = document.querySelector('.redditSection');

               var redditPost = document.createElement('article');
               redditPost.classList.add('media');
               redditSection.appendChild(redditPost);

               //user icon
               var rIcon = document.createElement('figure');
               rIcon.classList.add('.media-left');
               redditPost.appendChild(rIcon);

               var rIconContent = document.createElement('p');
               rIconContent.classList.add('image', 'is-96x96');
               rIcon.appendChild(rIconContent);

               var rIconImage = document.createElement('img');
               rIconImage.src = 'https://i.redd.it/rrz3hmsxcll71.png';
               rIconContent.appendChild(rIconImage);

               //content

               var rMediaContent = document.createElement('div');
               rMediaContent.classList.add('.media-content');
               redditPost.appendChild(rMediaContent);

               var rContent = document.createElement('div');
               rContent.classList.add('.content');
               rMediaContent.appendChild(rContent);

               var rInfo = document.createElement('p');
               rInfo.classList.add('redditInfo');
               rContent.appendChild(rInfo);

               var rAuthor = document.createElement('strong');
               rAuthor.textContent = data.data.children[i].data.author + '  ';
               rAuthor.classList.add('rAuthor'); 
               rInfo.appendChild(rAuthor);

               var rUsername = document.createElement('small');
               rUsername.textContent = data.data.children[i].data.author_fullname;
               rUsername.classList.add('rUsername');
               rInfo.appendChild(rUsername);

               var rTitle = document.createElement('p');
               rTitle.textContent = data.data.children[i].data.title;
               rTitle.classList.add('rTitle');
               rInfo.appendChild(rTitle);

               var rLink = document.createElement('a');
               rLink.type = 'a';
               rLink.innerHTML = 'click to read more';
               rLink.href = data.data.children[i].data.url;
               rLink.target = '_blank';
               rLink.rel = 'noopener noreferrer';
               rLink.classList.add('rLink');
               rInfo.appendChild(rLink);
            }
          });
      };

      apiCall2();

      //Jessica end

// Doug Start


