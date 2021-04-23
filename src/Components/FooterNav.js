import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import HomeImg from "../Images/home.png";
import ActImg from "../Images/diary.png";
import WalletImg from "../Images/wallet-filled-money-tool.png";
import MarketImg from "../Images/market.png";
import EarnImg from "../Images/giftbox.png"
import "./FooterNav.css";

const FooterNav = () => {
    return (
        <div>
            <Navbar fixed="bottom" expand="sm" className="foot-navbar py-md-2 d-block d-sm-none " variant="dark" >
                <Container md>
                    <NavLink className="mx-1" activeClassName="active" to="/">
                        <div className="text-center">
                            <img alt="" src={HomeImg} />
                            <p>Home</p>
                        </div>
                    </NavLink>
                    <NavLink className="mx-1" activeClassName="active" to="/activity">
                        <div className="text-center">
                            <img alt="" src={ActImg} />
                            <p>Activity</p>
                        </div>
                    </NavLink>
                    <NavLink className="mx-1" activeClassName="active" to="/wallet">
                        <div className="text-center">
                            <img alt="" src={WalletImg} />
                            <p>Wallet</p>
                        </div></NavLink>
                    <NavLink className="mx-1" activeClassName="active" to="/market">
                        <div className="text-center">
                            <img alt="" src={MarketImg} />
                            <p>Market</p>
                        </div></NavLink>
                    <NavLink className="mx-1" activeClassName="active" to="/earn">
                        <div className="text-center">
                            <img alt="" src={EarnImg} />
                            <p>Earn</p>
                        </div></NavLink>
                </Container>
            </Navbar>
        </div>
    )
}


export default FooterNav;
