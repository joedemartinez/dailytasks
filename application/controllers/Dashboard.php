 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

class dashboard extends CI_Controller {

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

	// dashboard page
	public function index()
	{
		$id = $this->session->userdata('id');
		if(!$id){
		return redirect('home');
		}
		$this->load->view('dashboard');
		
	}


	// logging out
	public function logout(){
		$this->session->sess_destroy();
		return redirect('home');
		//session_destroy();
	}
}
