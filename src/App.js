import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FilterDetails from './Components/FilterDetails.js';
// import DefectDetails from './Components/DefectDetails.js';
// import Button from 'react-bootstrap/Button';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Rater from './Rater.jsx';
import './css/style.css'
// import logo from './images/r.png';

import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import PurchasedItems from "./Components/PurchasedItems";
import ProductDetails from "./Components/ProductDetails";
import { Provider } from 'react-redux';
import { initStore } from './Stores/Store';
const store = initStore();
class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
              <React.Fragment>
                  <Route path='/' component={LoginForm} exact />
                  <Route path='/purchasedItems' component={PurchasedItems} />
                  <Route path='/productDetails/:id' component={ProductDetails} />
              </React.Fragment>
          </BrowserRouter>
        </Provider>
      )
    }
}
export default App;


// class App extends React.Component { 
//     render() {
//         return React.createElement("h1", {}, "Hello World!!!");

//     }
// }


// class App extends React.Component{
//     render(){
//       return(
//         <form><h2>LOGIN</h2>
//               <input type='text' placeholder='Name'/><br/><br/>
//               <input type='password' placeholder='Password'/><br/><br/>
//               <input type="submit" nvalue="log" />    
//         </form>)
//     }
// };





//   HIGHLIGHTS TO RENDER MULTIPLE ELEMENTS USING SINGLE COMPONENT
// class App extends React.Component {
//   render(){
//            return  <React.Fragment>
//                        <h3>ReactJS:</h3>
//                        {/* <img src={logo} width="720" height="120" alt='react-logo'/> */}
//                        <p> React is a JavaScript library for creating User Interfaces, open sourced to the world     by Facebook and  Instagram team in 2013.<br/>
//                         React’s main goal is to make development of UI components easy and modular.
//                         It is intended to ease the process of building<br/> large applications using
//                   data that changes over time.</p>
//                    </React.Fragment>
                  
//         }
// }
// export default App;





//JAVASCRIPT EXPRESSIONS IN JSX
//Accessing a variable:
// class App extends React.Component {
//   render() {
//           let count = 5
//           return(<React.Fragment>
//                  <h1>{count}</h1> 
//                  <h2>{count*count}</h2>
//           </React.Fragment>)
//   }
// }
// export default App;

//Accessing an object: 
// class App extends React.Component {
//   render() {
//           let name = {
//                   firstName: 'Rajat',
//                   lastName: 'rai'
//           }
//           let classdiv ={
//                   class: 'SE_B',
//                   div: 'b_computer'
//           }
//           return(<React.Fragment>
//                  <h1>{name.firstName} {name.lastName}</h1> 
//                  <h2>{classdiv.class} {classdiv.div}</h2>
//           </React.Fragment>)
//   }
// }
// export default App;

//Specifying attributes' expression: 
// class App extends React.Component {
//   render() {
//           let highlight = {
//                   color: 'green',backgroundColor:'grey',
//            }
//           return(<React.Fragment>
//                  <h1 style={highlight}>Welcome to React</h1> 
//           </React.Fragment>)
//   }
// }
// export default App;


//Modify AppComp component as shown below:
// class App extends React.Component {
//         render() {
//           var x=100, y=50
//           return (<div>                
//                       <h2> Evaluating expression </h2>
//                       <h3> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'} </h3>
//                       <h3>ADDITION : {x+y}</h3>
//                       <h3>SUBTRACTION : {x-y}</h3>
//                       <h3>MULTIPLICATION : {x*y}</h3>
//                       <h3>DIVISION : {x/y}</h3>
//                       <h3>MODULUS : {x%y}</h3>
//                       <h3>INCREMENT : {++x}</h3>
//                   </div>)
//         }
// }
// export default App;


//CONDITIONAL RENDERING
// class App extends React.Component { 
//         render() {
//                 let isLoggedIn = true
//                 if(isLoggedIn) {
//                         return <h2>Welcome Admin</h2>
//                  }
//                 else{
//                          return <h2>Please Login</h2>
//                 }    
//         }
//  }
//  export default App;

// class App extends React.Component {      
//         render() {
//                 let element = null;
//                 let isLoggedIn = false
//                 if(isLoggedIn) {
//                         element = <h2>Welcome Admin</h2>
//                  }
//                 else {
//                          element = <h2>Please Login</h2>
//                 }  
//                 return (<React.Fragment>
//                         {element}
//                 </React.Fragment>)  
//         }
//  }
//  export default App;
 
// class App extends React.Component {
//         render() {
//                 let element = null;
//                 let isLoggedIn = true
//                 isLoggedIn ? element = <h2>Welcome Admin</h2> : element = <h2>Please Login</h2>
//                 return (<React.Fragment>
//                         {element}
//                 </React.Fragment>)  
//         }
//  }
// export default App;


//LOOP USING MAP() METHOD
// class App extends React.Component {
//         render() {
//                  var employees = [
//                    { empId: 1234, name: 'John', designation:'SE' },
//                    { empId: 4567, name: 'Tom', designation:'SSE'},
//                    { empId: 8910, name: 'Kevin',designation:'TA'}
//                  ]
                
//                 return (<React.Fragment>
//                         <table style={{width:'60%'}} className='table'>
//                              <thead className="thead-light">
//                                  <tr>
//                                       <th>EmpID</th>
//                                       <th>Name</th>
//                                       <th>Designation</th>
//                                  </tr>
//                              </thead>
//                              <tbody>
//                                   {employees.map(employee => {
//                                          return (<tr key={employee.empId}>
//                                                  <td>{employee.empId}</td>
//                                                  <td>{employee.name}</td>
//                                                  <td>{employee.designation}</td>
//                                          </tr>)
//                                  })
//                                  }
//                              </tbody>
//                         </table>
//                 </React.Fragment>)  
//         }
//  }
//  export default App;
 
// class App extends React.Component {
//         render() {
//                  var employees = [
//                    { empId: 1234, name: 'Jack', designation:'SE', salary:23000},
//                    { empId: 4567, name: 'Johnson', designation:'SSE', salary:15000},
//                    { empId: 8910, name: 'Sachin',designation:'TA', salary:30000}
//                  ]
                
//                 return (<React.Fragment>
//                         <table style={{width:'60%'}} className='table'>
//                              <thead className="thead-light">
//                                  <tr>
//                                       <th>EmpID</th>
//                                       <th>Name</th>
//                                       <th>Designation</th>
//                                  </tr>
//                              </thead>
//                              <tbody>
//                                   {employees.map(employee => {
//                                         return employee.salary > 15000 ? (<tr key={employee.empId}>
//                                                  <td>{employee.empId}</td>
//                                                  <td>{employee.name}</td>
//                                                  <td>{employee.designation}</td>
//                                          </tr>) : null
//                                  }) 
//                                  }
//                              </tbody>
//                         </table>
//                 </React.Fragment>)  
//         }
//  }
// export default App;
 
// class AppComp extends React.Component {

//         render(){
//                  var names=['Ember', 'BackboneJS', 'ReactJS', 'Jasmine'];
//                  return <div>Hello, { names } </div>
//                 }
//   }
// export default AppComp;

//CREATING PRODUCT AND STAR RATER FACILITY
// class Product extends React.Component{
// render(){
//         return(
//                 <div>
//                         <div className={"thumbnail"} style={{textAlign: 'center'}}>
//                                         <img src='Images/laptop.jpg' class="img img-rounded img-responsive" alt=''/>
//                                 <div class="caption">
//                                         <a href={'/productDetails'}> <h3>Gamia Laptop</h3></a>
//                                         <h4><span style={{color: 'red'}}>Rs. 33000</span></h4>
//                                         <p>An excellent choice for an awesome gaming experience.</p>
//                                         <Rater />
//                                         <span style={{fontSize: '9px'}}>3/5</span>
//                                 </div>
//                         </div>
//                 </div>
//                 )
//         }
// }
// export default Product;
//CREATING PRODUCT AND STAR RATER FACILITY


//DEFECT TRACKER APPLICATION
// class ViewDefect extends React.Component{
//         render(){
//                 return(
//                         <div>
//                                 <div className={"thumbnail"} style={{textAlign: 'center'}}>
//                                                 <h2 class='newhead'>DEFECT TRACKER</h2>
//                                                 <a href={'/productDetails'}> <h5 className='tags'>Logout</h5></a>
//                                                 <div className='DefectTags'>
//                                                         <a href={'/productDetails'} className='Downtags'><h5 className='tags'>Add Defects</h5></a>
//                                                         <a href={'/productDetails'} className='Downtags'><h5 className='tags'>View Defects</h5></a>
//                                                 </div> 
//                                                 <FilterDetails/>
//                                                 <DefectDetails/>

        
//                                 </div>
//                         </div>
//                         )
//                 }
//         }
// export default ViewDefect;



//PRACTICE EXERCISE 0
// class ViewDefect extends React.Component{
//         render(){
//                 return(
//                         <div>
//                                 <div className={"thumbnail"} style={{textAlign: 'center'}}>
//                                                 <h1 class='newhead'>DEFECT TRACKER</h1> 
//                                                 <Button variant="warning"> Click here </Button>
//                                                 <button className="button">Submit</button>
//                                                 <button className="btn btn-success">Submit</button>
//                                                 <Typography variant="h4" gutterBottom>Welcome to React</Typography>
//                                                 <a href={'/productDetails'}> <h5>Add Defects</h5></a>
//                                                 <a href={'/productDetails'} style={{display:'flex'}}> <h5>View Defects</h5></a>
//                                                 <img src='Images/laptop.jpg' class="img img-rounded img-responsive" alt=''/>
//                                 </div>
//                         </div>
//                         )
//                 }
//         }
// export default ViewDefect;


//PRACTICE EXERCISE 1 (STYLING COMPONENTS)
// class AppComp extends React.Component {
//        render() {
//                return(<React.Fragment>
//                        <h1 style={{color:'green',fontFamily:'verdana'}}>Welcome to React</h1>
//                        <button className="button">Submit</button>
//                </React.Fragment>)
//        }
// }
// export default AppComp;

//PRACTICE EXERCISE 2 (STYLING COMPONENTS)
// class AppComp extends React.Component {
//        render() {
//                return(<React.Fragment>
//                        <h1>Welcome to React</h1>
//                        <button className="btn btn-success">Submit</button>
//                </React.Fragment>)
//        }
// }
// export default AppComp;

//PRACTICE EXERCISE 3 (STYLING COMPONENTS)
// class AppComp extends React.Component {
//        render() {
//                return(<React.Fragment>
//                        <h1>Welcome to React</h1>
//                        <Button variant="success">Submit</Button>
//                </React.Fragment>)
//        }
// }
// export default AppComp;

//PRACTICE EXERCISE 4 (STYLING COMPONENTS)
// class AppComp extends React.Component {
//        render() {
//                return(<React.Fragment>
//                        <Typography variant="h4" gutterBottom>
//                                 Welcome to React</Typography>
//                        <Button variant="contained" color="primary">Submit</Button>
//                </React.Fragment>)
//        }
// }
// export default AppComp;


// PROS AND STATE IN REACT
// class Timer extends React.Component {
//         constructor() {
//             super ()
//             this.state = {
//                 counter: 0
//             }
//         }
//         handleClick = (e) => {
//             this.setState({counter:this.state.counter+1})
//         }
//         render() {
//             return(<React.Fragment>
//                 <h2> Seconds Elapsed: {this.state.counter} </h2>
//                 <button onClick = {this.handleClick}> Increment Counter </button>
//             </React.Fragment>)
//         }
//     }
// export default Timer;

// ASYNCRONOUS STATE IN REACT
// class App extends React.Component {
//         constructor() {
//                 super()
//                 this.state = {
//                         quantity: 0,
//                         price:0
//                 }
//         }
//         update = () => {
//                 this.setState({quantity:5},()=>{
//                         if(this.state.quantity == 5) {
//                                 this.setState({price:2000-100})
//                         }
//                 })
//         }

//         render() {
//                return(<React.Fragment>
//                         <h1>{this.state.quantity}</h1>
//                         <h1>{this.state.price}</h1>
//                         <button onClick={this.update}>Update</button>
//                 </React.Fragment>)}
               
// }
// export default App;

//ONGOING TIME STATE
// class Timer extends React.Component {
//         constructor() {
//             super();
//             this.state = {
//                 secondsElapsed: 0
//             };
//         }
//         start = () => {
//             this.setState({
//                 secondsElapsed: this.state.secondsElapsed + 1
//             });
//         }
//         handleClick = (e) => {
//             this.interval = setInterval(this.start, 1000);
//         }
//         render() {
//             return ( <React.Fragment><br/><br/>
//                 <button onClick = {this.handleClick}>Start timer</button><br/><br/>
//                 <h2> Seconds Elapsed: 
//                     {this.state.secondsElapsed} 
//                 </h2> 
//                 </React.Fragment>);
//             }
//         }
// export default Timer;

// Key points to be remembered while handling data in a component:
// States are mutable and only used on top level component
// They are reserved only for interactivity and component's event handlers may change to trigger a UI update
// The state will be set with a default value when component mounts and will mutate in 
// time based on user events generated
// When we want to pass any data from one component to another component, it is passed as a prop.
// Props allow us to pass data from one component to another component
// Props are immutable - a component cannot change its props however it is responsible for putting together
// Props can be accessed as this.props


// import Child from './Components/Child';
// class App extends React.Component {
//         constructor() {
//           super()
//           this.state = {
//             name: 'John'
//           }
//         }
//         update = (value) => {
//          let newValue = value;
//          this.setState({name:newValue})
//         }
//         render() {
//           return ( <React.Fragment>
//             <h1>{this.state.name}</h1><br/><br/>
//             <Child nameValue={this.state.name} update={this.update}/>
//           </React.Fragment>)
//         }
//       }
// export default App;


// Component using FUNCTIONAL COMPONENT
// import React from 'react';
// class Timer extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//         secondsElapsed: 0
//         };
//     }
//     start = () => {
//         this.setState({
//             secondsElapsed: this.state.secondsElapsed + 1
//         });
//     }
//     handleClick = (e) => {
//         this.interval = setInterval(this.start, 1000);
//     }
//     render() {
//         return (<React.Fragment>
//                 <button onClick = {this.handleClick}> 
//                     Start Timer 
//                 </button> 
//                 <Resultant new = {this.state.secondsElapsed}/> 
//             </React.Fragment>);
//     }
// }
// function Resultant(data) {
//             return ( <h2> 
//                 Seconds Elapsed: {data.new} 
//             </h2>
//         )
// }
// export default Timer;

//CREATING CHILD NODES FROM A PARENT COMPONENT
// var count = 1;
// class App extends React.Component {
//         render() {
//                 React.Children.map(this.props.children, () => {
//                         console.log('child', count++);
//                 });
//                 return ( <ul> 
//                                 {this.props.children} 
//                         </ul>)
//         }
// };
// export default App;

//PROPTYPES USED IN REACT
// import PropTypes from 'prop-types';
// class App extends React.Component {
//    render() {
//       return (
//          <React.Fragment>
//             <h3>Array: </h3> <p>{this.props.array}</p>
//             <h3>Boolean: </h3><p>{this.props.boolean ? "True" : "False"}</p>
//             <h3>Function: </h3><p>{this.props.function(10)}</p>
//             <h3>Number: </h3><p>{this.props.number}</p>
//             <h3>String: </h3><p>{this.props.string}</p>
//             <h3>Object: </h3><p>{this.props.emp.empName} <br/>
//                         {this.props.emp.empId}< br/>
//                         {this.props.emp.unit}</p>
//          </React.Fragment>
//       );
//    }
// }
// App.propTypes = {
//    array: PropTypes.array,
//    boolean: PropTypes.bool,
//    function: PropTypes.func,
//    number: PropTypes.number,
//    string: PropTypes.string,
//    emp: PropTypes.object
// }
// App.defaultProps = {
//    array: "John",
//    boolean: false,
//    function: function(e){return e},
//    number: 23,
//    string: "React",
	
//    emp: {
//          empName:"John",
//          empId: 123456,
//          unit: "Systems Engineer"
//         }
// }
// export default App;

//PROPTYPES USED IN REACT 2
// class App extends React.Component {
//     render() {
//       return(<React.Fragment>
//                   <h1> {this.props.element1} </h1>
//                   <h1> {this.props.element2} </h1>
//               </React.Fragment>);
//     }
// }
// export default App;

// App.defaultProps = {
//     element1 : "Hello",
// 	  element2 : "World",
// } 


// class ProductDetails extends React.Component{
//     constructor(props){
//         super(props)
// }
//     render(){
//     return <div>
// <Product pid={item._id}
//     price={item.pdtPrice}
// name={item.pdtName}
// key={item._id}
// desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued}/>
// </div>
// }
// }
// export default ProductDetails;





// INCREMENT DECREMENT EXAMPLE USING REACT
// import { connect } from 'react-redux';
// import Counter from './Components/Counter.js';
// import { CallIncrement,onDecrement } from './actions/Actions.js';
// var mapStateToProps = function(state){
//   return {
//     inCount:state.inReducer.inCount,
//     deCount:state.deReducer.deCount
//   };
// }
// var mapDispatchToProps = function(dispatch){
//   return {
//     onIncrement:(step)=>{
//       dispatch(CallIncrement(step))
//     },
//     onDecrement:(step)=>{
//       dispatch(onDecrement(step))
//     }
//   }
// }
// var App= connect(mapStateToProps,mapDispatchToProps)(Counter);
// export default App;
