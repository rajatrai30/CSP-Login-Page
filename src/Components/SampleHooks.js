// import React, {useState} from 'react';

// function sample() {
//     const[name, setName] = useState("Jack")
//     return(
//         <div>
//             your name is : {name}
//             <button onClick={()=>setName("Jill")}>change the name</button>
//         </div>
//     );
// }
// export default sample



// ADD EMPLOYEE TABLE USING HOOKS IN REACT
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Employees = () => {
//              const [employees,setEmployees] = useState([
//                { empId: 1234, name: 'John', designation:'SE' },
//                { empId: 4567, name: 'Tom', designation:'SSE'},
//                { empId: 8910, name: 'Kevin',designation:'TA'}
//              ])
//              const addEmployee = () => {
//                 setEmployees([...employees, { empId:6789, name: 'Sam', designation:'TL' }]);
//               };
//             return (<>
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
//             </>)  
// }
// export default Employees;
