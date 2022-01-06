// import { Email } from '@mui/icons-material'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
// import "../moduleCSS/form.css"
import "./Signup.css";

class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             mobileNumber:'',
             gender:'',
             email:'',
         
             usernameError:'',
             passwordError:'',
             mobileNumberError:'',
             genderError:'',
             emailError:'',
             isProfile: false
        }
        this.register=this.register.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    valid(){
        if(this.state.username.length<4 && this.state.password.length<6 && this.state.mobileNumber.length<10 ) {
            this.setState({
                usernameError:"Invalid UserName",
                passwordError:"Invalid Password", 
                mobileNumberError:"Invalid Mobile Number"

            })
        }
        else if(this.state.username.length<4){
            this.setState({
                usernameError:"Invalid UserName"})
        }
        else if(this.state.email.length<6){
          this.setState({
              emailError:"Invalid Email "
          })}
        else if(this.state.password.length<6){
            this.setState({
                passwordError:"Invalid Password"
            })
        }
        else if(this.state.mobileNumber.length<10){
            this.setState({
                mobileNumberError:"Invalid Mobile Number"
            })
        }
        else{
            return true
        }
    }
    register(e){
        this.setState({
            usernameError:"",
            passwordError:"",
            mobileNumberError:"",
            emailError:""
            
          

        })
        e.preventDefault()
        
        if(this.valid()){
            fetch("http://localhost:8081/subs",{
                "method":"POST",
                "headers":{
                    "content-type":"application/json",
                    "accept":"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                "body": JSON.stringify({
                    username: this.state.username,
                    email:this.state.email,
                    password:this.state.password,
                    mobileNumber: this.state.mobileNumber,
                    gender: this.state.gender
                })
            })
            .then(response=> response.json())
            .then(response=>{
                alert("You have been Registered Successfully")
                this.props.history.push(`/`);
            })
            
            .catch(err=>{
                alert("Your Registration Failed..!!!!")
            })
            
        }
    }
    handleChange(changeObject){
        this.setState(changeObject)
    }
    render() {
        return (
            <div className='bg'>
            <section className="vh-200 bg-image" >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
            <h2 className="card-header info-color white-text text-center py-4" >
                                    <strong style={{color:"black",fontFamily: "Monospace"}}>
                                        {" "}
                                        Registered Here{" "}
                                    </strong>
                                </h2>
                                <br/>
              <form>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example1cg" style={{ fontFamily: "Monospace"}}><strong>Your Name</strong></label>
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={(e)=>this.handleChange({username: e.target.value})}/>
                  <p style={{color:'red'}}>{this.state.usernameError}</p>
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3cg" style={{ fontFamily: "Monospace"}}><strong>Your Email</strong></label>
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" 
                  onChange={(e)=> this.handleChange({
                      email: e.target.value 
                  })}
                  />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example4cg" style={{ fontFamily: "Monospace"}}><strong>Your Password</strong></label>
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" 
                  onChange={(e)=> this.handleChange({
                      password: e.target.value
                  })}
                  />
                  <p style={{color:'red'}}>{this.state.passwordError}</p>
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example4cdg" style={{ fontFamily: "Monospace"}}><strong>Your Mobile Number</strong></label>
                  <input type="tel" id="form3Example4cdg" className="form-control form-control-lg" 
                  onChange={(e)=>this.handleChange({
                      mobileNumber: e.target.value
                  })}
                  />
                   <p style={{color:'red'}}>{this.state.mobileNumberError}</p>
                  
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example4cdg" style={{ fontFamily: "Monospace"}}><strong>Gender</strong></label>
                  <input type="tel" id="form3Example4cdg" className="form-control form-control-lg" 
                  onChange={(e)=>this.handleChange({
                      gender: e.target.value
                  })}
                  />
                   <p style={{color:'red'}}>{this.state.genderError}</p>
                  
                </div>

                {/* <div className="form-check d-flex justify-content-center mb-5">
                  {/* <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  /> */}
                  {/* <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label> */}
                

                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-info btn-block btn-lg gradient-custom-4 text-body" onClick={(e)=>this.register(e)} style={{width:500, fontFamily: "Monospace",height:"-10px"}}><strong>Register</strong></button>
                </div>

                <p className="text-center text-muted mt-5 mb-0 bg-light">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
           
        
    );}
}

export default SignUp
