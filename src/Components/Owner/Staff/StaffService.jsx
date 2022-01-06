import axios from 'axios';

const Staff_API_URL="http://localhost:8088/Staff/getAllEmp";
const  Staff_Add_API_URL="http://localhost:8088/Staff/addEmp";
const  Staff_GetById_API_URL="http://localhost:8088/Staff/getByEmp";
const  Staff_Delete_API_URL="http://localhost:8088/Staff/deleteByEmp";


class StaffService{
    getStaff(){
        return axios.get(Staff_API_URL);
    }

    addStaff(Staff){
        return axios.post(Staff_Add_API_URL,Staff);
    }

   
   
    getStaffById(empId){
        return axios.get(Staff_GetById_API_URL+ '/' + empId);
    }
    

   

    deleteStaff(empId){
        return axios.delete(Staff_Delete_API_URL + '/' +empId);
    }

}

export default new StaffService ()