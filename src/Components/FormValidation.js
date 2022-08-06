// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class FormValidation extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             email:'',
//             password:'',
//             message:'',
//             textStyle:''
//         }
//     }
    
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]:e.target.value,
//         message:''})
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const validateEmail = (email) => {
//             var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
//             return re.test(email);
//         }
//         if(this.state.email =='' || this.state.password==''){
//             this.setState({message:"All fields are mandatory", textStyle:"danger"})
//         } 
//         else {
//             if(validateEmail(this.state.email)){
//                 this.setState({message:"Looks good!",
//                 textStyle:"success"
//                 })
//             }
//             else {
//                 this.setState({message:"Please enter a valid email id",
//                 textStyle:"danger"
//             })
//         }
//     }  
// }
//     render(){
//         return(
//             <React.Fragment>
//                 <br/>
//                 <form style={{position:'relative',left:'50px'}} onSubmit={this.handleSubmit}>
//                     <h3>Login</h3><br/>
//                     <div className="form-group">
//                         <label>Email:</label>
//                         <input style={{width:'40%'}} className="form-control" name="email" type="text" onChange={this.handleChange}/>
//                     </div>
//                     <div className="form-group">
//                         <label>Password:</label>
//                         <input style={{width:'40%'}} className="form-control" name="password" type="password" onChange={this.handleChange}/>
//                     </div>
//                     {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br/>
//                     <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
//                 </form>
//             </React.Fragment>
//         )
//     }
// }
// export default FormValidation;
