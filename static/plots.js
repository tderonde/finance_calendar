var svg = d3.select("#d3calendar")
  .append("svg")

var lineCanvas = d3.select("#chartjsline")
  .append("canvas")
  .attr("id", "linePlot")

var scatterCanvas = d3.select("#chartjsscatter")
  .append("canvas")
  .attr("id", "scatterPlot")

// create group for filter labels
var yearSelectorGroup = d3.select("#plotFilters")
  .append("svg")
  .append("g")

var allLabel = yearSelectorGroup.append("text")
.attr("x", 20)
.attr("y", 25)
.attr("value", "all") // value to grab for event listener
.classed("active", true)
.text("All");

var label2020 = yearSelectorGroup.append("text")
.attr("x", 70)
.attr("y", 25)
.attr("value", "2020") // value to grab for event listener
.classed("inactive", true)
.text("2020");

var label2019 = yearSelectorGroup.append("text")
.attr("x", 120)
.attr("y", 25)
.attr("value", "2019") // value to grab for event listener
.classed("inactive", true)
.text("2019");

var label2018 = yearSelectorGroup.append("text")
.attr("x", 170)
.attr("y", 25)
.attr("value", "2018") // value to grab for event listener
.classed("inactive", true)
.text("2018");

var label2017 = yearSelectorGroup.append("text")
.attr("x", 220)
.attr("y", 25)
.attr("value", "2017") // value to grab for event listener
.classed("inactive", true)
.text("2017");

var label2016 = yearSelectorGroup.append("text")
.attr("x", 270)
.attr("y", 25)
.attr("value", "2016") // value to grab for event listener
.classed("inactive", true)
.text("2016");

var label2015 = yearSelectorGroup.append("text")
.attr("x", 20)
.attr("y", 75)
.attr("value", "2015") // value to grab for event listener
.classed("inactive", true)
.text("2015");

var label2014 = yearSelectorGroup.append("text")
.attr("x", 70)
.attr("y", 75)
.attr("value", "2014") // value to grab for event listener
.classed("inactive", true)
.text("2014");

var label2013 = yearSelectorGroup.append("text")
.attr("x", 120)
.attr("y", 75)
.attr("value", "2013") // value to grab for event listener
.classed("inactive", true)
.text("2013");

var label2012 = yearSelectorGroup.append("text")
.attr("x", 170)
.attr("y", 75)
.attr("value", "2012") // value to grab for event listener
.classed("inactive", true)
.text("2012");

var label2011 = yearSelectorGroup.append("text")
.attr("x", 220)
.attr("y", 75)
.attr("value", "2011") // value to grab for event listener
.classed("inactive", true)
.text("2011");

var label2010 = yearSelectorGroup.append("text")
.attr("x", 270)
.attr("y", 75)
.attr("value", "2010") // value to grab for event listener
.classed("inactive", true)
.text("2010");

//var selectedValue = "all"

var json = d3.json("./static/data.json").then(function(response) {
    
  var data = response.map(function(d) {
    return {
            date: new Date(d.date),
            value: +((d.close - d.open) / d.open),
            close: +d.close,
            sentiment: +d.sentiment
    };
  })

  var lineData = response.map(function(d) {
        
    return {
        x: new Date(d.date),
        y: Math.round(+d.close,0)
    };
  })

  var scatterData = response.map(function(d) {
        
    return {
      x: +d.sentiment,
      y: +((d.close - d.open) / d.open),
      date: new Date(d.date),
    };
  })
  
  d3Calendar(data, "all");
  chartjsLine(lineData, "all");
  chartjsScatter(scatterData, "all")

  // event listener
  yearSelectorGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var value = d3.select(this).attr("value");
      if (value !== selectedValue) {

      // replaces selectedValue with value
      var selectedValue = value;
      console.log(selectedValue)
      

      // changes classes to change bold text
      if (selectedValue === "all") {
        d3.selectAll(".active")
          .classed("active", false)
          .classed("inactive", true)
        allLabel
          .classed("active", true)
          .classed("inactive", false)
      }
      else if (selectedValue == 2020) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2020
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2019) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2019
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2018) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2018
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2017) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2017
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2016) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2016
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2015) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2015
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2014) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2014
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2013) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2013
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2012) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2012
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2011) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2011
        .classed("active", true)
        .classed("inactive", false)
      }
      else if (selectedValue == 2010) {
        d3.selectAll(".active")
        .classed("active", false)
        .classed("inactive", true)
      label2010
        .classed("active", true)
        .classed("inactive", false)
      }
      }
      // run calendar function with selected year
      d3Calendar(data, selectedValue) 
      chartjsLine(lineData, selectedValue)
      chartjsScatter(scatterData, selectedValue)

    });
  });

function d3Calendar(data, startYear) {

  svg.selectAll("*").remove();

  var years = d3.groups(data, d => d.date.getUTCFullYear()).reverse();
  

  if (startYear == "all") {
    filteredYears = years;
  }
  else {
    filteredYears = years.filter(d => d[0] == startYear);
  }

  var cellSize = 17;
  var width = 2000;
  var height = cellSize * 7;
  var timeWeek =d3.utcMonday;
  var countDay = i => (i + 6) % 7;

  function pathMonth(t) {
      const n = 5;
      const d = Math.max(0, Math.min(n, countDay(t.getUTCDay())));
      const w = timeWeek.count(d3.utcYear(t), t);
      return `${d === 0 ? `M${w * cellSize},0`
          : d === n ? `M${(w + 1) * cellSize},0`
          : `M${(w + 1) * cellSize},0V${d * cellSize}H${w * cellSize}`}V${n * cellSize}`;
    };
  
  var formatValue = d3.format("+.2%");
  var formatClose = d3.format("$,.2f");
  var formatDate = d3.utcFormat("%x");
  var formatSentiment = d3.format("+.2f");
  var formatDay = i => "SMTWTFS"[i];
  var formatMonth = d3.utcFormat("%b");
  const stockMax = d3.quantile(data, 0.9975, d => Math.abs(d.value));
  const finbertMax = d3.quantile(data, 0.9975, d => Math.abs(d.sentiment));
  var stockColor = d3.scaleSequential(d3.interpolatePiYG).domain([-stockMax, +stockMax]);
  var finbertColor = d3.scaleSequential(d3.interpolatePiYG).domain([-finbertMax, +finbertMax]);

      svg.attr("viewBox", [0, 0, 1000, height * filteredYears.length])
          .attr("font-family", "sans-serif")
          .attr("font-size", 10);
      
    
      const year = svg.selectAll("g")
        .data(filteredYears)
        .join("g")
          .attr("transform", (d, i) => `translate(50,${height * i + cellSize * 1.5})`);

      year.append("text")
          .attr("x", -5)
          .attr("y", -5)
          .attr("font-weight", "bold")
          .attr("text-anchor", "end")
          .text(([key]) => key);
    
      year.append("g")
          .attr("text-anchor", "end")
        .selectAll("text")
        .data(d3.range(1, 6))
        .join("text")
          .attr("x", -5)
          .attr("y", i => (countDay(i) + 0.5) * cellSize)
          .attr("dy", "0.31em")
          .text(formatDay);
      
      year.append("g")
        .selectAll("polygon")
        .data(([, values]) => values.filter(d => ![0, 6].includes(d.date.getUTCDay())))
        .join("polygon")
          .attr("points", function(d) {
              return `${timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5}, ${countDay(d.date.getUTCDay()) * cellSize + 0.5} ${timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5}, ${countDay(d.date.getUTCDay()) * cellSize + 0.5 + cellSize - 1} ${timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5 + cellSize - 1}, ${countDay(d.date.getUTCDay()) * cellSize + 0.5 + cellSize - 1}`
          })
          .attr("fill", d => stockColor(d.value))
        .append("title")
          .text(d => `${formatDate(d.date)}
GSPC Change: ${formatValue(d.value)}`);

      year.append("g")
      .selectAll("polygon")
      .data(([, values]) => values.filter(d => ![0, 6].includes(d.date.getUTCDay())))
      .join("polygon")
      .attr("points", function(d) {
          return `${timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5}, ${countDay(d.date.getUTCDay()) * cellSize + 0.5} ${timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5 + cellSize - 1}, ${countDay(d.date.getUTCDay()) * cellSize + 0.5} ${timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5 + cellSize - 1}, ${countDay(d.date.getUTCDay()) * cellSize + 0.5 + cellSize - 1}`
      })
      .attr("fill", d => finbertColor(d.sentiment))
      .append("title")
      .text(d => `${formatDate(d.date)}
News Sentiment: ${formatSentiment(d.sentiment)}`);

      const month = year.append("g")
        .selectAll("g")
        .data(([, values]) => d3.utcMonths(d3.utcMonth(values[0].date), values[values.length - 1].date))
        .join("g");
    
      // month.filter((d, i) => i).append("path")
      //     .attr("fill", "none")
      //     .attr("stroke", "#fff")
      //     .attr("stroke-width", 3)
      //     .attr("d", pathMonth);
    
      month.append("text")
          .attr("x", d => timeWeek.count(d3.utcYear(d), timeWeek.ceil(d)) * cellSize + 2)
          .attr("y", -5)
          .text(formatMonth);
};

function chartjsLine(data, selectedYear) {

  d3.select("#chartjsline")
    .selectAll("canvas")
    .remove()
  //d3.selectAll(".chartjs-hidden-iframe").remove();

  var lineCanvas = d3.select("#chartjsline")
    .append("canvas")
    .attr("id", "linePlot")
    
  var year = d3.groups(data, d => d.x.getUTCFullYear());
  
  if (selectedYear == "all") {
    plot_dates = data
  }
  else {
    filteredYear = year.filter(d => d[0] == selectedYear);
    plot_dates = filteredYear[0][1];
  }
  
  var config = {
      type:'line',
      data: {
          datasets: [
              {
              label: "GSPC Price",
              data: plot_dates,
              fill: false,
              tension: 0.1,
              pointHitRadius: 3,
              borderWidth: 1
              }
          ]
      },
      options: {
          responsive: true,
          title:      {
              display: true,
              text: "S&P 500 (GSPC) Price"
          },
          elements: {
              point:{
                  radius: 0,
                  hoverRadius: 15,
                  borderColor: "black"
              },
              line:{
                  borderColor: "black"
              }
          },
          legend: {
              display: false
          },
          scales: {
              xAxes: [{
                  type: "time",
                  display: true,
                  gridLines: {
                      display: false
                  },
                  labels: {
                      show: true,
                  },
                  time: {
                      displayFormats: {
                          //week: 'MMM YYYY'
                      },
                      tooltipFormat: 'll'
                  },
                  scaleLabel: {
                      display: true,
                      labelString: 'Date'
                  },
              }],
              yAxes: [{
                  type: "linear",
                  display: true,
                  position: "left",
                  gridLines:{
                      display: false
                  },
                  labels: {
                      show:true,  
                  },
                  scaleLabel: {
                      display: true,
                      labelString: 'Price ($)'
                  },
                  ticks: {
                      display: true,
                      callback: function(value, index, values) {
                         if (parseInt(value) >= 1000) {
                            return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                         } else {
                            return '$' + value;
                         }
                      }
                   }
              }]
          },
          tooltips: {
              callbacks: {
                 label: function(t, d) {
                    var xLabel = d.datasets[t.datasetIndex].label;
                    var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
                    return xLabel + ': ' + yLabel;
                 }
              }
           },
      }
  };
  
  if (myChart1 != null) {
    myChart1.destroy()
  }
  var myChart1 = new Chart(
      document.getElementById('linePlot'),
      config,
  );
  
  myChart1.update()
  myChart1.render()
};

function chartjsScatter(data, selectedYear) {

  d3.select("#chartjsscatter")
    .selectAll("canvas")
    .remove()
  //d3.selectAll(".chartjs-hidden-iframe").remove();

  var scatterCanvas = d3.select("#chartjsscatter")
    .append("canvas")
    .attr("id", "scatterPlot")

    var year = d3.groups(data, d => d.date.getUTCFullYear());
  
    if (selectedYear == "all") {
      plot_data = data
    }
    else {
      filteredYear = year.filter(d => d[0] == selectedYear);
      plot_data = filteredYear[0][1];
    }
    
    var config = {
        type:'scatter',
        data: {
            datasets: [
                {
                label: "GSPC Scatter",
                data: plot_data,
                fill: false,
                pointHitRadius: 3,
                showLine: false
                }
            ]
        },
        options: {
            responsive: true,
            title:      {
                display: true,
                text: "S&P 500 (GSPC): News Sentiment vs. Price Change"
            },
            elements: {
                point:{
                    radius: 2,
                    hoverRadius: 10,
                    borderColor: "black"
                },
                line: {

                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    display: true,
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Avg. Positive/Negative Sentiment (+/-)'
                    },
                    ticks: {
                        display: true,
                        callback: function (value) {
                            return (value).toFixed(2); // convert it to percentage
                          }
                    },
                }],
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    gridLines:{
                        display: false
                    },
                    labels: {
                        show:true,  
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Price Increase/Decrease (%)'
                    },
                    ticks: {
                        display: true,
                        callback: function (value) {
                            return (value * 100).toFixed(1); // convert it to percentage
                          }
                      
                    }
                }],
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var xLabel =  Number(tooltipItem.xLabel).toFixed(2);
                        var yLabel = Number(tooltipItem.yLabel * 100).toFixed(2) + "%";
                        return ["Sentiment: " + xLabel, "Price: " + yLabel]
                    }
                }
            }
        }
    };
    if (myChart2 != null) {
      myChart2.destroy()
    }

    var myChart2 = new Chart(
        document.getElementById('scatterPlot'),
        config
    );

    myChart2.update()
    myChart2.render()
};