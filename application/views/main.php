<?php
defined('BASEPATH') OR exit('No direct script access allowed');
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

    <!-- Custom fonts for this template-->
    <link href="<?php echo base_url('assets/vendor/fontawesome-free/css/all.min.css');?>" rel="stylesheet" type="text/css">

    <!-- Page level plugin CSS-->
    <link href="<?php echo base_url('assets/vendor/datatables/dataTables.bootstrap4.css');?>" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="<?php echo base_url('assets/css/sb-admin.css');?>" rel="stylesheet">

  </head>

  <body id="page-top" style="background: linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))">
    <header>
       <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
     <a href=""<?php echo base_url('index.php/home');?>"> <img src="<?php echo base_url('assets/img/Sketch001.png');?>" height=80 width=auto></a>
      <a class="navbar-brand mr-1" href="<?php echo base_url('index.php/home');?>"><strong>LOG SYSTEM</strong></a>
      
    </nav>
    </header><br>
      <div class="container">
          <center>
            <div class="col-md-7 col-xs-7" style="text-align: justify;">
              <!-- message -->
          <div id="successMessage" style="margin-top: 2px;">
            <?php if($msg = $this->session->flashdata('msg')):?>
            <div class="alert alert-dismissible alert-info">
              <?php echo $msg;?>
            </div>
          <?php endif;  ?>
          </div>
            <?php echo form_open('home/login');?>
            <div class="card">
                <div class="card-header text-center" style="text-decoration: underline; padding: 0px"><h1>LOGIN</h1></div>
                <div class="card-body">
                  <label for="username">Username</label>
                    <?php echo form_input(['name'=>'lusername', 'placeholder'=>'Username', 'class'=>'form-control', 'autocomplete'=>'off', 'autofocus'=>'on']);?>
                    <?php echo form_error('lusername', '<div class="text-danger">', '</div>');?>
                    <div class="password-wrapper">
                      <label for="Password">Password</label>
                      <?php echo form_password(['name'=>'lpassword', 'placeholder'=>'Password', 'class'=>'form-control password', 'autocomplete'=>'off', 'id'=>'password']);?>
                      <a class="unmask" title="Show/Hide password" style="top: 49.4px;"></a>
                      <?php echo form_error('lpassword', '<div class="text-danger">', '</div>');?>
                    </div>
                </div>
                <a class="card-footer text-white" style="padding-bottom: 10px;padding-top: 10px;padding-right: 10px;padding-left: 0px;">
                  <span class="float-right">
                     <?php echo form_submit(['name'=>'submit', 'value'=>'Login', 'class'=>'btn btn-success btn-lg']);?>
                      <?php echo form_reset(['name'=>'reset', 'value'=>'Cancel', 'class'=>'btn btn-danger btn-lg']);?>
                  </span>
                </a>
              </div>
            <?php echo form_close();?>
          </div>
          </center>
 </div>
        <!-- /.container -->

<?php include_once('footer.php');?>