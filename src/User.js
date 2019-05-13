import React from 'react';
import Profile from './Profile';


const User = (props) => {
  return (
  <div className='user'>
    <h2>Hello {props.username} </h2>
    <Profile nameOfUser={props.username}/>
  </div>
  );
} 

export default User;  