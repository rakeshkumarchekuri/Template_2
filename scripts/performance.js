function getperformancefunction() {
    $.get(xmlFolder + "performance.xml")
        .success(readperformanceCompleted)
        .error(readperformanceFailed);
}


function readperformanceCompleted(data) {

    var $performanceTitles = $(data).find('performanceTitles').text();


    var $Buttons = $(data).find('performanceViews').text();
    $(' #performanceheading').append('<div class="col-md-8" id="title">\
    <h4>' + $performanceTitles + '</h4>\
</div>\
<div class="col-md-4" id="btn" ><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">' + $Buttons + '<i class="far fa-angle-right"></i></button></div>');

    { /* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */ }
    // function getMyToDoListCompleted(data){

    //     var $MyToDoLists =$(data).find('MyToDoLists').find('MyToDoList');

    //     var $MyToDoListHeading=$(data).find('MyToDoListHeading').text();

    //     $('#MyToDoList-panel-heading').append('<h5 class="heading"><b>'+$MyToDoListHeading +'</b></h5>')

    //     var $Button=$(data).find('buttons').text();

    // $('#MyToDoList-panel-heading').append('<button>'+$Button+'</button>')


    // donutChart();

    // $BOB1.each(function(index, value) {
    //     var $John1 = $(value);


    //     var td = $John1.find('td').text();







    //     $("#compliance .panel-body").append()

    // })
}






function readperformanceFailed() {
    var message = "performance  Path is Not Found";
    document.write(message);
}


// function donutChart() {

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 4],
        ['Eat', 4],
        ['Commute', 4],
        ['Watch TV', 4],
        // ['Sleep', 7]
    ]);

    var options = {
        // title: 'My Daily Activities',
        pieHole: 0.4,
        legend: 'bottom',
        'width': 400,
        'height': 354
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}



//     <
//     div id = "donutchart"
//     style = "width: 900px; height: 500px;" > < /div>
// 
//}