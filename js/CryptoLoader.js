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
        let div = document.createElement("div");
        div.classList.add("w-4/12");
        let obj = document.createElement("canvas");
        obj.id = elem.id;
        div.appendChild(obj);
        root.appendChild(div);
        ChartGenerator(document.getElementById(`${elem.id}`));
      });
    });
}

LoadData();
