function getimagefunction() {
    $.get(xmlFolder + "image.xml")
        .success(readImageCompleted)
        .error(readImageFailed);
}

function readImageCompleted(data) {



    var $images = $(data).find('imageData').find('imageType');
    $images.each(function(index, value) {

        var $imagesStatus = $(value);


        var picture = $imagesStatus.find('picture').text();
        var imagePath = imagesFolder + picture;

        var imageHeading = $imagesStatus.find('imageHeading').text();
        var imageText = $imagesStatus.find('imageText').text();


        $(".Image").append('<div class="  image-main"><img class="image-main" src="' + imagePath + '"  width=100% height=553px/>\
        <div class="image-text"><h3>' + imageHeading + '</h3>\
        <p>' + imageText + '</p></div></div>')



    })




}

function readImageFailed() {
    var message = "Image Path is Not Found";
    document.write(message);
}