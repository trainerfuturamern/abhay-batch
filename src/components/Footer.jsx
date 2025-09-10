import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = ()=>{
    return(

        <footer className="footer-bg">
            <Container>
                <Row>
                    <Col md={4} lg={3}>
                        <h6>About Us</h6>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} lg={3}>
                        <h6>Our Services</h6>
                    </Col>
                    <Col md={4} lg={3}>
                        <h6>Our Branches</h6>
                    </Col>
                    <Col md={4} lg={3}>
                        <h6>Contact us</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;