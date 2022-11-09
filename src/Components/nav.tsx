import React from "react";
import { Router } from "react-router-dom";

import { Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
    return ( 
        <div className="nav">
            <Nav
                fill
                tabs
                >
                <NavItem>
                    <NavLink
                    active
                    href="/"
                    >
                    Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    active
                    href="/Calculator"
                    >
                    Calculator
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Contact">
                    Contact
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    // disabled
                    href="/Gallery"
                    >
                    Gallery
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}
 
export default Navigation;