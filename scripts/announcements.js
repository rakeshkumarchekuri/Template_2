function getannouncementsfunction() {
    $.get(xmlFolder + "announcements.xml").success(getannouncementsStatusCompleted).error(getannouncementsStatusFailed);
}

function getannouncementsStatusCompleted(data) {
    var $AnnouncementsStatus = $(data).find('announcementsStatusdata').find('announcementsStatustype')
    $AnnouncementsStatus.each(function(index, value) {
        $Announcements = $(value);
        var image = $Announcements.find('image').text();
        var imagePath = imagesFolder + image;
        var title = $Announcements.find('title').text();
        var description = $Announcements.find('description').text();



        $('.Announcements ').append('<div class="col-md-12 pad-null" id="block"> <div class="col-md-3 col-sm-3 col-xs-4  pad-null announcement-block"><div class="col-md-12 "><div class= "col-md-3  pad-null"><img class="image-announcement" src="' + imagePath + '" alt="Los Angeles"  width=35px height=35px/ ></div><div class="col-md-9  pad-null"><h3 class="announcement-titles  pad-null">' + title + '</h3></div></div> </div>\
       <span class="complete goal-conten   title-para col-md-9 col-sm-9 col-xs-8"> <div class="col-md-12"> <div class=" main-contents col-md-10 col-sm-10 col-xs-10 pad-null">' + description + '</div>\
       <div class="carousel-main col-md-2"> <a href="#" class="previous round">&#8249;</a>\
        <a href="#" class="next round">&#8250;</a></div></div></span>\
        </div></div></div>')
    })
}

function getannouncementsStatusFailed() {
    document.write('Xml not found');
    console.log('Announcement xml loading failed or path not found');
}