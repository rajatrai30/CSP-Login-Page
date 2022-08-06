// import React, {useState, useEffect} from 'react';
// function Sample() {
//   const [name,setName] = useState("Jack")
//   const [age,setAge] = useState(20)
//   useEffect(()=>{
//     console.log("use Effect called")
//   })
//   return (
//     <div>
//       <h1>Your Name is: {name}</h1><br/>
//       <h1>Your Age is: {age} </h1><br/>
//       <button onClick={()=>setName("Jill")}>Change Name</button>
//       <button onClick={()=>setAge(age+1)}>Change Age</button>
//     </div>
//   );
// }
// export default Sample;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// const Employees = () => {
//              const [employees,setEmployees] = useState([
//              ])
//              const addEmployee = () => {
//                 setEmployees([...employees, { empId:6789, name: 'Sam', designation:'TL' }]);
//               };
//               useEffect(() => {
//                 axios.get('employees.json')
//                 .then(result => 
//                    setEmployees(result.data)
//                 )
//               },[]);
         
//             return (<React.Fragment>
//                     <table style={{width:'60%'}} className='table'>
//                          <thead className="thead-light">
//                              <tr>
//                                   <th>EmpID</th>
//                                   <th>Name</th>
//                                   <th>Designation</th>
//                              </tr>
//                          </thead>
//                          <tbody>
//                               {employees.map(employee => {
//                                      return (<tr>
//                                              <td>{employee.empId}</td>
//                                              <td>{employee.name}</td>
//                                              <td>{employee.designation}</td>
//                                      </tr>)
//                              })
//                              }
//                          </tbody>
//                     </table>
//                     <button onClick={addEmployee}>Add an Employee</button>
//             </React.Fragment>)  
// }
// export default Employees;
