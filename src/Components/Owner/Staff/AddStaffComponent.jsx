import React, { Component } from 'react'
import StaffService from './StaffService';

 class AddStaffComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            empId:'',
            empDeptId: '',
            empName:'',
            empDeptName:'',
            email:'',
            empSalary:''     
        }
        this.changeEmpIdHandler = this.changeEmpIdHandler.bind(this);
        this.changeEmpDeptIdHandler = this.changeEmpDeptIdHandler.bind(this);
        this.changeEmpNameHandler = this.changeEmpNameHandler.bind(this);
        this.changeEmpDeptNameHandler = this.changeEmpDeptNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeEmpSalaryHandler = this.changeEmpSalaryHandler.bind(this);
        this.saveOrUpdateStaff = this.saveOrUpdateStaff.bind(this);
    }

    saveOrUpdateStaff= (event) => {
        event.preventDefault();
        let Staff = {empId:parseInt(this.state.empId), empDeptId:parseInt(this.state.empDeptId), empName:this.state.empName, empDeptName:this.state.empDeptName, email:this.state.email, empSalary:this.state.empSalary};
        console.log('staff => ' + JSON.stringify(Staff));

        StaffService.addStaff(Staff).then(res =>{
            this.props.history.push('/owner/staff');
        });

    }

    changeEmpIdHandler= (event) => {
        this.setState({empId: event.target.value});
    }

    changeEmpDeptIdHandler=(event) => {
        this.setState({empDeptId: event.target.value});
    }

    changeEmpNameHandler=(event) => {
        this.setState({empName: event.target.value});
    }
    changeEmpDeptNameHandler=(event) => {
        this.setState({empDeptName: event.target.value});
    }
    changeEmailHandler=(event) => {
        this.setState({email: event.target.value});
    }
    
    changeEmpSalaryHandler=(event) => {
        this.setState({empSalary: event.target.value});
    }

    cancel(){
        this.props.history.push('/owner/staff');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Staff</h3>
                            <div className='card-body'>


                                <form action="">
                                        <div className = "form-group">
                                            <label> Staff Id: </label>
                                            <input placeholder="Staff Id" name="empId" className="form-control" 
                                                value={this.state.empId} onChange={this.changeEmpIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Staff DepartmentId: </label>
                                            <input placeholder="Staff DepartmentId" name="empDeptId" className="form-control" 
                                                value={this.state.empDeptId} onChange={this.changeEmpDeptIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Staff Name: </label>
                                            <input placeholder="Staff Name" name="empName" className="form-control" 
                                                value={this.state.empName} onChange={this.changeEmpNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Staff DepartmentName: </label>
                                            <input placeholder="Staff DepartmentName" name="empDeptName" className="form-control" 
                                                value={this.state.empDeptName} onChange={this.changeEmpDeptNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Staff Email: </label>
                                            <input placeholder="Staff Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Staff Salary: </label>
                                            <input placeholder="Staff Salary" name="empSalary" className="form-control" 
                                                value={this.state.empSalary} onChange={this.changeEmpSalaryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStaff}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddStaffComponent