//Brittney start

var addBtn = document.getElementById("#add");




var buildWatchList = function() {
  var CryptoName = document.createElement("p");
  CryptoName.textContent = data.data[0].name;
  var marketCap = document.createElement("p");
  marketCap.textContent = data.data[0].marketCapUsd;
 var cryptoPrice = documnt.createElement("p");
 cryptoPrice.textContent = data.data[0].priceUsd

};
//  addBtn.addEventListener("click", buildWatchList);

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


      
