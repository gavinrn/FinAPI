const finnHubUrl = 'https://finnhub.io/api/v1/search?token=ce9oj4iad3i831oou580ce9oj4iad3i831oou58g&q=apple';

//const api_key = finnHub.ApiClient.instance.authentications['api_key'];
// const apiKey = "ce9oj4iad3i831oou580ce9oj4iad3i831oou58g"; // Replace with your own API key
// api_key.apiKey = apiKey;
// const finnHubClient = new finnHub.DefaultApi()

// finnHubClient.companyBasicFinancials("AAPL", "all", (error, data, response) => {
//   console.log(data)
// });


fetch(finnHubUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    //   for (var i = 0; i < data.length; i++) {
    //     var listItem = document.createElement('li');
    //     listItem.textContent = data[i].summary;
    //     repoList.appendChild(listItem);
    //   }
    });



    