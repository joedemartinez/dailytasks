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
        <li class="nav-item active">
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
            <li class="breadcrumb-item active">Equipments</li>
          </ol>

         <div class="minheight">
          <!-- message -->
          <div id="successMessage" style="margin-top: 2px;">
            <?php if($msg = $this->session->flashdata('msg')):?>
            <div class="alert alert-dismissible alert-secondary">
              <?php echo $msg;?>
            </div>
          <?php endif;  ?>
          </div>
          <div>
            <!-- add user btn -->
          <?php echo anchor('', 'Add Equipment', array('title' => 'Add Equipment', 'class' => 'btn btn-primary', 'data-toggle'=> 'modal', 'data-target'=> '#myModal'));?> <br>
          </div>
            <!-- DataTables Example -->
          <div class="card mb-3" style="margin-top: 5px;">
            <div class="card-header">
              <i class="fas fa-table"></i>
              All Equipments</div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Brand</th>
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
                      <!-- <?php echo $records->equipment_id?> -->
                        <?php 
                          echo $i;
                          $i++;
                         ?>
                      </td>
                      <td><?php echo $records->name?></td>
                      <td><?php echo $records->brand?></td>
                      <td><?php echo $records->created?></td>
                      <?php if($this->session->userdata('role_id') == 1):?>
                      <td><?php echo anchor("equipment/equipmentdel/{$records->equipment_id}", 'Delete', array('title' => 'Delete', 'class' => 'btn btn-danger', 'onclick' => "return confirm('Do you want to delete this record?')"));?></td>
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
        <!-- /.container-fluid -->

        <!-- Sticky Footer -->
        <footer class="sticky-footer">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright ?? 2019</span>
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

    <!-- add equipment Modal-->
    <div class="modal" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><h2 style="text-decoration: underline;"><strong>Add Equipment</strong></h2></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <center><small style="text-decoration: underline;">Fill all the fields</small></center>
             <?php echo form_open('equipment/newequipment');?>
            <fieldset>
                <div>
                   <div class="form-group">
                    <label for="name">Name</label>
                    <?php echo form_input(['name'=>'name', 'placeholder'=>'Name of Product', 'class'=>'form-control', 'autocomplete'=>'off']);?>
                    <?php echo form_error('name', '<div class="text-danger">', '</div>');?>
                   </div>
                    <div class="form-group">
                  <label for="brand">Brand</label>
                  <?php echo form_input(['name'=>'brand', 'placeholder'=>'Product Brand', 'class'=>'form-control', 'autocomplete'=>'off']);?>
                  <?php echo form_error('brand', '<div class="text-danger">', '</div>');?>
                  </div>
                  <div class="form-group">
                  <?php echo form_submit(['name'=>'add', 'value'=>'Add Equipment', 'class'=>'btn btn-success btn-lg']);?>
                  <?php echo form_reset(['name'=>'reset', 'value'=>'Cancel', 'class'=>'btn btn-danger btn-lg']);?> 
                </div>
            </fieldset>
          <?php echo form_close();?>
          </div>
        </div>
      </div>
    </div>

<?php include_once('footer.php');?>