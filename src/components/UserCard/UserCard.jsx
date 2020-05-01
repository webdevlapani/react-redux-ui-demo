import  React from 'react';
import './styles.css';

const UserCard = ({ firstName, lastName, emailAddress, profilePicture }) =>{
  return <div className='main-card'>
    <div className='image-wrap'>
       <span>
      <img src={profilePicture} alt={firstName}/>
    </span>
      <div>
        <p>
          {firstName} { lastName}
        </p>
        <p className='email-text d-md-none d-block'>
          {emailAddress}
        </p>
      </div>


    </div>
    <div className='content-block'>
      <h5>User email address</h5>
    <p>
      {emailAddress}
    </p>
    </div>
  </div>
}
export default UserCard;