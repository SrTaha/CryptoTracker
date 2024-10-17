let Item = "";

$(document).ready(function () {
  function DataLoader() {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          CardMaker(element["nameid"], element["rank"], element["name"], [
            "symbol",
          ]);
        });
      });
  }
  DataLoader();
});
