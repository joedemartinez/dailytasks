 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

class equipment extends CI_Controller {

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

	// equipment page
	public function index(){
		$id = $this->session->userdata('id');
		$role_id = $this->session->userdata('role_id');
		$this->load->model('query');
		$records = $this->query->showallequipment();
		if(!$id){
			return redirect('home');
		}
		if($role_id > 2){
			return redirect('dashboard');
		}
		$this->load->view('equipment', ['records'=>$records]);
	}

	// adding new equipment
	public function newequipment(){
		$this->form_validation->set_rules('name', 'Name of Product', 'required');
        $this->form_validation->set_rules('brand', 'Brand', 'required');
        if ($this->form_validation->run())
        {
            $data = $this->input->post();
            date_default_timezone_set("GMT");
            $date = date('Y-m-d H:i:s');
            $data['created'] = $date;
         	unset($data['add']);
	        $this->load->model('query');
             if( $this->query->newequipment($data)){
             	$this->session->set_flashdata('msg', ' Successful');
             }else{
             	$this->session->set_flashdata('msg', '  Failed');
             }
           return redirect('dashboard/equipment');
        }
        else
        {
                // if all fields are not filled 
        	$this->session->set_flashdata('msg', ' Fill All Fields And Try Again!!');
            return redirect('dashboard/equipment');
        }
	}

	// deleting equipment
	public function equipmentdel($id){
		$this->load->model('query');
		$records = $this->query->equipmentdel($id);
		$this->session->set_flashdata('msg', 'Delete Successful');
		return redirect('dashboard/equipment');
	}

}
