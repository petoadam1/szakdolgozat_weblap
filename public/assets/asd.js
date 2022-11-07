
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
var data = new google.visualization.DataTable();
data.addColumn('timeofday', 'Time of Day');
data.addColumn('number', 'Guests');
/*data.addColumn('number', 'Woman');*/

data.addRows([
    [{v: [7, 0, 0], f: '7 am'}, 5, /*3*/],
    [{v: [8, 0, 0], f: '8 am'}, 2, /*2*/],
    [{v: [9, 0, 0], f: '9 am'}, 3, /*.5*/],
    [{v: [10, 0, 0], f:'10 am'}, 3, /*1*/],
    [{v: [11, 0, 0], f: '11 am'}, 2, /*2.25*/],
    [{v: [12, 0, 0], f: '12 pm'}, 1, /*1*/],
    [{v: [13, 0, 0], f: '1 pm'}, .5, /*1.5*/],
    [{v: [14, 0, 0], f: '2 pm'}, 4, /*2*/],
    [{v: [15, 0, 0], f: '3 pm'}, 5, /*3*/],
    [{v: [16, 0, 0], f: '4 pm'}, 9, /*5*/],
    [{v: [17, 0, 0], f: '5 pm'}, 12, /*4*/],
    [{v: [18, 0, 0], f: '6 pm'}, 11, /*2*/],
    [{v: [19, 0, 0], f: '7 pm'}, 7, /*.5*/],
    [{v: [20, 0, 0], f: '8 pm'}, 2, /*.25*/],
]);

var options = {
    //title: 'TÖMEG ELOSZLÁSI STATISZTIKA',
    backgroundColor: 'black',
    
    legend: {
        textStyle: {
            color: 'white'
        }
    },
    hAxis: {
        //title: 'Time of Day',
        format: 'h a',
        gridlines: {color: 'black'},
        viewWindow: {
            min: [6, 30, 0],
            max: [20, 30, 0]
        },
        textStyle: {
            fontSize: 14,
            color: 'white',
            bold: true,
            italic: false
        },
        titleTextStyle: {
            fontSize: 18,
            color: 'white',
            bold: true,
            italic: false
        }
    },
    
    vAxis: {
        title: 'Number of guests',
        textStyle: {
            fontSize: 16,
            color: 'white',
            bold: true,
            italic: false
        },
        titleTextStyle: {
            color: 'white',
            bold: true,
            italic: false
        },
    }
};

var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

chart.draw(data, options);
}
