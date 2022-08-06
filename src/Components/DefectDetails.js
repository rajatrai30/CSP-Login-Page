// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class DefectDetails extends React.Component{
//     render(){
//                  var Defect = [
//                    { defect: 'UI', Description: 'NICE PROD', Priority:'2', Status:'OPEN', ChangeStatus:'OPEN DEFECT'},
//                    { defect: 'Functional', Description: 'NICE PROD', Priority:'2', Status:'CLOSE', ChangeStatus:'CLOSE DEFECT'},
//                    { defect: 'Change Request', Description: 'NICE PROD', Priority:'8', Status:'OPEN', ChangeStatus:'OPEN DEFECT'}
//                  ]
                
//                 return (<React.Fragment>
//                         <h2 class='defecthead'>Defect Details</h2>
//                         <h3 className='searchresults'>Search Results: 3</h3>
//                         <table style={{width:'60%', marginLeft:'auto', marginRight:'auto'}} className='table'>
//                              <thead className="thead-dark">
//                                  <tr>
//                                       <th>Defect Category</th>
//                                       <th>Description</th>
//                                       <th>Priority</th>
//                                       <th>Status</th>
//                                       <th>Change Status</th>


//                                  </tr>
//                              </thead>
//                              <tbody>
//                                   {Defect.map(Defect => {
//                                         return (<tr key={Defect.defect}>
//                                                  <td>{Defect.defect}</td>
//                                                  <td>{Defect.Description}</td>
//                                                  <td>{Defect.Priority}</td>
//                                                  <td>{Defect.Status}</td>
//                                                  <td>{Defect.ChangeStatus}</td>
//                                          </tr>)
//                                  }) 
//                                  }
//                              </tbody>
//                         </table>
//                 </React.Fragment>)  
//         }
//  }

// export default DefectDetails;
