function getmytrainingfunction() {
    $.get(xmlFolder + "mytraining.xml")
        .success(readmytrainingCompleted)
        .error(readmytrainingFailed);
}


function readmytrainingCompleted(data) {
    var mytraining = $(data).find('mytrainingTitle').text();
    $('#mytraining .panel-heading').append('<h5 class="heading"><b>' + mytraining + '</b></h5>')

    // renderChart();

}






function readmytrainingFailed() {
    var message = "my training   Path is Not Found";
    document.write(message);
}

// var image, imageText, imgDescription, button, infor, infor1, infor2, infor3;

// function renderChart() {
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // var $quicklinks = $(data).find('quicklinksType').find('quicklinksData');

    // var $imageTitles = $(data).find('imageTitles').text();
    // $("#myTrainingheading").append('<h4 class="heading"><b>' + $imageTitles + '</b></h4>');
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['In progress', 2],
        ['Yet to start', 3],
        ['Completed', 5]
        // ['Zucchini', 1],
        // ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
        // 'title': 'How Much Pizza I Ate Last Night',
        pieHole: 0,
        legend: 'bottom',
        'width': 400,
        'height': 350
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}