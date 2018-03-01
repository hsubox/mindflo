import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginFormUpdate, loginUser} from '../actions';
import {InputTextField} from './common';

class LoginForm extends Component {
  onButtonPress(event) {
    event.preventDefault();
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  render() {
    const {
      email,
      password,
      loginFormUpdate,
    } = this.props;
    return (
      <div className='login-form'>
        <form className='login-form__form'>
          <span className='login-form__element'><InputTextField fieldName='Email' placeholder='Email' value={email} onChange={loginFormUpdate} /></span>
          <span className='login-form__element'><InputTextField type='password' placeholder='Password' fieldName='Password' value={password} onChange={loginFormUpdate} /></span>
          <a onClick={this.onButtonPress.bind(this)} className='btn btn-default'>Login</a>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password} = auth;
  return {email, password};
};

export default connect(mapStateToProps, {
  loginFormUpdate,
  loginUser,
})(LoginForm);
