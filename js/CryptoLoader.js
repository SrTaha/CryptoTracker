let root = document.getElementById("root");

let html = ``;

function ChartGenerator(ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function LoadData() {
  fetch("https://api.coinlore.net/api/tickers/")
    .then((response) => response.json())
    .then((responseData) => {
      responseData.data.forEach((elem) => {
        //-----------------------------------------------
        let ChartContainers = document.createElement("ChartContainers");
        ChartContainers.classList.add(
          "w-8/12",
          "mx-auto",
          "p-4",
          "bg-gray-600",
          "my-5",
          "rounded-xl"
        );
        //-----------------------------------------------
        let ChartHeader = document.createElement("p");
        ChartHeader.innerHTML = `${elem.rank} - ${elem.name} (${elem.symbol})`;
        ChartHeader.classList.add("font-black");
        ChartContainers.appendChild(ChartHeader);
        //-----------------------------------------------
        let objChart = document.createElement("canvas");
        objChart.id = elem.id;
        ChartContainers.appendChild(objChart);
        //-----------------------------------------------
        let ChartInfo = document.createElement("p");
        ChartInfo.innerHTML = `Current Price: ${elem.price_usd}$ <br> Price Per BTC : ${elem.price_btc} <br> Total MarketCap : ${elem.market_cap_usd}$ <br> Last Price per hour : ${elem.percent_change_1h}$
        <br> Last Price per 24h : ${elem.percent_change_24h}$
        <br> Last Price per week : ${elem.percent_change_7d}$
        <br> Trades per 24h : ${elem.volume24}`;
        ChartInfo.classList.add("font-black", "m-3");
        objChart.after(ChartInfo);
        //-----------------------------------------------
        root.appendChild(ChartContainers);
        ChartGenerator(document.getElementById(`${elem.id}`));
      });
    });
}

LoadData();
