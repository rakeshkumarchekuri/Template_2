function gettrainingfunction() {
    $.get(xmlFolder + "trainingStatus.xml")
        .success(readTrainingCompleted)
        .error(readTrainingFailed);
}


function readTrainingCompleted(data) {


    // var image, imageText, imgDescription, button, infor, infor1, infor2, infor3;

    var $Training = $(data).find('trainingData').find('trainingType');
    $Training.each(function(index, value) {

        var $TrainingStatus = $(value);


        var picture = $TrainingStatus.find('imageIcon').text();
        var imagePath = imagesFolder + picture;

        contents = $TrainingStatus.find('contents').text();





        $(".Training").append('<div id="blooks" class="col-md-3 col-sm-6 col-xs-12"><div class="col-md-3"><img class="imageIcon" src="' + imagePath + '"></div>\
        <div class="col-md-9"><h3 class="contents">' + contents + '</h3s></div></div>')
    })





}

function readTrainingFailed() {
    var message = "Path is Not Found";
    document.write(message);
}