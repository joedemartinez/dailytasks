   <?php
defined('BASEPATH') OR exit('No direct script access allowed');

class query extends CI_Model {

	// login function accepts username and password
	public function login($username, $password)
	{
		$query = $this->db->where(['username' => $username, 'password' => $password])
						 ->get('user');
		 if($query->num_rows() > 0){
		 	return $query->row();
		 }
	} 

	// adding new user accepts form data
	public function addnewuser($data)
	{
		return $this->db->insert('user', $data);
	}

	// adding new equipment accepts form data
	public function newequipment($data)
	{
		return $this->db->insert('equipment', $data);
	}

	// adding department accepts form data
	public function newdepartment($data)
	{
		return $this->db->insert('department', $data);
	}

	// adding role accepts form data
	public function addrole($data){
		return $this->db->insert('role', $data);
	}

	// adding new problem accepts form data
	public function newproblem($data){
		return $this->db->insert('solution', $data);
	}
	  
	  // updating profile accepts form data and user id
	public function updateprofile($data, $id)
	{
		$this->db->where('user_id', $id);
		$this->db->update('user', $data);
	}

	// getting user profile data eith user id
	public function profile($id){
		$query = $this->db->where(['user_id' => $id])
						 ->get('user');
		 if($query->num_rows() > 0){
		 	return $query->row();
		 }
	}

	// showing all users
	public function showalluser(){
		$this->db->select('*');
		$this->db->from('user');
		$this->db->where('del', '0');
		$this->db->order_by("user_id", "ASC");
		$query = $this->db->get();
		return $query->result();
	}

	// showing all equipment
	public function showallequipment(){
		$this->db->select('*');
		$this->db->from('equipment');
		$this->db->where('del', '0');
		$this->db->order_by("equipment_id", "ASC");
		$query = $this->db->get();
		return $query->result();
	}

	// showing all department
	public function showalldepartment(){
		$this->db->select('*');
		$this->db->from('department');
		$this->db->where('del', '0');
		$this->db->order_by("dep_id", "ASC");
		$query = $this->db->get();
		return $query->result();
	}

	// showing all roles
	public function showroles(){
		$this->db->select('*');
		$this->db->from('role');
		$this->db->where('del', '0');
		$this->db->order_by("role_id", "ASC");
		$query = $this->db->get();
		return $query->result();
	}

	// showing all problems
	public function showallsolution(){
		$this->db->select('*');
		$this->db->from('solution');
		$this->db->order_by("s_id", "ASC");
		$query = $this->db->get();
		return $query->result();
	}

	//showing problem type
	public function showallptype(){
		$this->db->select('*');
		$this->db->from('p_type');
		$query = $this->db->get();
		return $query->result();
	}

	//deleting user using user id
	public function userdel($id)
	{
		$this->db->set('del', '1');
		$this->db->where('user_id', $id);
		$this->db->update('user');
	}

	//deleting equipment using equipment data
	public function equipmentdel($id)
	{
		$this->db->set('del', '1');
		$this->db->where('equipment_id', $id);
		$this->db->update('equipment');
	}

	//deleting department using department id
	public function departmentdel($id)
	{
		$this->db->set('del', '1');
		$this->db->where('dep_id', $id);
		$this->db->update('department');
	}

	//deleting roles using role id
	public function roledel($id)
	{
		$this->db->set('del', '1');
		$this->db->where('role_id', $id);
		$this->db->update('role');
	}

	//reseting password with form data and user id
	public function passwordreset($data, $id)
	{
		$this->db->set('password', $data);
		$this->db->where('user_id', $id);
		$this->db->update('user');
	}

	//getting user password with user id
	public function password($id){
		$query = $this->db->select('password')
						  ->where(['user_id' => $id])
						  ->get('user');
		 if($query->num_rows() > 0){
		 	return $query->row();
		 }
	}

	//changing password accepts form data and user id
	public function changepassword($data, $id)
	{
		$this->db->set('password', $data);
		$this->db->where('user_id', $id);
		$this->db->update('user');
	}
}
?>