import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutUser} from '../actions';

class MainNavBar extends Component {
  render() {
    return (
      <div className='main-nav-bar'>
        <nav>
          <Link to='/' className='main-nav-bar__link'>MENU +</Link>
          {this.loggedInUser()}
        </nav>
      </div>
    );
  }

  loggedInUser() {
    const user = this.props.user;
    if (!user) {
      return <Link to='/login' className='main-nav-bar__link'>Login</Link>;
    }
    return <Link to='/' onClick={this.onLogoutPress} className='main-nav-bar__link'>Logout</Link>;
  }

  onLogoutPress() {
    event.preventDefault();
    logoutUser();
  }
}

const mapStateToProps = ({auth}) => {
  const {user} = auth;
  return {user};
};

export default connect(mapStateToProps, {
  logoutUser,
})(MainNavBar);
