const appleUrl = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Tesla';
const amazonUrl = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Amazon.com';
const newsUrl = "https://newsdata.io/api/1/news?apikey=pub_1448392e6bf22e35e0f5846a4d94bc7b09f61&q=results&category=technology&language=en";

var newsfeedEl = document.querySelector("#newsfeed");

// Function to get Stock data
function getApi(requestUrl){
fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.result[0].symbol)
      var symbol = data.result[0].symbol
      const quoteUrl = 'https://finnhub.io/api/v1/quote?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&symbol='+symbol;
      fetch(quoteUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
    });
}

getApi(appleUrl);
getApi(amazonUrl);


//appleData.appendChild

// Function to get news data
function getNewsApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        var resultTitle = document.createElement("p");
        resultTitle.textContent = data.results[i].title;
        newsfeedEl.append(resultTitle);
        // console.log(data.results[i].title)
      }
    })
}

getNewsApi(newsUrl)


