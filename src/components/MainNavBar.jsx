import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutUser} from '../actions';

class MainNavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          {this.loggedInUser()}
        </nav>
      </div>
    );
  }

  loggedInUser() {
    const user = this.props.user;
    if (!user) {
      return <Link to='/login'>Login</Link>;
    }
    return <Link to='/' onClick={this.onLogoutPress}>Logout</Link>;
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
