import React from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavLogo from "../Images/jedi-logo-symbol.png";
import userIcon from "../Images/profile-user.png";
import alarm from "../Images/bell.png";

import "./TopNav.css";

const TopNav = () => {
    return (
        <div>
            <Navbar expand="sm" className="py-md-2  " variant="dark" >
                <Container md>
                    <Navbar.Brand href="#">
                        <img alt="" src={NavLogo} width="41" className="mr-2" />Wallet ID
                    </Navbar.Brand>

                    <Nav className="ml-auto d-none d-sm-block">
                        <NavLink className="mx-4" activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="mx-4" activeClassName="active" to="/activity">Activity</NavLink>
                        <NavLink className="mx-4" activeClassName="active" to="/wallet">Wallet</NavLink>
                        <NavLink className="mx-4" activeClassName="active" to="/market">Market</NavLink>
                        <NavLink className="mx-4" activeClassName="active" to="/earn">Earn</NavLink>
                    </Nav>
                    <div>
                        <span className="ml-md-4 ">
                            <img alt="" src={userIcon} />
                        </span>
                        <span className="ml-4">
                            <img alt="" src={alarm} />
                        </span>
                    </div>

                </Container>
            </Navbar>

        </div>
    )
}


export default TopNav;
