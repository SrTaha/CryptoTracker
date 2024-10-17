let item = "";

$(document).ready(function () {
  function GetData() {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((Response) => Response.json())
      .then((Data) => {
        Data["data"].forEach((element) => {
          AddItems(
            element["nameid"],
            element["rank"],
            element["name"],
            element["symbol"],
            element["price_usd"],
            element["percent_change_24h"],
            element["percent_change_1h"],
            element["percent_change_7d"],
            element["price_btc"],
            element["market_cap_usd"]
          );
        });
      });
  }

  GetData();

  function AddItems(
    nameid,
    rank,
    name,
    symbol,
    price_usd,
    percent_change_24h,
    percent_change_1h,
    percent_change_7d,
    price_btc,
    market_cap_usd
  ) {
    item += `
    <div class="lg:w-3/12 bg-slate-400 p-2 rounded-lg w-11/12 md:w-5/12" 
    id=${nameid}>
    <p>${rank} - ${name} (${symbol})</p> <br>
    <p>Price : ${price_usd}$</p>
    <p>Price Per BTC : ${price_btc}</p>
    <p>Changes 24h : ${percent_change_1h}</p>
    <p>Changes 24h : ${percent_change_24h}</p>
    <p>Changes 24h : ${percent_change_7d}</p>
    <p>MarKetCap Usd : ${market_cap_usd}</p>
    </div>
    `;
    document.body.innerHTML = item;
  }
});
