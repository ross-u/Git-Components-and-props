import React from 'react';

const Profile = (props) => {
  return (
  <div className='profile-box'>
    <h4> Profile Component</h4>
    <p>Bio of Profile : {props.nameOfUser}</p>
  </div>
  );
} 

export default Profile;