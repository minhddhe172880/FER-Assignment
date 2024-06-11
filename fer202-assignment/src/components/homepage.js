import { Row, Col, Container, Nav, Navbar, Form, Button, Card, NavDropdown, Alert, Carousel, Image, Badge, FormControl } from "react-bootstrap";



export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            <Container fluid>
                <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "#87CEFA" }}>
                    <i className="bi bi-book"></i> Edu-Learn
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">My Learning</Nav.Link>
                        <NavDropdown title="Discovery" id="basic-nav-dropdown">
                            <NavDropdown.Header>Categories</NavDropdown.Header>
                            <NavDropdown.Item href="#">Art & Design</NavDropdown.Item>
                            <NavDropdown.Item href="#">Development</NavDropdown.Item>
                            <NavDropdown.Item href="#">Communication</NavDropdown.Item>
                            <NavDropdown.Item href="#">Finance</NavDropdown.Item>
                            <NavDropdown.Item href="#">Science</NavDropdown.Item>
                            <NavDropdown.Item href="#">Network</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#more">More</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">

                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />

                    </Form>
                    <Nav>
                        <NavDropdown title={<i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="#">My Purchases</NavDropdown.Item>
                            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#"><i className="bi bi-bell" style={{ fontSize: "1.5rem" }}></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


function Banner() {
    return (
        <Carousel interval={4000} controls={false} indicators={false}>
            <Carousel.Item>
                <Image src="/images/banner-placeholder.jpg" style={{ minHeight: "150px", width: "100%" }}></Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/banner-placeholder.jpg" style={{ minHeight: "200px", width: "100%" }}></Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/banner-placeholder.jpg" style={{ minHeight: "200px", width: "100%" }}></Image>
            </Carousel.Item>
        </Carousel>
    );
}

function Body() {
    return (
        <Container style={{ marginTop: "50px", width: "60%" }}>
            <Row>
                <Col>
                    <h6 style={{ fontWeight: "bold" }}>Featured Categories</h6>
                    <p>Discovery popular courses</p>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Button variant="outline-dark" style={{ borderRadius: "20px" }}>All Categories</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-palette" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Art & Design</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-code-square" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Development</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-broadcast" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Communication</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-camera-reels" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Photography</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-cash-stack" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Finance</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-bar-chart-line" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Marketing</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-pen" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Content writing</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-bezier2" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Science</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-broadcast-pin" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Network</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href="#" className="no-underline">
                        <Card className="category-box">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                <i className="bi bi-chat-dots" style={{ fontSize: "2rem" }}></i>
                                <h6 className="mt-3">Soft skills</h6>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}>
                <Col>
                    <h6 style={{ fontWeight: "bold" }}>Featured Courses</h6>
                    <p>Expore our finest courses</p>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Button variant="outline-dark" style={{ borderRadius: "20px" }}>All Courses</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="course-card">
                        <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                        <Card.Body>
                            <Badge pill className="badge-category">Category</Badge>
                            <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                            <h5 className="course-name">Course Name</h5>
                            <div className="course-info">
                                <span><i className="bi bi-clock-fill"></i> # weeks</span>
                                <span><i className="bi bi-mortarboard"></i> ### enrolled</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="course-price">
                                    <span>$50</span>
                                </div>
                                <div className="view-more">
                                    <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="course-card">
                        <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                        <Card.Body>
                            <Badge pill className="badge-category">Category</Badge>
                            <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                            <h5 className="course-name">Course Name</h5>
                            <div className="course-info">
                                <span><i className="bi bi-clock-fill"></i> # weeks</span>
                                <span><i className="bi bi-mortarboard"></i> ### enrolled</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="course-price">
                                    <span>$50</span>
                                </div>
                                <div className="view-more">
                                    <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="course-card">
                        <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                        <Card.Body>
                            <Badge pill className="badge-category">Category</Badge>
                            <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                            <h5 className="course-name">Course Name</h5>
                            <div className="course-info">
                                <span><i className="bi bi-clock-fill"></i> # weeks</span>
                                <span><i className="bi bi-mortarboard"></i> ### enrolled</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="course-price">
                                    <span>$50</span>
                                </div>
                                <div className="view-more">
                                    <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>



            </Row>
        </Container>

    );
}




function Footer() {
    return (
        <Container fluid style={{ backgroundColor: "#f8f9fa", marginTop: "100px" }}>
            <Row style={{ padding: "20px 100px" }}>
                <Col xs={4}>
                    <h6 style={{ fontWeight: "Bold" }}>Edu-learn</h6>
                    <p style={{ textAlign: "justify" }}>
                        Edu-Learn is your go-to platform for online learning. Explore a variety of courses to expand your knowledge and skills in diverse fields. Join us and start your learning journey today!</p>
                </Col>
                <Col xs={2}>
                    <h6>About Us</h6>
                    <ul className="list-unstyled">
                        <li><a href="#" className="footer-link">Contact Us</a></li>
                        <li><a href="#" className="footer-link">FAQ</a></li>
                    </ul>
                </Col>
                <Col xs={2}>
                    <h6 style={{ fontWeight: "Bold" }}>PROGRAMS</h6>
                    <ul className="list-unstyled">
                        <li><a href="#" className="footer-link">Art & Design</a></li>
                        <li><a href="#" className="footer-link">Business</a></li>
                        <li><a href="#" className="footer-link">IT Software</a></li>
                        <li><a href="#" className="footer-link">Language</a></li>
                        <li><a href="#" className="footer-link">Programming</a></li>

                    </ul>
                </Col>
                <Col xs={4}>
                    <h6 style={{ fontWeight: "Bold" }}>CONTACT US</h6>
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
            </Row>
        </Container>
    );
}

export { Footer, Banner, Body };