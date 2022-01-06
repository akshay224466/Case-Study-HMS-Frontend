import { BorderOuterOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import StaffService from './StaffService'
import "./StaffList.css";
import OwnerSidebarComponent from './OwnerSidebarComponent';



export default class StaffList extends Component {
    constructor(props){
        super(props)

        this.state= {
            staffs: []
        }

       
        this.addStaff = this.addStaff.bind(this);
        this.deleteStaff=this.deleteStaff.bind(this);
    }

    componentDidMount(){
       StaffService.getStaff().then((res)=>{
           this.setState({staffs:res.data.allEmp});
             
        });
    }
    addStaff(){
        this.props.history.push('/add-staff');
    
}

    deleteStaff(Id){
        StaffService.deleteStaff(Id).then( res => {
             this.setState({staffs: this.state.staffs.filter(staff => staff.empId !== Id)});
         });
         }


         
    render() {
        return (
            <div className='staff'>

                <OwnerSidebarComponent/>
                <div className='content'><br/>

                    <h2  className="text-center">Staff Details</h2>
                    <div>
                        <button className='btn btn-dark' onClick={this.addStaff}>Add Staff</button>
                    </div>
                   
                    <br />
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead className='table__header'>
                                <tr>
                                    <th>Staff Id</th>
                                    <th>Staff DepartmentId</th>
                                    <th>Staff Name</th>
                                    <th>Staff DepartmentName</th>
                                    <th>Staff Email</th>
                                    <th>Staff Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    this.state.staffs.map(
                                        staff => 
                                        <tr key={staff.empId}>
                                             <td>{staff.empId}</td>
                                            <td>{staff.empDeptId}</td>
                                            <td>{staff.empName}</td>
                                            <td>{staff.empDeptName}</td>
                                            <td>{staff.email}</td>
                                            <td>{staff.empSalary}</td>
                                            <td>
                                           
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteStaff(staff.empId)} className="btn btn-danger">Delete </button>
                                               
                                                </td>
                                        </tr>
                                    )
                                }
                            </tbody>


                        </table>
                    </div>

                </div>

            </div>
        )
    }
}