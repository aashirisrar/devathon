import React from 'react';
import "./info.css";
const INFO = (props) => {
    return(
        <div className='prop_p'>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <p>{props.p4}</p>
        </div>
    );
};
export default INFO

