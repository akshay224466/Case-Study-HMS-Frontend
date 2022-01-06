import axios from 'axios';

const Department_API_URL="http://localhost:8085/department/findAll";
const Department_Add_API_URL="http://localhost:8085/department/add";
const Department_Update_API_URL="http://localhost:8085/department/update";
const  Department_GetById_API_URL="http://localhost:8085/department/findById";
const  Department_Delete_API_URL="http://localhost:8085/department/delete";


class DepartmentService{
    getDepartment(){
        return axios.get(Department_API_URL);
    }

    addDepartment(department){
        return axios.post(Department_Add_API_URL,department);
    }
   
    getDepartmentById(departmentId){
        return axios.get(Department_GetById_API_URL+ '/' + departmentId);
    }
    

    updateDepartment(departmentId,department)
    {
        return axios.put(Department_Update_API_URL + '/' +departmentId,department);
    }

    deleteDepartment(departmentId){
        return axios.delete(Department_Delete_API_URL + '/' +departmentId);
    }

}

export default new DepartmentService ()