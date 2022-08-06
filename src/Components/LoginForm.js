import React from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <a href="/" style={{ "paddingLeft": "15px" }}><img alt="csp1" width="auto" height="75px" src="/images/csp1.png" /></a>
        </div>
        <div className="jumbotron" style={{ "opacity": "0.85" }}>
          <div className="container">
            <h1>My Sample Service Portal</h1>
            <p>Your one point contact for issues related to the purchased products.</p>
          </div>
        </div>
        <div className="container" id="wrap">
          <div className={"row bgClass"} style={{ "marginTop": "15px", "marginBottom": "45px" }}>
            <div className={"col-lg-5 offset-lg-7"}>
              <Login history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm;


//LOGIN FORM AND AUTHENTICATION USNG ROUTE PARAMETER 
// import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.min.css'
// class Login extends React.Component {
//     constructor(){
//         super();
//         this.state = { name: '', password: ''}
//         this.nameRef = React.createRef()
//         this.pwdRef = React.createRef()
//     }           
//     handleLogin = (e) => {
//         e.preventDefault();
//         if((this.nameRef.current.value=="") || (this.pwdRef.current.value==""))
// 		{ 
//             alert("Please enter details"); 
//         }
//         else
//         { 
//             this.props.history.replace('/home/'+this.nameRef.current.value); 
//         }
//     }
//     render(){
//         return (<React.Fragment>
//                     <form onSubmit={this.handleLogin}>
//                         <br/><h2>Login</h2><br/>
//                         <div className="form-group">
//                             <label>Username:</label>
//                             <input type = "text" 
//                             style={{width:'40%'}}className="form-control" ref={this.nameRef} name="name" 
// 				            placeholder = "UserName" 
// 				        /><br/><br/>
//                         </div>
//                         <div className="form-group">
//                             <label>Password:</label>
//                             <input type = "password" 
//                             name="password" 
//                             style={{width:'40%'}}
//                             ref={this.pwdRef}className="form-control"
//                             placeholder = "Password"
//                         /><br/><br/>
//                         </div>
//                         <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>	
//                     </form>
//                 </React.Fragment>);
//                }
// }
// export default Login;
