import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

class FilterDetails extends React.Component{
    render(){
            return(
                    
                    <div>
                            {/* <span className="block-example border border-dark"></span> */}
                            <div className={"filter-details"} style={{textAlign: 'center'}}>
                                            <h2 class='filterhead'>Filter Details</h2>
                                            <div className='priority'>
                                                <h5 className='tagsprior'>Priority</h5>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        All
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            
                                            <div className='priority'>
                                                <h5 className='tagsprior'>Category</h5>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        All
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>


                                            {/* <div className='DefectTags'>
                                                    <a href={'/productDetails'} className='Downtags'><h5 className='tags'>category</h5></a>
                                                    <a href={'/productDetails'} className='Downtags'><h5 className='tags'>category</h5></a>
                                            </div>  */}
                            
                            </div>
                    </div>
                    )
            }
    }
export default FilterDetails;
