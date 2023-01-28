'use strict';

var pathUrl = $('#customJs').attr('src');
var path = pathUrl.split('scripts')[0];
var xmlFolder = path + "xml/";
var imagesFolder = path + "images/";


$(document).ready(function() {
    initTemplate();
})

function initTemplate() {
    getannouncementsfunction();
    getimagefunction();
    gettrainingfunction();
    getmytrainingfunction();
    getcurrentfunction();
    getperformancefunction();
    getteamtrainingrogressfunction();
    getcalendarfunction();

}