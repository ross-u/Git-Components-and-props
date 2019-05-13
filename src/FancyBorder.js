import React from 'react';
import './FancyBorder.css';

const name = 'Uros';
const age = 30;

function FancyBorder(props) {
  return(
    <div className='fancy'>
      <h3>Fancy component</h3>
      {props.children}          {/* Components placed inside the tag are available in `props.children` */}
    </div>
  )
}


export default FancyBorder;
