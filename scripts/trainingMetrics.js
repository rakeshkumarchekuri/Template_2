function getTrainingMetrics() {
    $.get('xml/TrainingMetrics.xml').success(getTrainingMetricsCompleted).error(getTrainingMetricsFailed);

    function getTrainingMetricsCompleted(data) {
        debugger;
        var HeaderTitle = $(data).find('HeaderTitle').text();

        var imageName = $(data).find('Image').text();
        var imagePath = "images/" + imageName;

        var imageElement = '<img src="' + imagePath + '" />';
        var headerElement = '<h3>' + HeaderTitle + '</h3>'


        $('#trainingMetrics .panel-heading').empty().append(headerElement);
        //$('#trainingMetrics .panel-body').empty().append(imageElement);

        //$('#example').DataTable();
        debugger;
        var data = [];
        var my_columns = [];

        var sampleData = sampleSelfNodeData;

        $.map(sampleData, function(element, value) {

            data.push({
                "Employee Name": element.Emp_FullName,
                "Email ID": element.Email,
                "Manager name": element.MgrName,
                "Activity": element.ActivityName,
                "Status": element.PStatus
            })

        })

        $.each(data[0], function(key, value) {
            var my_item = {};
            my_item.data = key;
            my_item.title = key;
            my_columns.push(my_item);
        });

        var dtb_Export = "Export to Excel";
        var dtb_info = "Showing _START_ to _END_ of _TOTAL_ entries";
        var dtb_infoEmpty = "No records available";
        var dtb_infoFiltered = "filtered from _MAX_ total records";
        var dtb_Search = "Search";
        var dtb_First = "First";
        var dtb_Last = "Last";
        var dtb_Next = "Next";
        var dtb_Previous = "Previous";
        var dt_ActivitiesLabel = "Activities";

        if ($.fn.DataTable.isDataTable('#example')) {
            $('#example').DataTable().destroy();
        }

        $('#example').DataTable({
            data: data,
            "columns": my_columns,
            "order": [
                [3, "asc"]
            ],
            dom: 'Bfrtip',
            "scrollY": "250px",
            "scrollCollapse": true,
            "scrollX": true,
            paging: true,
            bLengthChange: false,
            pageLength: 10,
            responsive: true,
            "language": {
                "info": dtb_info,
                "infoEmpty": dtb_infoEmpty,
                "infoFiltered": "(" + dtb_infoFiltered + ")",
                "search": dtb_Search + ":",
                "paginate": {
                    "first": dtb_First,
                    "last": dtb_Last,
                    "next": dtb_Next,
                    "previous": dtb_Previous
                },
            },
            buttons: [{
                extend: 'excel',
                text: '<span>Export to Excel</span>',
                title: 'Training Metrics'
            }]
        });

    }

    function getTrainingMetricsFailed() {
        document.write('TrainingMetrics xml File not found');
    }
}