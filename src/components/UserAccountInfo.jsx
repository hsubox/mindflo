import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoginForm extends Component {
  render() {
    return (
      <div className='login-form'>
        <div>Name: {this.props.user && this.props.user.displayName || 'N/A'}</div>
        <div>Email: {this.props.user && this.props.user.email}</div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {user} = auth;
  return {user};
};

export default connect(mapStateToProps)(LoginForm);
