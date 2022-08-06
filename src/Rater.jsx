import React from 'react';
class Rater extends React.Component{
    render(){
        return(<ul className="rating" style={{display:'flex' , 'align-items': 'center', 'justify-content': 'center'}}>
            <div class="filled" style={{color:'green'}}>{'\u2605'}</div>
            <div class="filled" style={{color:'green'}}>{'\u2605'}</div>
            <div class="filled" style={{color:'green'}}>{'\u2605'}</div>
            <div class="filled" style={{color:'green'}}>{'\u2605'}</div>
            <div class="filled">{'\u2605'}</div>
            </ul>
        )
    }
}
export default Rater;
