import React from "react";
import { Nav, NavLink, NavMenu}
    from "./NavbarElements";
import Logo from "../logo"
import "react-bootstrap";
import HamburgerMenu from "../hamburgerMenu";


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <div className= "leftMenuBar">
                        <div className="dropdown">
                            <button className="dropbtn">
                                <HamburgerMenu />
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className= "dropdown-content">
                                <NavLink href="#" to = '/home'>Home</NavLink>
                                <NavLink href="#" to = "/account">Account</NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id = "logoDiv">
                            <Logo/>
                        </div>
                    </div>
                    <div className= "rightLogin">
                        <NavLink class = "" to="/login" activeStyle>
                            LOGIN
                        </NavLink>
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;