import React, { Component } from 'react';
import TopNav from "../Components/TopNav"
import FooterNav from "../Components/FooterNav"
import { Container } from 'react-bootstrap';
import "./style.css"

class Wallet extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Container>
                    <div className="title-page text-center mt-5 h2">
                        WALLET
                   </div>
                </Container>

                <br />
                <br />
                <FooterNav />
            </div>
        )
    }
}

export default Wallet;