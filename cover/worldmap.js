

function plotWorldMap(){
    wm_data =[];
    for(i=0; i<country_name.length; i++){
        obj = {
            code3: code3[i],
            name: country_name[i],
            value: le2019[i],
            code: country_code[i]
        }
        wm_data.push(obj)
    }
    console.log("map data",wm_data)
    createworldmap(wm_data);
}

function createworldmap(wm_data){
    Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json', function (data) {

        // Prevent logarithmic errors in color calulcation
        data.forEach(function (p) {
            p.value = (p.value < 1 ? 1 : p.value);
        });
    
        // Initiate the chart
        Highcharts.mapChart('pb-container', {
    
            chart: {
                map: 'custom/world'
            },
    
            title: {
                text: 'Life Expectancy in years'
            },
    
            legend: {
                title: {
                    text: 'Life Expectancy in years',
                    style: {
                        color: ( // theme
                            Highcharts.defaultOptions &&
                            Highcharts.defaultOptions.legend &&
                            Highcharts.defaultOptions.legend.title &&
                            Highcharts.defaultOptions.legend.title.style &&
                            Highcharts.defaultOptions.legend.title.style.color
                        ) || 'black'
                    }
                }
            },
    
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
    
            tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 0,
                pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                    '</span></span> {point.name}<br>' +
                    '<span style="font-size:30px">{point.value} years</span>',
                positioner: function () {
                    return { x: 0, y: 250 };
                }
            },
    
            colorAxis: {
                min: 45,
                max: 95,
                type: 'logarithmic'
            },
    
            series: [{
                data: wm_data,
                joinBy: ['iso-a3', 'code3'],
                name: 'Life Expectancy',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                }
            }]
        });
    });
}


