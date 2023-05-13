import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
  render() {
    return (
     <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */ }

<Link to='/'>
  <img src={logo} className="navbar-brand" alt="store"></img>
</Link>
<ul className="navbar-nav align-items-center">
  <li className="nav-item ml-5">
    <Link to="/" className="nav-link">
      products
    </Link>
  </li>
</ul>

<Link to="/cart" className="ms-auto">
    <ButtonContainer>
      <span className="">
      <i className="fas fa-cart-plus"></i>
      </span>    
    my cart
    </ButtonContainer>
    </Link>
     </NavContainer>
    )
  }
}
// Pixels are absolutes, and the rems are targeting the root element.
const NavContainer = styled.nav`
background:var(--mainBlue);
color:var(--mainWhite) !important;
font-size:1.3rem;
text-transform:capitalize;
`
