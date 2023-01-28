function getcalendarfunction() {
    $.get(xmlFolder + "calendar.xml")
        .success(readcalendarCompleted)
        .error(readcalendarFailed);
}


function readcalendarCompleted(data) {
    var Calendar = $(data).find('calendarTitles').text();
    $('#Calendar .panel-heading').append('<h5 class="heading"><b>' + Calendar + '</b></h5>')

    // donutChart();

}




function readcalendarFailed() {
    var message = "calendar  Path is Not Found";
    document.write(message);
}



var data = [{
    title: 'All Day Event',
    start: '2015-02-01'
}, {
    title: 'Long Event',
    start: '2015-02-07',
    end: '2015-02-10'
}, {
    id: 999,
    title: 'Repeating Event',
    start: '2015-02-09T16:00:00'
}, {
    id: 999,
    title: 'Repeating Event',
    start: '2015-02-16T16:00:00'
}, {
    title: 'LMS',
    start: '2015-02-11',
    end: '2015-02-13',
    color: 'red'
}, {
    title: 'Meeting',
    start: '2015-02-12T10:30:00',
    end: '2015-02-12T12:30:00'
}, {
    title: 'Lunch',
    start: '2015-02-12T12:00:00'
}, {
    title: 'Meeting',
    start: '2015-02-12T14:30:00'

}, {
    title: 'Click for Google',
    url: 'https://google.com/',
    start: '2015-02-28'
}];

var newData = [{
    title: 'stuff',
    start: '2015-03-01'
}, {
    title: 'stuff',
    start: '2015-03-02'
}];

$(document).ready(function() {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
                // right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2015-02-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: data
    });

    $('#calendar').on('click', '.fc-next-button', function() {
        //alert('clicked');
        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('addEventSource', newData);
    });
    $('#calendar').on('click', '.fc-prev-button', function() {
        //alert('clicked');
        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('addEventSource', data);
    });

});