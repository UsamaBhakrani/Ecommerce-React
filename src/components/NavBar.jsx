import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'


const NavBar = () => {
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default NavBar;
