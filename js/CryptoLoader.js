let root = document.getElementById("root");
let nav = document.getElementById("nav");
let html = ``;

nav.innerHTML = `<nav class="bg-gray-800 p-3 relative top-0 flex items-center">
        <a href="https://github.com/SrTaha/CryptoTracker" target="_blank" class="font-black text-white mx-auto">Crypto
            Tracker : Track Coins Price At Any Time </a>
    </nav>`;

//-----------------------------------------------
// function ChartGenerator(ctx) {
//   new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [12, 19, 3, 5, 2, 3],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }

// let objChart = document.createElement("canvas");
// objChart.id = elem.id;
// ChartContainers.appendChild(objChart);

function LoadData() {
  fetch("https://api.coinlore.net/api/tickers/")
    .then((response) => response.json())
    .then((responseData) => {
      responseData.data.forEach((elem) => {
        //-----------------------------------------------
        let ChartContainers = document.createElement("ChartContainers");
        ChartContainers.classList.add(
          "w-11/12",
          "md:w-5/12",
          "lg:w-3/12",
          "p-4",
          "bg-gray-600",
          "rounded-xl"
        );
        //-----------------------------------------------
        let ChartHeader = document.createElement("p");
        ChartHeader.innerHTML = `${elem.rank} - ${elem.name} (${elem.symbol})`;
        ChartHeader.classList.add("font-black");
        ChartContainers.appendChild(ChartHeader);
        //-----------------------------------------------
        let ChartInfo = document.createElement("p");
        ChartInfo.innerHTML = `Current Price: ${elem.price_usd}$ <br> Price Per BTC : ${elem.price_btc} <br> Total MarketCap : ${elem.market_cap_usd}$ <br> Last Change per hour : ${elem.percent_change_1h}$
        <br> Last Change per 24h : ${elem.percent_change_24h}$
        <br> Last Change per week : ${elem.percent_change_7d}$
        <br> Trades per 24h : ${elem.volume24}`;
        ChartInfo.classList.add("font-black", "m-3");
        ChartHeader.after(ChartInfo);
        //-----------------------------------------------
        root.appendChild(ChartContainers);
      });
    });
}

LoadData();
