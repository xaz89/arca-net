


//===========apexcharts.js===========//



var options1 = {
    chart: {
        fontFamily: "Gotham-Bold",
        height: "auto",
        width: "95%",
        type: "radialBar",
        margin: "auto",
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 4000,
            // animateGradually: {
            //     enabled: true,
            //     delay: 0
            // },
            // dynamicAnimation: {
            //     enabled: true,
            //     speed: 3000
            // }
        }
    },
    series: [75],
    colors: ["#F40000"],

    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "75%",
                // background: "#fff"
            },
            startAngle: -90,
            endAngle: 90,
            track: {
                background: '#ddd',
                startAngle: -90,
                endAngle: 90,
            },
            dataLabels: {
                name: {
                    show: true,
                    offsetY: 0,
                    color: "#000",
                    fontSize: "14px"
                },
                value: {
                    fontSize: "2em",
                    show: true,
                    offsetY: -45,
                    formatter: function (val) {
                        return val + '%'
                    }
                }
            }
        }
    },

    stroke: {
        show: false,
        width: 0,
        lineCap: "round",

    },
    labels: ["$16,125.00"]
};

new ApexCharts(document.querySelector("#chart"), options1).render();







var options2 = {
    series: [
        {
            data: [80]
        }
    ],
    chart: {
        type: "bar",
         toolbar: {
             show: false,
         },
        height: 85,
        fontFamily: "Gotham-Book",
    },

    /* grid: {
        show: true,
        position: "back",
        borderColor: "#e0e0e0",

        xaxis: {
            lines: {
                show: true,
            }
        },
        yaxis: {
            lines: {
                show: true,
            }
        }
    }, */

    grid: {
        show: true,
        borderColor: "#e0e0e0",
        opacity: 0.5,
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        },  
        row: {
            colors: undefined,
            opacity: 0
        },  
        column: {
            colors: undefined,
            opacity: 0.5
        },  
        padding: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        },  
    },

    plotOptions: {
        bar: {
            horizontal: true,
            endingShape: "rounded",
            columnWidth: "100%",
            barHeight: "30%",
            dataLabels: {
                position: "center",

            }
        }
    },
    fill: {
        colors: '#f40000',
        opacity: 0.9,
        type: "solid",
    },
    xaxis: {
        categories: [''],
        tickAmount: 4,
        min: 0,
        max: 100,
        floating: true,
        
        labels: {
            show: true,
            minHeight: 0,
            maxHeight: 100,
            offsetX: 0,
            offsetY: -40,
            format: undefined,
            formatter: function (value) {
                return value + "%";
            },
            style: {
                fontFamily: 'Gotham-Bold',
                fontSize: '14px',
            },

        },
        axisBorder: {
            show: true,
            color: '#e0e0e0',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: -25
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#e0e0e0',
            height: 150,
            offsetX: 0,
            offsetY: -25
        },
    },
    /* xaxis: {
        type: 'category',
        position: 'top',
        categories: [""],
        tickAmount: 4,
        min: 0,
        max: 100,
        floating: true,
        labels: {
            show: true,
            minHeight: 0,
            maxHeight: 100,
            offsetX: 0,
            offsetY: -20,
            format: undefined,
            formatter: function (value) {
                return value + "%";
            },
            style: {
                fontFamily: 'Gotham-Bold',
                fontSize: '14px',
            },

        },
        axisBorder: {
            show: true,
            color: '#e0e0e0',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: -5
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#e0e0e0',
            height: 75,
            offsetX: 0,
            offsetY: -5
        },




    }, */
    dataLabels: {
        enabled: true,
        formatter: function (value) {
            return value + "%";
        },
        textAnchor: 'middle',
        style: {
            fontSize: '12px',
            fontFamily: "Gotham-Book",
            color: "#000"
        },

    },


    tooltip: {
        enabled: false,

    },






};


var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();




/* var options2 = {
    grid: {
        show: true,
        position: 'back',
        strokeDashArray: 10,
        borderColor: '#111',
        row: {
            colors: ['#e5e5e5', 'transparent'],
            opacity: 0,
        }, 
        column: {
            colors: ['#f8f8f8', 'transparent'],
        }, 
        xaxis: {
           
          lines: {
            show: true,
          }
        },
        yaxis: {
            lines: {
                show: true
            }
        }, 
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, 
      },
    series: [{
        data: [50]
    }],
    xaxis: {
        type: "category",
        position: "top",
        maxHeight: 10,
        offsetY: -50,
        lines: {
            show: true
          },
        crosshairs: {
            position: 'front',
        },
        categories: [
            "",
        ],
        style: {
            colors: [],
            fontSize: '19px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            cssClass: 'apexcharts-xaxis-label',
        },
        labels: {
            show: true,
            rotate: -45,
        },
        axisBorder: {
            show: true,
            height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: -10
        },
        axisTicks: {
            show: true,
        borderType: 'solid',
        color: '#000000',
        height: 6,
        offsetX: 0,
        offsetY: 55
        },
        labels: {
            formatter: function (value) {
              return value + "%";
            }
          },
    },
    yaxis: {
        max: 100,
        tickAmount: 6,
        
    },
    stroke: {
        width: 0,
    },
    chart: {
        toolbar: {
            show: false,
        },
        height: "100px",
        type: "bar",
        
    },
    colors: ["#F40000"],

    plotOptions: {
        bar: {
            horizontal: true,
            endingShape: 'rounded',
            barHeight: "20%",
            // columnWidth: "10%",
            dataLabels: {
                position: "center",
            },
        },
    },

    dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function (value) {
            return value + "%";
          
        },
        textAnchor: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
            // fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: undefined
        },
        background: {
          enabled: true,
          foreColor: '#000',
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#fff',
          opacity: 0.9
      },
        dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
        }
    },
    yaxis: {
        show: true,
        showAlways: false,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        tickAmount: 60,
        min: 0,
        max: 100,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 100,
            style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                cssClass: 'apexcharts-yaxis-label',
            },
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
            formatter: function (value) {
                return value + "%";
              
            },
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#78909C',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        
        crosshairs: {
            show: true,
            position: 'back',
            stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 0,
            },
        },
        tooltip: {
            enabled: false,
            offsetX: 100,
        },
        
    }
    
   /*  stroke: {
        show: true,
        width: 10,
        lineCap: "round",
        colors: "#ddd",
        
    },
};

new ApexCharts(document.querySelector("#chart2"), options2).render(); */



var options3 = {
    series: [{
        data: [400]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    annotations: {
        xaxis: [{
            x: 500,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396',
                },
                text: 'X annotation',
            }
        }],
        yaxis: [{
            y: 'July',
            y2: 'September',
            label: {
                text: 'Y annotation'
            }
        }]
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        categories: ['June'],
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    yaxis: {
        reversed: true,
        axisTicks: {
            show: true
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart3"), options3);
chart.render();
