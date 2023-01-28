function getteamtrainingrogressfunction() {
    $.get(xmlFolder + "teamtrainingprogress.xml")
        .success(readteamtrainingprogressCompleted)
        .error(readteamtrainingprogressFailed);
}


function readteamtrainingprogressCompleted(data) {
    var $teamtrainingprogress = $(data).find('progressData').find('progressType');


    var $progressTitles = $(data).find('progressTitles').text();
    var _image = $(data).find('progressImg').text();
    var imagePath = imagesFolder + _image;
    var $progressViews = $(data).find('progressViews').text();


    $('#teamprogress #teamprogressheading').append('<div class="col-md-12 " >\
    <h5 class="heading"><b>' + $progressTitles + '</b></h5>\
<div class="col-md-3 col-xs-3" id="img-block"><img src="' + imagePath + '"   alt="Los Angeles"></div>\
<div class="col-md-9 col-xs-9"><h4>' + $progressViews + '</h4></div>\
</div>');

    $teamtrainingprogress.each(function(index, value) {
        $trainingprogress = $(value);

        var _image = $trainingprogress.find('picture').text();
        var picture = imagesFolder + _image;
        var imageName = $trainingprogress.find('imageName').text();

        var training = $trainingprogress.find('training').text();
        var completed = $trainingprogress.find('completed').text();
        var completedNumber = $trainingprogress.find('completedNumber').text();
        var inProgress = $trainingprogress.find('inProgress').text();
        var inProgressNumber = $trainingprogress.find('inProgressNumber').text();

        var registered = $trainingprogress.find('registered').text();

        var registeredNumber = $trainingprogress.find('registeredNumber').text();

        var assigned = $trainingprogress.find('assigned').text();
        var complete = $trainingprogress.find('complete').text();
        var completeNumber = $trainingprogress.find('completeNumber').text();
        var inProgres = $trainingprogress.find('inProgres').text();
        var inProgresNumber = $trainingprogress.find('inProgresNumber').text();

        var overdue = $trainingprogress.find('overdue').text();
        var overdueNumber = $trainingprogress.find('overdueNumber').text();





        $('#teamprogress .panel-body').append(' <div class="col-md-12">\
    <div class="col-md-2" id="img-block"><img src="' + picture + '"   alt="Los Angeles"width=30px height=30px ></div>\
    <div col-md-10><h4>' + imageName + '</h4></div>\
    </div>\
    <div class="col-md-6">\
    <div class="col-md-12 col-sm-6 col-xs-6">\
    <div class="col-md-12"><h4>' + training + '</h4></div>\
    <div class="col-md-4"><h6>' + completed + '</h6><p>' + completedNumber + '</p></div>\
    <div class="col-md-4"><h6>' + inProgres + '</h6><p>' + inProgresNumber + '</p></div>\
    <div class="col-md-4"><h6>' + registered + '</h6><p>' + registeredNumber + '</p></div>\
    </div>\
    </div>\
    <div class="col-md-6">\
    <div class="col-md-12 col-sm-6 col-xs-6">\
    <div class="col-md-12"><h4>' + assigned + '</h4></div>\
    <div class="col-md-4"><h6>' + complete + '</h6><p>' + completeNumber + '</p></div>\
    <div class="col-md-4"><h6>' + inProgress + '</h6><p>' + inProgressNumber + '</p></div>\
    <div class="col-md-4"><h6>' + overdue + '</h6><p>' + overdueNumber + '</p></div>\
    </div>\
    </div>\
     </div>')
    })





}

function readteamtrainingprogressFailed() {
    var message = "Team Training Progress  Path is Not Found";
    document.write(message);
}