$(document).ready(function() {
    $('#example').DataTable({
        autoWidth: true,
        dom: 'bftpi',
        paging: true,
        blengthChange: false,
        pagelength: 5,
        responsive: true,
        columnDefs: [{
            targets: ['_all'],
            className: 'mdc-data-table__cell'
        }]
    });
});