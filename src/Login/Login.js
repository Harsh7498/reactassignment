import React from 'react';
import PropTypes from 'prop-types';
//import { LoginWrapper } from './Login.styled';
import {InputText} from 'primereact';
import Form from "react-bootstrap/Form";
import "./Login.css";
import Button from "react-bootstrap/Button";
class Login extends React.Component
{

   
validateForm() {

    return this.state.email.length > 0 && this.state.password.length > 0;

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

             <Form onSubmit={this.handleSubmit}>

                <Form.Group size="md" controlId="email">

                   <Form.Label>Email</Form.Label>

                   <Form.Control

                      autoFocus

                      type="email"

                      value={this.state.email}

                      onChange={(e) => this.setState({email:e.target.value})}

                   />

                </Form.Group>

                <Form.Group size="lg" controlId="password">

                   <Form.Label>Password</Form.Label>

                   <Form.Control

                      type="password"

                      value={this.state.password}

                      onChange={(e) => this.setState({password:e.target.value})}

                   />

                </Form.Group>

                <Button block size="lg" variant="custom" type="submit"  disabled={!this.validateForm()}>

                   Login

                </Button>
                <div class="mt-2">
                <span >Don't have an Account? <a href="/signup">SignUp</a></span>
                </div>
             </Form>

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
   password:String
}
}
}
export default Login;