<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class home extends CI_Controller {

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
	
	// login page
	public function index()
	{
		$this->load->view('main');
	}

	// logging in with credentials
	public function login()
	{
		$this->form_validation->set_rules('lpassword', 'Password', 'required');
        $this->form_validation->set_rules('lusername', 'Username', 'required');
        if ($this->form_validation->run())
        {
        	$data = $this->input->post();
        	unset($data['submit']);
	         $this->load->model('query');
	         $username = $this->input->post('lusername');
	         $password = base64_encode(strrev(md5($this->input->post('lpassword'))));
	         $user = $this->query->login($username, $password);
	         if($user){
	         	$session_data = array(
	         		'id' => $user->user_id,
	         		'username' => $user->username,
	         		'created' =>$user->created,
	         		'firstname' =>$user->firstname,
	         		'lastname' =>$user->lastname,
	         		'role_id' => $user->role_id,
	         	);
	         $this->session->set_userdata($session_data);
	         return redirect('dashboard');
	         }else{
	         	$this->session->set_flashdata('msg', ' Login Failed, Username or Password is Incorrect');
	         	return redirect('home');
	         }
	           
	        }
        else
        {
                //submit without filling all fields
                 $this->load->view('main');
        }
	
	}
}
