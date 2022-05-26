 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

class user extends CI_Controller {

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

	// users page
	public function index()
	{
		$id = $this->session->userdata('id');
		$role_id = $this->session->userdata('role_id');
		$this->load->model('query');
		$records = $this->query->showalluser();
		$records1 = $this->query->showroles();
		if(!$id){
			return redirect('home');
		}
		if($role_id > 2){
			return redirect('dashboard');
		}
		$this->load->view('users', ['records'=>$records, 'records1'=>$records1]);
	}

	// adding new user
	public function newuser()
	{
		$this->form_validation->set_rules('password', 'Password', 'required');
        $this->form_validation->set_rules('lastname', 'Last Name', 'required');
        $this->form_validation->set_rules('firstname', 'First Name', 'required');
        $this->form_validation->set_rules('username', 'Username', 'trim|required|is_unique[user.username]');
             if ($this->form_validation->run())
        {
            $data = $this->input->post();
            date_default_timezone_set("GMT");
            $date = date('Y-m-d H:i:s');
            $data['created'] = $date;
            $data['role_id'] = $this->input->post('role_id');
            $data['firstname'] = $this->input->post('firstname');
            $data['lastname'] = $this->input->post('lastname');
            $data['username'] = $this->input->post('username');
            $data['password'] = base64_encode(strrev(md5($this->input->post('password'))));
         	unset($data['add']);
	        $this->load->model('query');
             if( $this->query->addnewuser($data)){
             	$this->session->set_flashdata('msg', ' Successful');
             }else{
             	$this->session->set_flashdata('msg', '  Failed');
             }
             return redirect('dashboard/user');
        }
        else
        {
                // if all fields are not filled 
        	$this->session->set_flashdata('msg', ' Fill All Fields And Try Again!!');
                 return redirect('dashboard/user');
        }
	
	}

    // profile page
    public function profile()
	{
		$id = $this->session->userdata('id');
		$this->load->model('query');
		$records = $this->query->profile($id);
		$this->load->view('profile', ['records'=>$records]);
	}

	// updating profile
	public function updateprofile(){
        $this->form_validation->set_rules('lastname', 'Last Name', 'required');
        $this->form_validation->set_rules('firstname', 'First Name', 'required');
        if ($this->form_validation->run())
        {
            $data = $this->input->post();
            $data['role_id'] = $this->session->userdata('role_id');
        	unset($data['update']);
	        $this->load->model('query');
	        $id = $this->session->userdata('id');
             if (!$this->query->updateprofile($data, $id)){
             	$this->session->set_flashdata('msg', 'Profile Update Successful');
             }else{
             	$this->session->set_flashdata('msg', ' Profile Update Failed');
             }
           return redirect('dashboard/profile');
		
        }else
        {
                // if all fields are not filled 
        	$this->session->set_flashdata('msg', ' No Update');
                 return redirect('dashboard/profile');
        }	
	}

	// logging out
	public function logout(){
		$this->session->sess_destroy();
		return redirect('home');
		//session_destroy();
	}

	// deleting user
	public function userdel($id){
		$this->load->model('query');
		$records = $this->query->userdel($id);
		$this->session->set_flashdata('msg', 'Delete Successful');
		return redirect('dashboard/user');
	}

	// reseting password
	public function passwordreset($id){
		$data = base64_encode(strrev(md5('password')));
		$this->load->model('query');
		$records = $this->query->passwordreset($data, $id);
		$this->session->set_flashdata('msg', 'Reset Successful');
		return redirect('dashboard/user');
	}

	// password page
	public function password()
	{
		$id = $this->session->userdata('id');
		$this->load->model('query');
		$records = $this->query->password($id);
		$this->load->view('password', ['records'=>$records]);
	}

	// change password
	public function changepassword()
	{
		$this->form_validation->set_rules('password', 'Password', 'required');
        if ($this->form_validation->run())
        {
        	$id = $this->session->userdata('id');
            $data = $this->input->post();
            $data = base64_encode(strrev(md5($this->input->post('password'))));
	        $this->load->model('query');
             if( $this->query->changepassword($data, $id)){
             	$this->session->set_flashdata('msg', ' Successful');
             }else{
             	$this->session->set_flashdata('msg', '  Failed');
             }
             return redirect('dashboard/password');
        }
        else
        {
                // if all fields are not filled 
        	$this->session->set_flashdata('msg', 'Enter new password');
                 return redirect('dashboard/password');
        }
	
	}

}
