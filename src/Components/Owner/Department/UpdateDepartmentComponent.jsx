import React, { Component } from 'react';
import DepartmentService from './Service/DepartmentService';

 class UpdateDepartmentComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            departmentId:this.props.match.params.Id,
            departmentName: '',
            desc:'',
            no_of_Emp:''     
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changenoofEmpHandler = this.changenoofEmpHandler.bind(this);
        this.changeDescHandler = this.changeDescHandler.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
    }

    componentDidMount(){
       DepartmentService.getDepartmentById(this.state.departmentId).then( res=>{
            let department= res.data;
            console.log(department);
            this.setState({departmentName: department.departmentName,
                desc:department.desc,
               no_of_Emp : department.no_of_Emp
            });
        });
    }





    updateDepartment= (event) => {
        event.preventDefault();
        let department = {departmentID:this.state.departmentId, departmentName:this.state.departmentName, no_of_Emp:parseInt(this.state.no_of_Emp) ,desc:this.state.desc};
        console.log('department => ' + JSON.stringify(department));

        DepartmentService.updateDepartment(this.state.departmentId,department).then( res=> {
            this.props.history.push('/owner/department');
        });
    }

    changeIdHandler= (event) => {
        this.setState({departmentId: event.target.value});
    }

    changeNameHandler=(event) => {
        this.setState({departmentName: event.target.value});
    }

    changenoofEmpHandler=(event) => {
        this.setState({no_of_Emp: event.target.value});
    }
    
    changeDescHandler=(event) => {
        this.setState({desc: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Department</h3>
                            <div className='card-body'>


                                <form action="">
                                        <div className = "form-group">
                                            <label> Department Id: </label>
                                            <input placeholder="Department Id" name="departmentId" className="form-control" 
                                                value={this.state.departmentId} onChange={this.changeIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Department Name: </label>
                                            <input placeholder="Department Name" name="departmentName" className="form-control" 
                                                value={this.state.departmentName} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number Of Employee: </label>
                                            <input placeholder="Number" name="no_of_Emp" className="form-control" 
                                                value={this.state.no_of_Emp} onChange={this.changenoofEmpHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="desc" className="form-control" 
                                                value={this.state.desc} onChange={this.changeDescHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateDepartment}>Save</button>
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
export default UpdateDepartmentComponent ;