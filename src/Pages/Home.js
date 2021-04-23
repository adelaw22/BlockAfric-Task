import React, { Component } from 'react';
import TopNav from "../Components/TopNav"
import FooterNav from "../Components/FooterNav"
import { Container, Card, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import "./style.css"

class Home extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Container>
                    <Card className="top-card">
                        <Card.Title className="">Wallet Balance</Card.Title>
                        <Card.Body>
                            <p>Token Balance:</p>
                            <p>Naira Balance:</p>
                        </Card.Body>
                    </Card>
                </Container>

                <div className="my-5">
                    <Container>
                        <div className="title-currency p-2 h5 w-100 mb-4">Select Currency:</div>

                        <InputGroup className="mb-2 ">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Token</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="" placeholder="0.000001" type="number" />
                        </InputGroup>

                        <div className="my-4 w-100">
                            <Button variant="primary">Send</Button>
                            <Button variant="primary float-right">Receive</Button>
                        </div>
                        
                       

                        <div className="recent-act p-2 h5 w-100">Recent Activity</div>
                        <Card>
                            <Row>
                                <Col>
                                    <div className="col-title mb-2">Date</div>
                                    <p>1/1/21</p>
                                    <p>2/2/21</p>
                                    <p>3/3/21</p>
                                </Col>
                                <Col>
                                    <div className="col-title mb-2">Description</div>
                                    <p>Sent</p>
                                    <p>Received</p>
                                    <p>Sent</p>
                                </Col>
                                <Col>
                                    <div className="col-title mb-2">Amount</div>
                                    <p>N100.00</p>
                                    <p>N200.00</p>
                                    <p>N300.00</p>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                    
                   <br/>
                   <br/>
                   <br/>
                    <FooterNav/>
                </div>
            </div>
        )
    }
}

export default Home;
