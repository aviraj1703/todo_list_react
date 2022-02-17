import React, { useState } from 'react';

const ListComp = (props) => {
    const[line, SetVal] = useState(false);
    const cross_it = () => {
        SetVal(true);
    }
    return (
        <div className='todo'>
            <span onClick={cross_it} className="span"> 
                <button className="btn2"> <i className="fa-solid fa-eraser"></i> </button> 
            </span>
            <li style={{textDecoration : line ? "line-through" : "none"}}> {props.text} </li>
        </div>
    );
}

export default ListComp;