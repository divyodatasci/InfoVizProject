
function toggle(){
    var currentstatement = document.getElementById('bar-graph').innerText;
    if(currentstatement == 'Last 20 countries'){
      plotlast20();
      document.getElementById('bar-graph').innerText= 'Top 20 countries'
      
    }
    else {
      plottop20();
      document.getElementById('bar-graph').innerText= 'Last 20 countries'
    }
  
  }
function plottop20(){
    Highcharts.chart('bg-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 20 Countries with highest Life Expectancy'
        },
        // subtitle: {
        //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        // },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 80,
            title: {
                text: 'Life Expectancy in Years'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Life Expectancy: <b>{point.y:.1f} years</b>'
        },
        series: [{
            name: 'Life Expectancy',
            data: [
                ['Japan', 84.35],
                ['Switzerland', 83.70],
                ['Singapore', 83.49],
                ['Spain', 83.48],
                ['Korea, Rep.', 83.22],
                ['Italy', 83.19],
                ['Sweden', 82.95],
                ['Norway', 82.91],
                ['Australia', 82.9],
                ['Israel', 82.80],
                ['Malta', 82.6],
                ['France', 82.57],
                ['Iceland', 82.56],
                ['Luxembourg', 82.44],
                ['Ireland', 82.30],
                ['Canada', 82.05],
                ['Netherlands', 82.01],
                ['Greece', 81.93],
                ['Austria', 81.79],
                ['Finland',81.78]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}
function plotlast20(){
    Highcharts.chart('bg-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: '20 Countries with lowest Life Expectancy'
        },
        // subtitle: {
        //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        // },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 50,
            max: 65,
            title: {
                text: 'Life Expectancy in Years'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Life Expectancy: <b>{point.y:.1f} years</b>'
        },
        series: [{
            name: 'Life Expectancy',
            data: [ ['Chad', 54.23],
                ['Lesotho', 54.33],
                ['Nigeria', 54.68],
                ['Sierra Leone', 54.69],
                ['Somalia', 57.39],
                ["Cote d'Ivoire", 57.78],
                ['South Sudan', 57.84],
                ['Guinea-Bissau', 58.32],
                ['Equatorial Guinea', 58.73],
                ['Cameroon', 59.29],
                ['Mali', 60.19],
                ['Congo Dem. Rep.', 60.68],
                ['Mozambique', 60.85],
                ['Togo', 61.04],
                ['Angola', 61.14],
                ['Zimbabwe', 61.49],
                ['Burkina Faso', 61.57],
                ['Burundi', 61.58],
                ['Guinea', 61.60],
                ['Benin',61.77]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}

function unhidecontainers(){
    var items = document.getElementsByClassName('dash');
    for(i=0;i<items.length;i++){
      items[i].classList.remove('hide')
    }
}