<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<?php include_once('header.php');?>
    <div id="wrapper">

      <!-- Sidebar -->
      <ul class="sidebar navbar-nav">
        <li class="nav-item ">
          <a class="nav-link" href="<?php echo base_url('dashboard');?>">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <!-- hiding tabs from normal users --> 
        <?php if($this->session->userdata('id') < 3 ):?>
        <li class="nav-item ">
          <a class="nav-link " href="<?php echo base_url('user');?>" >
            <i class="fas fa-fw fa-users"></i>
            <span>Users</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo base_url('equipment');?>">
            <i class="fas fa-fw fa-desktop"></i>
            <span>Equipments</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo base_url('department');?>">
            <i class="fas fa-fw fa-building"></i>
            <span>Departments</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo base_url('role');?>">
            <i class="fas fa-fw fa-tasks"></i>
            <span>Roles</span></a>
        </li>
        <?php endif;?>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo base_url('problem');?>">
            <i class="fas fa-fw fa-exclamation-circle"></i>
            <span>Problems</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo base_url('report');?>">
            <i class="fas fa-fw fa-print"></i>
            <span>Reports</span></a>
        </li> 
      </ul>

      <div id="content-wrapper">

        <div class="container-fluid">

          <!-- Breadcrumbs-->
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="<?php echo base_url('dashboard');?>">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Profile</li>
          </ol>

        </div>
        

        <div class="container-fluid minheight">
          <!-- form -->
          <div id="successMessage" style="margin-top: 2px;">
            <?php if($msg = $this->session->flashdata('msg')):?>
            <div class="alert alert-dismissible alert-secondary">
              <?php echo $msg;?>
            </div>
          <?php endif;  ?>
          </div>
          <?php echo form_open('user/updateprofile');?>
            <fieldset>
                <div>
                  <legend style="text-decoration: underline;"><strong><h2>USER PROFILE</h2></strong></legend>
                  <div class="form-group">
                    <label for="role">User Type</label>
                    <!-- getting role from role table -->
                      <?php
                        $id = $this -> db
                                    -> select('role')
                                    -> where('role_id', $records->role_id)
                                    -> get('role');
                      ?>                  
                    <?php echo form_input(['name'=>'role_id', 'placeholder'=>'User Type', 'class'=>'form-control', 'autocomplete'=>'off', 'value'=>$id->row()->role, 'readonly'=>'on']);?>
                   </div>
                   <div class="form-group">
                    <label for="fname">First Name</label>
                    <?php echo form_input(['name'=>'firstname', 'placeholder'=>'First Name', 'class'=>'form-control', 'autocomplete'=>'off', 'value'=>"$records->firstname"]);?>
                    <?php echo form_error('firstname', '<div class="text-danger">', '</div>');?>
                   </div>
                    <div class="form-group">
                  <label for="lname">Last Name</label>
                  <?php echo form_input(['name'=>'lastname', 'placeholder'=>'Last Name', 'class'=>'form-control', 'autocomplete'=>'off', 'value'=>"$records->lastname"]);?>
                  <?php echo form_error('lastname', '<div class="text-danger">', '</div>');?>
                  </div>
                  <div class="form-group">
                  <label for="username">Username</label>
                  <?php echo form_input(['name'=>'username', 'placeholder'=>'Username', 'class'=>'form-control', 'autocomplete'=>'off', 'value'=>"$records->username", 'readonly'=>'on']);?>
                  <?php echo form_error('username', '<div class="text-danger">', '</div>');?>
                   </div> 
                  <div class="form-group">
                  <?php echo form_submit(['name'=>'update', 'value'=>'Update Profile', 'class'=>'btn btn-success btn-lg']);?>
                  <?php echo form_reset(['name'=>'reset', 'value'=>'Cancel', 'class'=>'btn btn-danger btn-lg']);?> 
                </div>
            </fieldset>
          <?php echo form_close();?>
        </div>

        <!-- Sticky Footer -->
        <footer class="sticky-footer">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright © 2019</span>
            </div>
          </div>
        </footer>

      </div>
      <!-- /.content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

<?php include_once('footer.php');?>