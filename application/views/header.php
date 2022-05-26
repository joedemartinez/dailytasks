<?php
     // mysql data for the area chart on dashboard
    $dataPoints = array();
    //Best practice is to create a separate file for handling connection to database
    try{
         // Creating a new connection.
        // Replace your-hostname, your-db, your-username, your-password according to your database
        $link = new \PDO(   'mysql:host=localhost;dbname=daily;charset=utf8mb4', //'mysql:host=localhost;dbname=canvasjs_db;charset=utf8mb4',
                            'root', //'root',
                            '', //'',
                            array(
                                \PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                                \PDO::ATTR_PERSISTENT => false
                            )
                        );
        
        $handle = $link->prepare('select created, s_id from solution'); 
        $handle->execute(); 
        $result = $handle->fetchAll(\PDO::FETCH_OBJ);
            
        foreach($result as $row){
            array_push($dataPoints, array("x"=> date('m',strtotime($row->created)),"y"=> $row->s_id));
            // echo date('M',strtotime($row->created));
        }// 
        $link = null;
    }
    catch(\PDOException $ex){
        print($ex->getMessage());
    }
        //echo date('M',strtotime($row->created));
    ?>
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Blog">
    <meta name="author" content="Joshua Appiah Dadzie">

    <title>LOG SYSTEM</title>

    <!-- Bootstrap core CSS-->
    <link rel="stylesheet" href="<?php echo base_url('assets/vendor/bootstrap/css/bootstrap.min.css');?>" >
    <link rel="stylesheet" href="<?php echo base_url('assets/vendor/bootstrap/css/bootstrap.css');?>" >

    <!-- Custom fonts for this template-->
    <link href="<?php echo base_url('assets/vendor/fontawesome-free/css/all.min.css');?>" rel="stylesheet" type="text/css">

    <!-- Page level plugin CSS-->
    <link href="<?php echo base_url('assets/vendor/datatables/dataTables.bootstrap4.css');?>" rel="stylesheet">
    <link href="<?php echo base_url('assets/vendor/datatables/buttons.dataTables.min.css');?>" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="<?php echo base_url('assets/css/sb-admin.css');?>" rel="stylesheet">
    <script>
    window.onload = function () {
     
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        // title:{
        //     text: "PHP Column Chart from Database"
        // },
            axisX: {

                valueFormatString: "MMM"
        },
        data: [{
             //change type to bar, line, area, pie, etc  
            type: "splineArea",
                            xValueType: "dateTime",
                            xValueFormatString: " Y-m-d",
            dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
        }]
    });
    chart.render();
     
    }
    </script>
  </head>

  <body id="page-top" style="margin: 0px"> 

    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
     <a href="<?php echo base_url('dashboard');?>"> <img src="<?php echo base_url('assets/img/Sketch001.png');?>" height=60 width=auto></a>
      <a class="navbar-brand mr-1" href="<?php echo base_url('dashboard');?>"><strong>LOG SYSTEM</strong></a>

      <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i class="fas fa-bars"></i>
      </button>
      <div class="mr-auto"></div>
      <!-- Navbar -->
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <?php $name = $this->session->userdata('firstname')." ". $this->session->userdata('lastname')?>
            <i><strong><?php echo $name;?></strong></i>
            <i class="fas fa-user-circle fa-fw"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="<?php echo base_url('user/profile');?>">Profile</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="<?php echo base_url('user/password');?>">Change Password</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="<?php echo base_url('dashboard/logout');?>">Logout</a>
          </div>
        </li>
      </ul>

    </nav>