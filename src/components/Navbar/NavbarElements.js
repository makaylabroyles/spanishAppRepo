import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import "react-bootstrap"

export const Nav = styled.nav`
  background: #2F4B5D;
  height: 85px;
  display: flex;
  //justify-content: center;
  //padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #FFF;
  margin: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  &.active{
    color: #009CDC;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    //display: block;
    //position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  .spanishLabLogo{
    margin-top: 220px;
    width: 596px;
    height: 970px;
    align-content: center;
    //margin-left: 100px;
  }
  /* The dropdown container */
  .dropdown {
    float: left;
    overflow: hidden;
  }

  /* Dropdown button */
  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  /* Add a red background color to navbar links on hover */
  .navbar a:hover, .dropdown:hover .dropbtn {
    color: #009CDC;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    font-size: 20px;
    background-color: #2F4B5D;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .leftMenuBar{
    margin-right: 400px;
  }
  .rightLogin{
    margin-left: 250px;
  }
  

`;