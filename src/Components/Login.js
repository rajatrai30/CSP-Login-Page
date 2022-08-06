import React from 'react';
import { Button, Form, Col, Row} from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router';
import { Login as LoginAction } from '../Actions/Action.js';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValid: false, username: "", password: "", authenticated: (!this.props.authState) ? '' : this.props.authState.isAuthenticated };
  }
  onFnf = () => {
    alert("This functionality is yet to be implemented.")
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      'username': this.state.username,
      'password': this.state.password
    };
    this.props.login(user);

  }
  
  componentDidMount() {
    if (!this.state.isValid) {
      document.body.style.background = "url('/Images/bg2.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
    }
  }

  render() {
     return (
     <div>
        {this.props.authState ?  <Redirect to="/purchasedItems" /> : 
      <div className="form-layout">
        <div className={"panel-heading"}>
          <div className="panel-heading-left">
            <h3>Sign up now</h3>
            <p>Get access to your orders and chat for support.</p>
          </div>
          <div className="panel-heading-right">
            <span className="glyphicon glyphicon-pencil"></span>
          </div>
        </div>
        <div id="divLogin" className={"bgImage panel-body"}>
          <Form horizontal="true" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formHorizontalUsername">
              <Col sm={12}>
                <Form.Control size="lg" value={this.state.username} name="username"
                  className="input-lg" onChange={this.handleUsernameChange} ref="username" type="text" placeholder="Enter Username" />
              </Col>
            </Form.Group>

            <Form.Group controlId="formHorizontalPassword">
              <Col sm={12}>
                <Form.Control size="lg" value={this.state.password} name="password"
                  className="input-lg" onChange={this.handlePasswordChange} ref="password" type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={4}>
                <Button className="ml1" variant="success" size="md" type="submit">
                  Sign in
                </Button>
              </Col>
              <Col sm={8}>
                <Button className="ml2" variant="link" size="sm" onClick={this.onFnf}>
                  Terms and Conditions
              </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
        </div> }
     </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    authState: state.login.isAuthed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(LoginAction(data))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));








// SAMPLE LOGIN FROM FOR PRACTICE
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Login extends React.Component {
//     render() {
//         return(<React.Fragment>
//             <form>
//                 <div className="form-group">
//                     <label for="name">Username:</label>
//                     <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
//                 </div>
//                 <div className="form-group">
//                     <label for="pwd">Password:</label>
//                     <input style={{width:'40%'}} type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" />
//                 </div>
//                <button type="submit" className="btn btn-primary">Login</button>
//            </form>
//         </React.Fragment>)
//     }
// }
// export default Login;



// SAMPLE LOGIN FROM FOR PRACTICE (INTERACTIVE FORM)
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Login extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { name: '', password: ''}
//     }
//     setEmpState = (e) => {
//           const value = e.target.value;
//             const field = e.target.name;
//            this.setState({[field]:value})
//     }
//     handleLogin = (e) => {
//         e.preventDefault();
//         alert('Logged in successfully');
//     }
//     render() {
//         return(<React.Fragment>
//             <form>
//                 <div className="form-group">
//                     <label>Username:</label>
//                     <input style={{width:'40%'}} type="text" className="form-control" value={this.state.name} id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input style={{width:'40%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
//                 </div>
//                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
//            </form>
//         </React.Fragment>)
//     }
// }
// export default Login;



//LOGIN FORMS USING REACT REFS
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Login extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { name: '', password: ''}
//         this.nameRef = React.createRef()
//         this.pwdRef = React.createRef()
//     }
//     handleLogin = (e) => {
//         e.preventDefault();
//         if(this.nameRef.current.value==="" && this.pwdRef.current.value==="") {
//             alert("Please enter username and password")
//         }
//         alert("Welcome " + this.nameRef.current.value);
//     }
//     render() {
//         return(<React.Fragment>
//             <form>
//                 <div className="form-group">
//                     <label>Username:</label>
//                     <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" ref={this.nameRef}/>
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter password" name="password" ref={this.pwdRef} />
//                 </div>
//                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
//            </form>
//         </React.Fragment>)
//     }
// }
// export default Login;


//LOGIN FORM DESIGNING USING REACT BOOTSTRAP
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// class Login extends React.Component {
//             render() {
//                       return (<div>
//                                    <Jumbotron>
//                                    <h2 style={{padding:"10px"}}>React Demo</h2>
//                                    </Jumbotron>
//                                    <Form style={{padding:"10px"}}>
//                                    <h2>Login</h2><br/>
//                                    <Form.Group>
//                                    <Form.Control type="text" style={{width:"30%"}}
//                                                 placeholder="Enter Name"
//                                                 />
//                                    </Form.Group><br/>
//                                    <Form.Group>
//                                    <Form.Control type="password" style={{width:"30%"}}
//                                                 placeholder="Enter Password"
//                                                 /><br/><br/>
//                                    </Form.Group>
//                                    <Form.Group >
//                                      <Form.Check type="checkbox" label="Remember me" />
//                                    </Form.Group>
//                                    <Button type="submit" variant="primary" size="sm" > Login 
//                                    </Button>
//                                    </Form>
//                              </div>);
//                    }
// }
// export default Login;



//LOGIN FORM STYLING USING REACT-BOOTSTRAP
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// class Login extends React.Component {
//       constructor(props){
//                           super(props);
//                           this.state = { isvalid: false, message:"" }
//                           this.handleLogin = this.handleLogin.bind(this);   
//                         };
     
//       handleLogin(event){
//           event.preventDefault();
//           const login = event.currentTarget;               
//           if (login.checkValidity() === false){
//               event.preventDefault();
//               event.stopPropagation();
//               this.setState({message:""})
//               }
//             else{
//                 this.setState({message:"Form submitted successfully!"})
//                 }
//             this.setState({ isvalid: true});
//           }
//       render(){
//            const { isvalid } = this.state;
//            return(<Form style={{backgroundColor:"#DCDCDC", width:"50%"}} 
//                         noValidate validated={isvalid}
//                         onSubmit={e => this.handleLogin(e)}>
//                        <div style={{padding:"10px"}}>
//                        <h1> Login </h1><br/>
//                        <Form.Group>
//                        <label> Name </label>
//                        <Form.Control type="text" style={{backgroundColor:"##C0C0C0"}} 
//                                      name="name" placeholder="Enter Name" ref="name"
//                                      required/> 
// 					   <Form.Control.Feedback type="invalid">
//                              UserName is required
//                        </Form.Control.Feedback>
//                       </Form.Group> 
//                       <br/>
//                       <Form.Group >
//                       <label> Password </label>
//                       <Form.Control type="password" style={{backgroundColor:"##C0C0C0"}} 
//                                     name="password" placeholder="Enter Password" 
//                                     required />
//                       <Form.Control.Feedback type="invalid">
//                             Password is required
//                       </Form.Control.Feedback>
//                       </Form.Group> 
//                       <br/>
//                      <Button type="submit"  variant="primary"> Login </Button>
//                      </div>                  
//                     {this.state.message!=="" && <Alert variant="success"> {this.state.message} </Alert>}
//                 </Form>);
// }
// }
// export default Login;


//LOGIN ADMIN FORM (HOMEWORK)
// import React from 'react';
// class Login extends React.Component{
//             constructor(props){
//                                        super(props);
//                                        this.state = {username:"",password:""};
//                                       }
//            handleUsernameChange = (e) => {
//                                    this.setState({username:e.target.value});
//                                   }
//   
//            handlePasswordChange = (e) => {
//                                    this.setState({password:e.target.value});
//                                   }
//            /* The state username and password can be set using a single method as shown in the login form demo */ 
//            handleSubmit = (event) => {
//                                event.preventDefault();
//                                //Login Logic goes here.
//                               }
//            componentDidMount(){
//                                document.body.style.background="url('Images/bg2.jpg') no-repeat center center fixed";
//                                document.body.style.backgroundSize="cover";
//                               }
//   
//            render(){
//                    return(<div className="form-layout">
//                               <div className={"panel-heading"}>
//                               <div className="panel-heading-left">
//                               <h3>Sign up now</h3>
//                               <p>Get access to your orders.</p>
//                               </div>
//                               <div className="panel-heading-right">
//                               <span className="glyphicon glyphicon-pencil"></span>
//                               </div>
//                               </div>
//                               <div id="divLogin" className={"bgImage panel-body"}>
//                               <form onSubmit={this.handleSubmit}>
//                                     Username:
//                                           <input type="text" required
//                                             onChange={this.handleUsernameChange}/>
//                                     Password:
//                                     <input type="text" required
//                                             onChange={this.handlePasswordChange}/>
//                              <button type="button">Sign in</button>
//                              <a href="#" block onClick={this.onFnf}>
//                                 Terms and Conditions
//                              </a>
//                              </form>
//                              </div>
//                         </div>);
//                   }
// }
// export default Login;
