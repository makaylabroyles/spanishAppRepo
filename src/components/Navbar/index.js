import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import Logo from "../logo"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink class = "loginNav" to="/login" activeStyle>
                        Login
                    </NavLink>
                    <Logo class = "logo" />
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;