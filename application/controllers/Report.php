<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class report extends CI_Controller {

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
	//report page 
	public function index()
	{
		$id = $this->session->userdata('id');
		$this->load->model('query');
		$records = $this->query->showalluser();
		$records1 = $this->query->showroles();
		$records2 = $this->query->showalldepartment();
		$records3 = $this->query->showallsolution();
		$records4 = $this->query->showallequipment();
		if(!$id){
		return redirect('home');
		}
		$this->load->view('report', ['records'=>$records, 'records1'=>$records1, 'records2'=>$records2, 'records3'=>$records3, 'records4'=>$records4]);
		
	}

	//backing up the entire database file 
	public function backup(){
		// Load the DB utility class
		$this->load->dbutil();

		// Backup your entire database and assign it to a variable
		$backup = $this->dbutil->backup();

		// Load the file helper and write the file to your server
		// $this->load->helper('file');
		// write_file('/path/to/mybackup.sql', $backup);

		// Load the download helper and send the file to your desktop
		$this->load->helper('download');
		force_download('mybackup.sql', $backup);
	}
}
