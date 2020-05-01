import * as React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux'
import {fetchUsers} from '../../redux/user/userServices';
import UserCard from '../UserCard/UserCard';
import './style.css';

class UsersList extends React.Component {

 componentDidMount() {
   const { fetchUsers } = this.props;
   fetchUsers();
 }

 render() {

   const { userData} = this.props;

   const users = userData && userData.users && userData.users.map(user => (
       <UserCard
         key={user.id}
         emailAddress={user.email}
         firstName={user.first_name}
         lastName={user.last_name}
         profilePicture={user.avatar}
       />
     ))

   return userData && userData.loading ? (
     <div className="d-flex justify-content-center">
       <div className="spinner-border text-success" role="status">
         <span className="sr-only">Loading...</span>
       </div>
     </div>
   ) : userData.error ? (
     <h2>{userData.error}</h2>
   ) : (
     <CSSTransitionGroup
       transitionName="user"
       transitionAppear={true}
       transitionAppearTimeout={500}
       transitionEnter={false}
       transitionLeave={false}>
         <div className='main-wrapper'>
           <div className='menubar'>
             <ul className='d-flex justify-content-end'>
               <li><a href="/"><img src='/img/Oval.svg' alt='' className='mr-2' />Alex Birdsman</a></li>
               <li><a href="/"><img src='/img/notification.png' alt='' /> </a></li>
               <li><a href="/"> <i className="fas fa-bars"></i></a></li>
             </ul>
           </div>
           <h2 className='title'>Profile List</h2>
           <p className='text'>Laudem et via procedat oratio quaerimus igitur, quid et accurate disserendum et dolorem?.
             At magnum periculum adiit in oculis quidem exercitus quid ex ea voluptate et.</p>
           <div className='profile-details'>
             <CSSTransitionGroup
               transitionName="userlist"
               transitionAppear={true}
               transitionAppearTimeout={10000}
               transitionEnter={false}
               transitionLeave={false}>
                {users}
             </CSSTransitionGroup>
           </div>
         </div>
     </CSSTransitionGroup>
   )
 }
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)
