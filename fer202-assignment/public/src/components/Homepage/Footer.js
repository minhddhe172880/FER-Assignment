import {
    Container,
    Row,
    Navbar,
    Nav,
    Button,
    NavDropdown,
    Form,
    Dropdown,
    SplitButton,
    DropdownButton,
    ButtonGroup,
    Col,
    Offcanvas,
    Carousel,
    Image,
    Card,
    FormControl,
    Badge,
    ListGroup,
    Tab
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <Row>
            <Container
                fluid
                style={{ backgroundColor: "#f8f9fa", marginTop: "100px" }}
            >
                <Row style={{ padding: "20px 100px" }}>
                    <Col sm={12} md={6} lg={3}>
                        <h4 style={{ fontWeight: "Bold" }}>Edu-learn</h4>
                        <p style={{ textAlign: "justify" }}>
                            Edu-Learn is your go-to platform for online learning. Explore a
                            variety of courses to expand your knowledge and skills in diverse
                            fields. Join us and start your learning journey today!
                        </p>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4>About Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="footer-link">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4 style={{ fontWeight: "Bold" }}>PROGRAMS</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="footer-link">
                                    Art & Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Business
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    IT Software
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Language
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Programming
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4 style={{ fontWeight: "Bold" }}>CONTACT US</h4>
                        <ul className="list-unstyled footer-icons">
                            <li>Adress: Street, Place, Place, Country, Nation</li>
                            <li>Tel: 12345678910</li>
                            <li>Mail: Example1223@gmail.com</li>
                            <li>
                                <a href="#" className="footer-link">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="footer-link">
                                    <i className="bi bi-pinterest"></i>
                                </a>
                                <a href="#" className="footer-link">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a href="#" className="footer-link">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="footer-link">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Button onClick={scrollToTop} className="scroll-button">
                        <i class="bi bi-arrow-up"></i>
                    </Button>
                </Row>
            </Container>
        </Row>
    );
}