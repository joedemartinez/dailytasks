 <?php
defined('BASEPATH') OR exit('No direct script access allowed');
// date_default_timezone_set("GMT");
// echo date('Y-m-d h:i:s A');

?>

<?php include_once('header.php');?>
    <div id="wrapper" >

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
        <li class="nav-item active">
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
            <li class="breadcrumb-item active">Report</li>
          </ol>

          <div class="minheight">
            
            <ul class="nav nav-tabs" >
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#users">Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " data-toggle="tab" href="#department">Departments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " data-toggle="tab" href="#equipment">Equipments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " data-toggle="tab" href="#role">Roles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " data-toggle="tab" href="#problem">Problems</a>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link " href="dashboard/backup" onclick="return confirm('Do you want to backup the entire database?">Backup Database</a> -->
                <?php echo anchor("report/backup", 'Backup Database', array('title' => 'Backup Entire Database', 'class' => 'nav-link ', 'onclick' => "return confirm('Do you want to backup the entire database?')"));?>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content">
              <div class="tab-pane fade active show" id="users">
                    <br>
                    
                    <div id="printuser">
                      <div class="card-header">
                        <i class="fas fa-table"></i>
                          All Users</div>
                        <div class="card-body">
                          <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable1" width="100%" cellspacing="0">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Username</th>
                                  <th>Type</th>
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
                                    <!-- <?php echo $records->user_id?> -->
                                      <?php 
                                        echo $i;
                                        $i++;
                                       ?>
                                    </td>
                                  <td><?php echo $records->firstname ." ". $records->lastname?></td>
                                  <td><?php echo $records->username?></td>
                                  <!-- getting role from role table -->
                                  <?php
                                    $id = $this -> db
                                                -> select('role')
                                                -> where('role_id', $records->role_id)
                                                -> get('role');
                                  ?>             
                                  <td><?php echo $id->row()->role;?></td>
                                  <td><?php echo $records->created?></td>
                                </tr>
                                 <?php endforeach;?>
                                  <?php endif;?>
                              </tbody>
                            </table>
                          </div>
                        </div>
                    </div>
              </div>
              <div class="tab-pane fade " id="department">
                <br>
                   
                <div id="printdepartment">
                  <div class="card-header">
                  <i class="fas fa-table"></i>
                  All Department</div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable2" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php
                           //id auto increament in tables initiation
                          $i = 1;

                         if(count($records2)):?>
                          <?php foreach ($records2 as $records2):?>
                        <tr>
                          <td>
                            <!-- <?php echo $records2->dep_id?> -->
                              <?php 
                                echo $i;
                                $i++;
                               ?>
                            </td>
                          <td><?php echo $records2->dep_name?></td>
                          <!-- class="read-more" -->
                          <td><?php echo $records2->description?></td>
                          <td><?php echo $records2->created?></td>
                        
                        </tr>
                         <?php endforeach;?>
                          <?php endif;?>
                      </tbody>
                    </table>
                  </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="equipment">
                <br>
                    
                <div id="printequipment">
                  <div class="card-header">
                  <i class="fas fa-table"></i>
                  All Equipments</div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable3" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Brand</th>
                          <th>Date</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                          <?php 
                          //id auto increament in tables initiation
                          $i = 1;

                          if(count($records4)):?>
                          <?php foreach ($records4 as $records4):?>
                        <tr>
                          <td>
                            <!-- <?php echo $records4->equipment_id?> -->
                              <?php 
                                echo $i;
                                $i++;
                               ?>
                            </td>
                          <td><?php echo $records4->name?></td>
                          <td><?php echo $records4->brand?></td>
                          <td><?php echo $records4->created?></td>
                         
                        </tr>
                         <?php endforeach;?>
                          <?php endif;?>
                      </tbody>
                    </table>
                  </div>
                </div>
                </div>
              </div>
              <div class="tab-pane fade" id="role">
                <br>
                   
                <div id="printrole">
                  <div class="card-header">
                  <i class="fas fa-table"></i>
                  All Roles</div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable4" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Role</th>
                          <th>Users</th>
                          <th>Date</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <?php 
                          //id auto increament in tables initiation
                          $i = 1;

                        if(count($records1)):?>
                          <?php foreach ($records1 as $records1):?>
                        <tr>
                          <td>
                            <!-- <?php echo $records1->role_id?> -->
                              <?php 
                                echo $i;
                                $i++;
                               ?>
                            </td>
                          <td><?php echo $records1->role?></td>
                          <td><?php
                            // get individual users who have a particular role
                            $this->db->where('role_id', $records1->role_id);
                            $this->db->from('user');
                            echo $this->db->count_all_results();
                          ?>
                          </td>
                          <td><?php echo $records1->created?></td>
                         
                        </tr>
                         <?php endforeach;?>
                          <?php endif;?>
                      </tbody>
                    </table>
                  </div>
                 </div>
                </div>
              </div>
              <div class="tab-pane fade" id="problem">
                <br>

                <div id="printproblem">
                  <div class="card-header">
                  <i class="fas fa-table"></i>
                  All Problems
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered" id="dataTable5" width="100%" cellspacing="0">
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

                          if(count($records3)):?>
                            <?php foreach ($records3 as $records3):?>
                          <tr>
                            <td>
                              <!-- <?php echo $records3->s_id ?> -->
                                <?php 
                                echo $i;
                                $i++;
                               ?>
                              </td>
                            <!-- getting role from role table -->
                            <?php
                              $id = $this -> db
                                          -> select('role')
                                          -> where('role_id', $records3->role_id)
                                          -> get('role');
                            ?> 
                            <!-- getting user name from user table -->
                            <?php
                              $firstname = $this -> db
                                          -> select('firstname, lastname')
                                          -> where('user_id', $records3->user_id)
                                          -> get('user');
                            ?> 
                            <td><?php echo $id->row()->role. "(". $firstname->row()->firstname." ".$firstname->row()->lastname.")"
                            ?></td>
                            <td><?php echo $records3->user?></td>
                            <!-- getting department name from department table -->
                            <?php
                              $id = $this -> db
                                          -> select('dep_name')
                                          -> where('dep_id', $records3->dep_id)
                                          -> get('department');
                            ?> 
                            <td><?php echo $id->row()->dep_name?></td>
                            <!-- getting equipment name from equipment table -->
                            <?php
                              $id = $this -> db
                                          -> select('name')
                                          -> where('equipment_id', $records3->equipment_id)
                                          -> get('equipment');
                            ?> 
                            <td><?php echo $id->row()->name?></td>
                            <!-- getting problem type name from p_type table -->
                            <?php
                              $id = $this -> db
                                          -> select('name')
                                          -> where('p_id', $records3->p_id)
                                          -> get('p_type');
                            ?> 
                            <td><?php echo $id->row()->name?></td>
                            <td><?php echo $records3->p_description?></td>
                            <td><?php echo $records3->s_description?></td>
                            <td><?php echo $records3->created?></td>
                          </tr>
                           <?php endforeach;?>
                            <?php endif;?>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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