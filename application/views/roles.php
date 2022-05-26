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
        <li class="nav-item active">
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
            <li class="breadcrumb-item active">Roles</li>
          </ol>

        <div class="minheight" >
          <!--message -->
          <div id="successMessage" style="margin-top: 2px;">
            <?php if($msg = $this->session->flashdata('msg')):?>
            <div class="alert alert-dismissible alert-secondary">
              <?php echo $msg;?>
            </div>
          <?php endif;  ?>
          </div>
          <?php if($this->session->userdata('role_id') == 1):?>
          <div>
            <!-- add role btn -->
          <?php echo anchor('', 'Add Role', array('title' => 'Add Role', 'class' => 'btn btn-primary', 'data-toggle'=> 'modal', 'data-target'=> '#myModal'));?> <br>
          </div>
          <?php endif;?>
          
          <!-- DataTables Example -->
          <div class="card mb-3" style="margin-top: 5px;">
            <div class="card-header">
              <i class="fas fa-table"></i>
              All Roles</div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Role</th>
                      <th>Users</th>
                      <th>Date</th>
                      <?php if($this->session->userdata('role_id') == 1):?>
                      <th>Action</th>
                       <?php endif;?>
                    </tr>
                  </thead>
                  <tbody>
                    <?php
                           //id auto increament in tables initiation
                          $i = 1;

                         if(count($records)):?>
                      <?php foreach ($records as $records):?>
                    <tr>
                     <td>
                      <!-- <?php echo $records->role_id?> -->
                        <?php 
                          echo $i;
                          $i++;
                         ?>
                      </td>
                      <td><?php echo $records->role?></td>
                      <td><?php
                        $this->db->where('role_id', $records->role_id);
                        $this->db->from('user');
                        echo $this->db->count_all_results();
                      ?>
                      </td>
                      <td><?php echo $records->created?></td>
                      <?php if($this->session->userdata('role_id') == 1):?>
                      <td><?php echo anchor("role/roledel/{$records->role_id}", 'Delete', array('title' => 'Delete', 'class' => 'btn btn-danger', 'onclick' => "return confirm('Do you want to delete this record?')"));;?></td>
                      <?php endif;?>
                    </tr>
                     <?php endforeach;?>
                      <?php endif;?>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer small text-muted"><i class="fas fa-table"></i></div>
          </div>
        </div>

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

    <!-- add role Modal-->
   <div class="modal" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><h2 style="text-decoration: underline;"><strong>Add Role</strong></h2></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <center><small style="text-decoration: underline;">Fill all the fields</small></center>
             <?php echo form_open('role/addrole');?>
            <fieldset>
              <div class="form-group">
                <label for="Title">Title</label>
                <?php echo form_input(['name'=>'role', 'placeholder'=>'Enter Role', 'class'=>'form-control', 'autocomplete'=>'off']);?>
                  <?php echo form_error('role', '<div class="text-danger">', '</div>');?>
              </div>
              <?php echo form_submit(['name'=>'add', 'value'=>'Add Role', 'class'=>'btn btn-success btn-lg']);?>
              <?php echo form_reset(['name'=>'reset', 'value'=>'Cancel', 'class'=>'btn btn-danger btn-lg']);?>
            </fieldset>
          <?php echo form_close();?>
          </div>
        </div>
      </div>
    </div>

<?php include_once('footer.php');?>