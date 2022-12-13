const teslaUrl =
  "https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Tesla";

const amazonUrl =
  "https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Amazon.com";

const microSoft =
  "https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=MSFT";

const XOM =
  "https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=XOM";

const newsUrl =
  "https://newsdata.io/api/1/news?apikey=pub_14568c083e3420b033803ee4e5dcc79894d97&q=results&category=business,technology&language=en";

var finnhubURL =
  "https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=";

var newsfeedEl = document.querySelector("#newsfeed");

const divStocks = document.getElementById("Stocks");
const amazon = document.getElementsByTagName("button");
const querySelector = document.body.querySelector("card-body");
const stockSymbol = document.querySelector("#stockSymbol-input");


const button = document.getElementById("addStocks");

var i = 0;
var color = "blue";
button.addEventListener("click", function () {
  var name = stockSymbol.value.trim();

  if (i % 2 === 0) {
    color = "blue";
  } else {
    color = "red";
  }
  i++;
  getApi(finnhubURL + name, color);
});

function displayToWebpage(price, symbol, color) {
  var div = document.createElement("div");
  div.setAttribute("class", "stocks");
  div.setAttribute("data-price", price);
  div.style.backgroundColor = color;
  div.textContent = symbol + " " + price.toString();
  divStocks.appendChild(div);
}

function getApi(requestUrl, color) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data.result[0].symbol);
      var symbol = data.result[0].symbol;
      const quoteUrl =
        "https://finnhub.io/api/v1/quote?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&symbol=" +
        symbol;

      fetch(quoteUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data.c);

          displayToWebpage(data.c, symbol, color);
        });
    });
}
// Newsfeed API function
function getNewsApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        var resultTitle = document.createElement("a");
        resultTitle.textContent = data.results[i].title + "    |    ";
        resultTitle.setAttribute("href", data.results[i].link);
        newsfeedEl.append(resultTitle);
      }
    });
}

getNewsApi(newsUrl);

getNewsApi(newsUrl);

getApi(teslaUrl, "blue");
getApi(amazonUrl, "red");
getApi(microSoft, "blue");
getApi(XOM, "red");
console.log(button);

// Add current day and time
var today = dayjs();
console.log(today);
dayjs().format("MMM D, YYYY");
console.log(dayjs().format("MMM D, YYYY"));
var currentDay = document.querySelector("#currentDay");
currentDay.append(dayjs().format("MMM D, YYYY"));

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
