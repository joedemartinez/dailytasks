<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class role extends CI_Controller {

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
	

	// role page
	public function index()
	{
		$id = $this->session->userdata('id');
		$role_id = $this->session->userdata('role_id');
		$this->load->model('query');
		$records = $this->query->showroles();
		if(!$id){
			return redirect('home');
		}
		if($role_id > 2){
			return redirect('dashboard');
		}
		$this->load->view('roles', ['records'=>$records]);
	}

	// adding new role
	public function addrole()
	{
        $this->form_validation->set_rules('role', 'Role', 'required|is_unique[role.role]');
            if ($this->form_validation->run()){
	            $data = $this->input->post();
	            date_default_timezone_set("GMT");
	            $date = date('Y-m-d H:i:s');
           		$data['created'] = $date;
	         	unset($data['add']);           
		        $this->load->model('query');

	             if( $this->query->addrole($data)){
	             	$this->session->set_flashdata('msg', ' Successful');
	             }else{
	             	$this->session->set_flashdata('msg', ' Failed');
	             }
	           return redirect('dashboard/role');
			}
			else
			{
				$this->session->set_flashdata('msg', ' Fill All Fields And Try Again!!');
			      return redirect('dashboard/role');
			}
    }

	// deleting role
	public function roledel($id){
		$this->load->model('query');
		$records = $this->query->roledel($id);
		$this->session->set_flashdata('msg', 'Delete Successful');
		return redirect('dashboard/role');
	}

}
