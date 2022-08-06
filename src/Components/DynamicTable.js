// import React, { useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AddEmployee from './AddEmployee';
// const Employees = () => {
//         const [employees, setEmployees] = useState([
//                 { empId: 1234, name: 'John', designation: 'SE' },
//                 { empId: 4567, name: 'Tom', designation: 'SSE' },
//                 { empId: 8910, name: 'Kevin', designation: 'TA' }
//         ])
//         const addEmployee = (newEmployee) => {
//                 setEmployees([...employees, newEmployee]);
//         };
//         return (<React.Fragment>
//                 <table style={{ width: '60%' }} className='table'>
//                         <thead className="thead-light">
//                                 <tr>
//                                         <th>EmpID</th>
//                                         <th>Name</th>
//                                         <th>Designation</th>
//                                 </tr>
//                         </thead>
//                         <tbody>
//                                 {employees.map(employee => {
//                                         return (<tr>
//                                                 <td>{employee.empId}</td>
//                                                 <td>{employee.name}</td>
//                                                 <td>{employee.designation}</td>
//                                         </tr>)
//                                 })
//                                 }
//                         </tbody>
//                 </table><br/><br/>
//                 <AddEmployee addEmployee={addEmployee} />
//         </React.Fragment>)
// }
// export default Employees;
