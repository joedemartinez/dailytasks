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
        <li class="nav-item active">
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
            <li class="breadcrumb-item active">Problems</li>
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
          <?php echo anchor('', 'Add Problem', array('title' => 'Add Problem', 'class' => 'btn btn-primary', 'data-toggle'=> 'modal', 'data-target'=> '#myModal'));?> <br>
          </div>
            <!-- DataTables Example -->
          <div class="card mb-3" style="margin-top: 5px;">
            <div class="card-header">
              <i class="fas fa-table"></i>
              All Problems</div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Role/Staff</th>
                      <th>User</th>
                      <th>Department</th>
                      <th>Equipment</th>
                      <th>Type</th>
                      <th>Problem</th>
                      <th>Solution</th>
                      <th>Date</th>
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
                      <!-- <?php echo $records->s_id?> -->
                        <?php 
                          echo $i;
                          $i++;
                         ?>
                      </td>
                      <!-- getting role from role table -->
                      <?php
                        $id = $this -> db
                                    -> select('role')
                                    -> where('role_id', $records->role_id)
                                    -> get('role');
                      ?> 
                      <!-- getting user name from user table -->
                      <?php
                        $firstname = $this -> db
                                    -> select('firstname, lastname')
                                    -> where('user_id', $records->user_id)
                                    -> get('user');
                      ?> 
                      <td><?php echo $id->row()->role. "(". $firstname->row()->firstname." ".$firstname->row()->lastname.")"
                      ?></td>
                      <td><?php echo $records->user?></td>
                      <!-- getting department name from department table -->
                      <?php
                        $id = $this -> db
                                    -> select('dep_name')
                                    -> where('dep_id', $records->dep_id)
                                    -> get('department');
                      ?> 
                      <td><?php echo $id->row()->dep_name?></td>
                      <!-- getting equipment name from equipment table -->
                      <?php
                        $id = $this -> db
                                    -> select('name')
                                    -> where('equipment_id', $records->equipment_id)
                                    -> get('equipment');
                      ?> 
                      <td><?php echo $id->row()->name?></td>
                      <!-- getting problem type name from p_type table -->
                      <?php
                        $id = $this -> db
                                    -> select('name')
                                    -> where('p_id', $records->p_id)
                                    -> get('p_type');
                      ?> 
                      <td><?php echo $id->row()->name?></td>
                      <td><?php echo $records->p_description?></td>
                      <td><?php echo $records->s_description?></td>
                      <td><?php echo $records->created?></td>
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

    <!-- add user Modal-->
    <div class="modal" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><h2 style="text-decoration: underline;"><strong>Add Problem</strong></h2></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <center><small style="text-decoration: underline;">Fill all the fields</small></center>
             <?php echo form_open('problem/newproblem');?>
            <fieldset>
                <div>
                   <div class="form-group">
                      <label for="department">Department</label>
                      <select class="form-control" name="dep_id">
                        <!-- problem form department combo box -->
                        <?php
                        $id = $this -> db
                                    -> select('dep_id,dep_name')
                                    -> where('del', 0)
                                    -> get('department');
                      ?> 
                        <?php foreach($id->result() as $records1): ?>
                         <option value="<?php echo $records1->dep_id?>"><?php echo $records1->dep_name ?></option>
                         <?php endforeach; ?>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="equipment">Equipment</label>
                      <select class="form-control" name="equipment_id">
                        <!-- problem form equipment combo box -->
                        <?php
                        $id = $this -> db
                                    -> select('equipment_id,name')
                                    -> where('del', 0)
                                    -> get('equipment');
                      ?> 
                        <?php foreach($id->result() as $records1): ?>
                         <option value="<?php echo $records1->equipment_id?>"><?php echo $records1->name ?></option>
                         <?php endforeach; ?>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="type">Problem Type</label>
                      <select class="form-control" name="p_id">
                        <!-- problem form type combo box -->
                        <?php
                        $id = $this -> db
                                    -> select('p_id,name')
                                    -> where('del', 0)
                                    -> get('p_type');
                      ?> 
                        <?php foreach($id->result() as $records1): ?>
                         <option value="<?php echo $records1->p_id?>"><?php echo $records1->name ?></option>
                         <?php endforeach; ?>
                      </select>
                    </div>
                   <div class="form-group">
                    <label for="user">Staff</label>
                    <?php echo form_input(['name'=>'user', 'placeholder'=>'User/Staff', 'class'=>'form-control', 'autocomplete'=>'off']);?>
                    <?php echo form_error('user', '<div class="text-danger">', '</div>');?>
                   </div>
                  <div class="form-group">
                  <label for="problem">Problem</label>
                  <?php echo form_textarea(['name'=>'p_description', 'placeholder'=>'Problem', 'class'=>'form-control' , 'rows'=>'5', 'autocomplete'=>'off']);?>
                  <?php echo form_error('p_description', '<div class="text-danger">', '</div>');?>
                  </div>
                  <div class="form-group">
                  <label for="solution">Solution</label>
                  <?php echo form_textarea(['name'=>'s_description', 'placeholder'=>'Solution', 'rows'=>'5', 'class'=>'form-control', 'autocomplete'=>'off']);?>
                  <?php echo form_error('s_description', '<div class="text-danger">', '</div>');?>
                  </div>
                  <div class="form-group">
                  <?php echo form_submit(['name'=>'add', 'value'=>'Add', 'class'=>'btn btn-success btn-lg']);?>
                  <?php echo form_reset(['name'=>'reset', 'value'=>'Cancel', 'class'=>'btn btn-danger btn-lg']);?> 
                </div>
            </fieldset>
          <?php echo form_close();?>
          </div>
        </div>
      </div>
    </div>

<?php include_once('footer.php');?>