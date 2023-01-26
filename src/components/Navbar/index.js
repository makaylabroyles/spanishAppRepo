import React from "react";
import { Nav, NavLink, NavMenu}
    from "./NavbarElements";
import Logo from "../logo"
import "react-bootstrap";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink class = "" to="/login" activeStyle>
                        LOGIN
                    </NavLink>
                    <div id = "logoDiv">
                        <Logo/>
                    </div>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;