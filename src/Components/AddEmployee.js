// import React, { useState } from 'react';
// const AddEmployee = ({ addEmployee }) => {
//     const [empId, setEmpId] = useState('');
//     const [name,setName] = useState('');
//     const [designation,setDesignation] = useState('');
   
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newEmployee={empId:empId,name:name,designation:designation}
//         addEmployee(newEmployee);
//         setEmpId('');
//         setName('');
//         setDesignation('')
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             EmpId:<input type='text' value={empId} onChange={(e) => setEmpId(e.target.value)} /><br/><br/>
//             EmpName: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
//             Designation: <input type='text' value={designation} onChange={(e) => setDesignation(e.target.value)} /><br/><br/>
//             <input type='submit' value='Add Employee' />
//         </form>
//     );
// }
// export default AddEmployee;
