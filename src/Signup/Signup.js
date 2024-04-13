import React from 'react';
import PropTypes from 'prop-types';
//import { LoginWrapper } from './Login.styled';
import {InputText} from 'primereact';
import Form from "react-bootstrap/Form";
import "./Signup.css";
import Button from "react-bootstrap/Button";
class Signup extends React.Component
{

   
validateForm() {

    return this.state.email.length > 0 && this.state.phone.length > 0;

  }

 handleSubmit(event) {

    event.preventDefault();

  }
render() {
 return(
    <form>
      {/* <div class="row">
         <div class="col-sm-2">
         <label htmlFor="username">Username</label>
            <InputText id="username" type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></InputText>
         </div>
      </div> */
          <div className="Login ">

<form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          
          <input
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        
        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone No"
          />
        <button  className=" mt-1 btn btn-primary">
            SEND OTP
          </button>
          
        
        </div>
        <p className="forgot-password text-right">
          Didn't Receive It <a href="/login">Resend?</a>
        </p>
        <div className="mb-3">
          
          <input
            type="text"
            className="form-control"
            placeholder="OTP"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>

          </div>
      }
    </form>
 );
}
constructor(props)
{
   super(props);
this.state={
   email:String,
   name:String,
   phone:Number,
}
}
}
export default Signup;