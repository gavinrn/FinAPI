const appleUrl = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Tesla';

const amazonUrl = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=Amazon.com';
//var appleData = document.querySelector(#apple-btn);


//const api_key = finnHub.ApiClient.instance.authentications['api_key'];
// const apiKey = "ce9oj4iad3i831oou580ce9oj4iad3i831oou58g"; // Replace with your own API key
// api_key.apiKey = apiKey;
// const finnHubClient = new finnHub.DefaultApi()

// finnHubClient.companyBasicFinancials("AAPL", "all", (error, data, response) => {
//   console.log(data)
// });

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
    //   for (var i = 0; i < data.length; i++) {
    //     var listItem = document.createElement('li');
    //     listItem.textContent = data[i].summary;
    //     repoList.appendChild(listItem);
    //   }
    });
}

getApi(appleUrl);
getApi(amazonUrl);

//appleData.appendChild   