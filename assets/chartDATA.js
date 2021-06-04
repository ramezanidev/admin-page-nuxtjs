export const chartDATA = {
  a: {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Course',
        data: [94, 170, 256, 378, 480, 483, 501, 574, 608, 640, 700, 704],
        backgroundColor: 'rgba(37, 99, 235, 0.06)',
        borderColor: 'rgba(37, 99, 235, 0.8)',
        borderWidth: 1,
        pointBorderWidth: 2
        ,
      },
        {
          label: 'Article',
          data: [14, 35, 77, 102, 107, 124, 138, 149, 179, 201, 270, 302],
          backgroundColor: 'rgba(5, 150, 105, 0.06)',
          borderColor: 'rgba(5, 150, 105, 0.8)',
          fill: true,
          borderWidth: 1,
          pointBorderWidth: 2,
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          ticks: {
            color: '#dde7ff',
            font: "IRANSans"
          },
          grid: {
            color: '#262c39',
            borderColor: '#485164',
            tickColor: 'transparent'
          }
        },
        x: {
          display: true,
          ticks: {
            color: '#dde7ff',
            font: "IRANSans"
          },
          grid: {
            color: '#262c39',
            borderColor: '#485164',
            tickColor: 'transparent'
          }
        },
      },
    },
  },


  b: {
    type: 'line' +
      '',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Course visits',
        data: [204, 350, 700, 780, 898, 1000, 1170, 1350, 1400, 1570, 1670, 1830],
        backgroundColor: 'rgba(37, 99, 235, 0.06)',
        borderColor: 'rgba(37, 99, 235, 0.8)',
        borderWidth: 1,
        fill: true,
        pointBorderWidth: 2,
      },{
        label: 'Article visits',
        data: [390, 470, 890, 1280, 1450, 1640, 1870, 1935, 2120, 2300, 2340, 2790],
        backgroundColor: 'rgba(5, 150, 105, 0.06)',
        borderColor: 'rgba(5, 150, 105, 0.8)',
        borderWidth: 1,
        pointBorderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      barValueSpacing: 2,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          ticks: {
            color: '#dde7ff',
            fontStyle: "lighter",
            font: "IRANSans"
          },
          grid: {
            color: '#262c39',
            borderColor: '#485164',
            tickColor: 'transparent'
          }
        },
        x: {
          ticks: {
            color: '#dde7ff',
            fontStyle: "lighter",
            font: "IRANSans"
          },
          grid: {
            color: '#262c39',
            borderColor: '#485164',
            tickColor: 'transparent'
          }
        },
      },
    },
  },




  c: {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue'],
      datasets: [{
        data: [14, 10],
        backgroundColor: [
          'transparent',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'transparent',
        ],
        borderWidth: 1,
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },




  d: {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [68, 100 - 68],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.03)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(75, 192, 192, 0.15)'
        ],
        borderWidth: 1,
        hoverOffset: 1
      }]
    },
    options: {
      plugins: {
        title:{
          display: true,
          text: `Disk ${68}%`,
          color: "#ddd",
          font:{
            family: "IRANSans",
            size: 14,
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },







  e: {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [36, 100 - 36],
        backgroundColor: [
          'rgba(37, 99, 235, 0.2)',
          'rgba(37, 99, 235, 0.03)',
        ],
        borderColor: [
          'rgba(37, 99, 235, 0.8)',
          'rgba(37, 99, 235, 0.15)'
        ],
        borderWidth: 1,
        hoverOffset: 1
      }]
    },
    options: {
      plugins: {
        title:{
          display: true,
          text: `CPU ${36}%`,
          color: "#ddd",
          font:{
            family: "IRANSans",
            size: 14,
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },







  f: {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [78, 100 - 78],
        backgroundColor: [
          'rgba(230, 108, 0, 0.2)',
          'rgba(230, 108, 0, 0.03)',
        ],
        borderColor: [
          'rgba(230, 108, 0, 0.8)',
          'rgba(230, 108, 0, 0.15)'
        ],
        borderWidth: 1,
        hoverOffset: 1
      }]
    },
    options: {
      plugins: {
        title:{
          display: true,
          text: `GPU ${78}%`,
          color: "#ddd",
          font:{
            family: "IRANSans",
            size: 14,
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },







  g: {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [55, 100 - 55],
        backgroundColor: [
          'rgba(180, 0, 230, 0.2)',
          'rgba(180, 0, 230, 0.03)',
        ],
        borderColor: [
          'rgba(180, 0, 230, 0.8)',
          'rgba(180, 0, 230, 0.15)'
        ],
        borderWidth: 1,
        hoverOffset: 1
      }]
    },
    options: {
      plugins: {
        title:{
          display: true,
          text: `Network ${55}%`,
          color: "#ddd",
          font:{
            family: "IRANSans",
            size: 14,
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },






















}











