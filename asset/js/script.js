const teslaUrl = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Tesla';

const amazonUrl = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Amazon.com';

const microSoft = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=MSFT';

const XOM = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=XOM';

var finnhubURL = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=';
//var appleData = document.querySelector(#apple-btn);

const divStocks = document.getElementById("Stocks");
const amazon = document.getElementsByTagName("button");
const querySelector = document.body.querySelector("card-body");

const button = document.getElementById("addStocks");

button.addEventListener("click" , function() {
  var name = prompt("Add a stock to the list with a name or symbol");
  getApi(finnhubURL + name);
})

function displayToWebpage(price , symbol) {
  var div = document.createElement("div");
  div.textContent = symbol + " " + price.toString();
  divStocks.appendChild(div);
}


function getApi(requestUrl) {

  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data.result[0].symbol)
      var symbol = data.result[0].symbol
      const quoteUrl = 'https://finnhub.io/api/v1/quote?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&symbol=' + symbol;

      fetch(quoteUrl)
        .then(function (response) {
          return response.json();

        })
        .then(function (data) {
          console.log(data.c);


          displayToWebpage(data.c , symbol);
        })
    });

  }


getApi(teslaUrl);
getApi(amazonUrl);
getApi(microSoft);
getApi(XOM);
console.log(button);






