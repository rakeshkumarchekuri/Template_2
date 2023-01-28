function getcurrentfunction() {
    $.get(xmlFolder + "current.xml")
        .success(readcurrentCompleted)
        .error(readcurrentFailed);
}


function readcurrentCompleted(data) {
    var current = $(data).find('currentTitles').text();
    $('#current .panel-heading').append('<h5 class="heading"><b>' + current + '</b></h5>')

    // barChart();

}






function readcurrentFailed() {
    var message = "current  Path is Not Found";
    document.write(message);
}

google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Assigned", { role: "style" }],
        ["Assigned", 23, "#34B94E"],
        ["In Progress", 15, "#3B7ABD"],
        ["Yet to Start", 10, "#FB9958"],
        ["Overdue", 20, "color: #D64937"]
    ]);

    var view = new google.visualization.DataView(data);
    // view.setColumns([0, 1,
    //     {
    //         calc: "stringify",
    //         sourceColumn: 1,
    //         type: "string",
    //         role: "annotation"
    //     },
    //     2
    // ]);

    var options = {
        // title: "Density of Precious Metals, in g/cm^3",
        width: 400,
        height: 324,
        bar: { groupWidth: "70%" },
        legend: { position: 'bottom', alignment: 'start' },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
} { /* <div id="columnchart_values" style="width: 900px; height: 300px;"></div> */ }