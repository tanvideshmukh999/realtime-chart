let i=0
function addData() {
    myChart.data.labels.push(i);
    let newData = ((Math.random()*99)+1).toFixed(2)
    myChart.data.datasets[0].data.push(newData);
    i++
    myChart.update();
}
setInterval(addData, 1000)
//TODO Data fot the chart
const data = {
  labels: [],
  datasets: [
    {
      label: "value",
      borderColor: "rgb(255, 255, 255)",
      backgroundColor: ["rgba(182, 240, 255, 0.637)", "#36a2eb", "#cc65fe", "#ffce56", "#95f0cd"],
      borderWidth: 1,
      data: [],
      fill: true,
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 9,
    },
  ],
};

//TODO Chart Configurations
let config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Time",
          color: "white",
          font: {
            family: "Comic Sans MS",
            size: 40,
            weight: "bold",
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },
      y: {
        beginAtZero: false,
        suggestedMin: 0,
        suggestedMax: 30,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Value",
          color: "white",
          font: {
            family: "Comic Sans MS",
            size: 40,
            weight: "bold",
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },
    },
    layout: {
      padding: 10,
    },
    plugins: {
      tooltip: {
        events: ["mousemove"],
        callbacks: {
          label: function (context) {
            return `Value: ${context.parsed.y}`;
          },
          labelColor: function (context) {
            return {
              borderColor: "rgb(145, 200, 55)",
              backgroundColor: "rgb(145, 200, 55)",
              borderWidth: 2,
              borderDash: [2, 2],
              borderRadius: 10,
            };
          },
          labelTextColor: function (context) {
            return "#fff";
          },
        },
      },
      title: {
        display: true,
        text: "Dynamic Data Chart",
        color: "white",
        font:{
            size:40,
        }
       
      },
    },
  },
};
Chart.defaults.font.size = 16;
Chart.defaults.borderColor = "#aeebff";
Chart.defaults.color = "#aeebff";

//TODO Create the chart
const ctx = document.getElementById("stockChart").getContext("2d");
let myChart = new Chart(ctx, config);

