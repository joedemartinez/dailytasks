 // Call the dataTables jQuery plugin 
$(document).ready(function() {
  $('#dataTable').DataTable();
});

$(document).ready(function() {
  $('#dataTable').DataTable();
  var table = $('#dataTable1').DataTable({
  	 dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'print'
    ]
  });

  table.buttons().container()
    .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );

});

$(document).ready(function() {
  $('#dataTable').DataTable();
  var table = $('#dataTable2').DataTable({
     dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'print'
    ]
  });

  table.buttons().container()
    .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );

});

$(document).ready(function() {
  $('#dataTable').DataTable();
  var table = $('#dataTable3').DataTable({
     dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'print'
    ]
  });

  table.buttons().container()
    .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );

});

$(document).ready(function() {
  $('#dataTable').DataTable();
  var table = $('#dataTable4').DataTable({
     dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'print'
    ]
  });

  table.buttons().container()
    .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );

});

$(document).ready(function() {
  $('#dataTable').DataTable();
  var table = $('#dataTable5').DataTable({
     dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'print'
    ]
  });

  table.buttons().container()
    .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );

});