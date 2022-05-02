var options = {
  series: [
    {
      name: "Ongoing Courses",
      data: [44, 55, 41, 67, 22, 43, 66, 30, 20, 10],
    },
    {
      name: "Completed Courses",
      data: [13, 23, 20, 8, 13, 27, 26, 20, 40, 30],
    },
    {
      name: "Enrolled Course",
      data: [11, 17, 15, 15, 21, 14, 26, 11, 20, 10],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
  },
  legend: {
    position: "top",
    offsetY: 10,
  },

  fill: {
    colors: ["#2F80ED", "#00C48C", "#EB5757"],
  },
  colors: ["#2F80ED", "#00C48C", "#EB5757"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
