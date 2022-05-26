 <?php
defined('BASEPATH') OR exit('No direct script access allowed');
// date_default_timezone_set("GMT");
// echo date('Y-m-d h:i:s A');
?>

<?php include_once('header.php');?>
    <div id="wrapper" >

      <!-- Sidebar -->
      <ul class="sidebar navbar-nav">
        <li class="nav-item active">
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

      <div id="content-wrapper" >

        <div class="container-fluid" >

          <!-- Breadcrumbs-->
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="<?php echo base_url('dashboard');?>">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Overview</li>
          </ol>

          <div class="minheight">
            
          <!-- Icon Cards-->
          <div class="row">
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-primary o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fas fa-fw fa-exclamation-circle fa-2x"></i>
                  </div>
                  <div class="mr-5"><h1><?php echo $this->db->count_all('solution');?></h1></div>
                </div>
                <a class="card-footer text-white clearfix small z-1">
                  <span class="float-left">Problems</span>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-warning o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fas fa-fw fa-users fa-2x"></i>
                  </div>
                  <div class="mr-5"><h1><?php $this->db->where('del', 0); $this->db->from('user'); echo $this->db->count_all_results();?></h1></div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">Users</span>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-success o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fas fa-fw fa-list fa-2x"></i>
                  </div>
                  <div class="mr-5"><h1><?php $this->db->where('del', 0); $this->db->from('role'); echo $this->db->count_all_results();?></h1></div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">Roles</span>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-primary o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fas fa-fw fa-building fa-2x"></i>
                  </div>
                  <div class="mr-5"><h1><?php $this->db->where('del', 0); $this->db->from('department'); echo $this->db->count_all_results();?></h1></div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">Department</span>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-danger o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fas fa-fw fa-desktop fa-2x"></i>
                  </div>
                  <div class="mr-5"><h1><?php $this->db->where('del', 0); $this->db->from('equipment'); echo $this->db->count_all_results();?></h1></div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">Equipment</span>
                </a>
              </div>
            </div>
          </div>

            <div class="col-lg-12">
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fa fa-chart-area" ></i>
                  Chart</div>
                <div class="card-body">
                   <div id="chartContainer" style="height: 370px; width: 100%;"></div>
                </div>
                <div class="card-footer small text-muted"></div>
              </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

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