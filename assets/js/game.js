//Brittney start

var addBtn = document.getElementById("#add");



//  addBtn.addEventListener("click", buildWatchList)
var buildWatchList = function() {
  var CryptoName = document.createElement("p");
  CryptoName.textContent = data.data[0].name;
  var marketCap = document.createElement("p");
  marketCap.textContent = data.data[0].marketCapUsd;
 var cryptoPrice = documnt.createElement("p");
 cryptoPrice.textContent = data.data[0].priceUsd

};

// var getCryptos = function() {
//     var cryptoApi = " "
//     fetch(cryptoApi)
//     .then(function(response){
//         if(response.ok) {
//             response.json().then(function(data){
//                 displayCryptos()
//             })
//         } else {
//             alert("Unable to get Cryptos at this time")
//         }
//     })
// }

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


      