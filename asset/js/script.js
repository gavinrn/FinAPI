
//XOM starting URL for the website
const XOM = "https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=XOM";
//News data URL for the marquee
const newsUrl = "https://newsdata.io/api/1/news?apikey=pub_14568c083e3420b033803ee4e5dcc79894d97&q=results&category=business,technology&language=en";
// Finn Hub URL for base API functionality
var finnhubURL = "https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=";

// Global variables
var newsfeedEl = document.querySelector("#newsfeed");
const divStocks = document.getElementById("Stocks");
const amazon = document.getElementsByTagName("button");
const querySelector = document.body.querySelector("card-body");
const stockSymbol = document.querySelector("#stockSymbol-input");
const button = document.getElementById("addStocks");
var i = 0;
var color;

// Add an event lister to the add stocks button, calls getApi to for the new stock
button.addEventListener("click", function () {
  var name = stockSymbol.value.trim();

  if (i % 2 === 0) {
    color = "limegreen";
  }
  else {
    color = "orangered";
  }
  i++;
  getApi(finnhubURL + name, color);
  stockSymbol.value = "";
});

//Adds an event listner to the stocks card to save stocks to local storage on click
divStocks.addEventListener("click" , function(event) {
  event.preventDefault();
  var element = event.target;
  if (element.matches(".stocks")) {

    localStorage.setItem("symbol" , element.dataset.symbol);
  }
  else {
  }
});

// Add function to display the information from getAPI to the webpage
function displayToWebpage(price, symbol , color) {
  var div = document.createElement("div");
  div.setAttribute("class" , "stocks");
  div.setAttribute("data-symbol" , symbol);
  div.style.backgroundColor = color;
  div.textContent = symbol + " " + price.toString();
  divStocks.appendChild(div);
}

// Add function to request Finn Hub API data
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

// Function calls
getNewsApi(newsUrl);
getNewsApi(newsUrl);
getApi(XOM , "orangered");

// Add conditional to check if anything is in local storage, and displays stored items in blue
if (localStorage.getItem("symbol") !== null) {
  getApi(finnhubURL + localStorage.getItem("symbol") , "blue");
}

// Add current day and time
var today = dayjs();
console.log(today);
dayjs().format("MMM D, YYYY");
console.log(dayjs().format("MMM D, YYYY"));
var currentDay = document.querySelector("#currentDay");
currentDay.append(dayjs().format("MMM D, YYYY"));


