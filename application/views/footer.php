    <script src="<?php echo base_url('assets/js/demo/area-char.js');?>"></script>
    <!-- Bootstrap core JavaScript-->
    <script src="<?php echo base_url('assets/vendor/jquery/jquery.min.js');?>"></script>
    <script src="<?php echo base_url('assets/vendor/bootstrap/js/bootstrap.bundle.min.js');?>"></script>

    <!-- Core plugin JavaScript-->
    <script src="<?php echo base_url('assets/vendor/jquery-easing/jquery.easing.min.js');?>"></script>

    <!-- Page level plugin JavaScript-->
    <script src="<?php echo base_url('assets/vendor/datatables/jquery.dataTables.js');?>"></script>
    <script src="<?php echo base_url('assets/vendor/datatables/dataTables.bootstrap4.js');?>"></script>
    <script src="<?php echo base_url('assets/vendor/datatables/buttons.print.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/vendor/datatables/dataTables.buttons.min.js');?>"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/vendor/datatables/buttons.html5.min.js');?>"></script>

    <!-- Custom scripts for all pages-->
    <script src="<?php echo base_url('assets/js/sb-admin.min.js');?>"></script>
	<script src="<?php echo base_url('assets/js/foundation.min.js');?>"></script>

    <!-- Demo scripts for this page-->
    <script src="<?php echo base_url('assets/js/demo/datatables-demo.js');?>"></script>
   
    <!-- password hide/show -->
    <script type="text/javascript">
      $(document).foundation();

    /*
      Switch actions
    */
    $('.unmask').on('click', function(){

      if($(this).prev('input').attr('type') == 'password')
        changeType($(this).prev('input'), 'text');

      else
        changeType($(this).prev('input'), 'password');

      return false;
    });

    function changeType(x, type) {
      if(x.prop('type') == type)
      return x; //That was easy.
      try {
        return x.prop('type', type); //Stupid IE security will not allow this
      } catch(e) {
        //Try re-creating the element (yep... this sucks)
        //jQuery has no html() method for the element, so we have to put into a div first
        var html = $("<div>").append(x.clone()).html();
        var regex = /type=(\")?([^\"\s]+)(\")?/; //matches type=text or type="text"
        //If no match, we add the type attribute to the end; otherwise, we replace
        var tmp = $(html.match(regex) == null ?
          html.replace(">", ' type="' + type + '">') :
          html.replace(regex, 'type="' + type + '"') );
        //Copy data from old element
        tmp.data('type', x.data('type') );
        var events = x.data('events');
        var cb = function(events) {
          return function() {
                //Bind all prior events
                for(i in events)
                {
                  var y = events[i];
                  for(j in y)
                    tmp.bind(i, y[j].handler);
                }
              }
            }(events);
            x.replaceWith(tmp);
        setTimeout(cb, 10); //Wait a bit to call function
        return tmp;
      }
    }
    </script>

    <!-- message fade out time -->
    <script type="text/javascript">
      $(function() {
        $("#successMessage:visible").fadeOut(10000);
      });
    </script>

  </body>

</html>
