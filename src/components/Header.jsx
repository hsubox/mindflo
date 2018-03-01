import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MainNavBar from './MainNavBar';

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to="/"><img src={'../images/mindflo.png'} alt='mindflo' className='header__image'/></Link>
        <MainNavBar />
      </div>
    );
  }
}

export default Header;
