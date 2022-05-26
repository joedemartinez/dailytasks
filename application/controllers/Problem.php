<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class problem extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	
    // problem page
    public function index(){
    	$id = $this->session->userdata('id');
		$role_id = $this->session->userdata('role_id');
		$this->load->model('query');
		$records = $this->query->showallsolution();
		if(!$id){
			return redirect('home');
		}
		$this->load->view('problem', ['records'=>$records]);
    }

    // adding new problem
    public function newproblem()
	{
        $this->form_validation->set_rules('user', 'Staff', 'required');
        $this->form_validation->set_rules('p_description', 'Problem Description', 'required');
        $this->form_validation->set_rules('s_description', 'Solution Description', 'required');
            if ($this->form_validation->run()){
	            $data = $this->input->post();
	            date_default_timezone_set("GMT");
	            $date = date('Y-m-d H:i:s');
	            $data['role_id'] = $this->session->userdata('role_id');
	            $data['user_id'] = $this->session->userdata('id');
	            // $data['p_id'] = $this->input->post('p_id');
	            // $data['equipment_id'] = $this->input->post('equipment_id');
	            // $data['dep_id'] = $this->input->post('dep_id');
           		$data['created'] = $date;
	         	unset($data['add']);           
		        $this->load->model('query');

	             if( $this->query->newproblem($data)){
	             	$this->session->set_flashdata('msg', ' Successful');
	             }else{
	             	$this->session->set_flashdata('msg', ' Failed');
	             }
	           return redirect('dashboard/problem');
			}
			else
			{
				$this->session->set_flashdata('msg', ' Fill All Fields And Try Again!!');
			      return redirect('dashboard/problem');
			}
    }

}
