import { BorderOuterOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import DepartmentService from './Service/DepartmentService'
import "./Listdept.css";
import OwnerSidebarComponent from './OwnerSidebarComponent';

export default class Listdept extends Component {
    constructor(props){
        super(props)

        this.state= {
            departments: []
        }

        this.addDepartment = this.addDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.deleteDepartment=this.deleteDepartment.bind(this);
    }

    componentDidMount(){
        DepartmentService.getDepartment().then((res)=>{
           this.setState({departments:res.data.alldept});
             
        });
    }
    addDepartment(){
        this.props.history.push('/add-department');
    
}
editDepartment(Id){
    this.props.history.push(`/update-department/${Id}`);
}

deleteDepartment(Id){
   DepartmentService.deleteDepartment(Id).then( res => {
        this.setState({departments: this.state.departments.filter(department => department.departmentID !== Id)});
    });
    }


    render() {
        return (
            <div className='department'>

                <OwnerSidebarComponent/>
                <div className='content'><br/>

                    <h2  className="text-center">Department Details</h2>
                    <div>
                        <button className='btn btn-dark' onClick={this.addDepartment}>Add Department</button>
                    </div>
                    <br />
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead className='table__header'>
                                <tr>
                                    <th>Department id</th>
                                    <th>Department Name</th>
                                    <th>Department Description</th>
                                    <th>Number of Emp</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.departments.map(
                                        department => 
                                        <tr key={department.departmentID}>
                                            <td>{department.departmentID}</td>
                                            <td>{department.departmentName}</td>
                                            <td>{department.desc}</td>
                                            <td>{department.no_of_Emp}</td>
                                            <td>
                                                 <button onClick={ () => this.editDepartment(department.departmentID)} className="btn btn-primary">Update </button>
                                                <button style={{marginLeft: "10px"}}onClick={ () => this.deleteDepartment(department.departmentID)} className="btn btn-danger">Delete </button>
                                               
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
