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
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

export default function Homepage() {
  const [show, setShow] = useState(false);
  const [showSubList, setShowSubList] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubList = () => setShowSubList(!showSubList);

  return (
    <Container fluid>
      {/* Header */}
      <Row style={{ padding: "0px 50px" }}>
        <Navbar key="lg" expand="lg" style={{ alignContent: "center"}}>
          <Container fluid>
            <Navbar.Brand
              href="#home"
              style={{ fontWeight: "bold", color: "#87CEFA" }}
            >
              <i className="bi bi-book"></i> Edu-Learn
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <a
                    href="#home"
                    style={{ fontWeight: "bold", color: "#87CEFA" }}
                  >
                    <i className="bi bi-book"></i> Edu-Learn
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content flex-grow-1 pe-3">
                  <Nav.Link
                    href="#action1"
                    style={{ display: "flex"}}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    style={{ display: "flex"}}
                  >
                    My Learning
                  </Nav.Link>
                  <NavDropdown
                    title="Discovery"
                    id="basic-nav-dropdown"
                    style={{ display: "flex"}}
                  >
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
                    style={{ borderRadius: "20px" }}
                  />
                </Form>
                <Nav>
                  <Nav.Link href="#">
                    <i
                      className="bi bi-bell"
                    //   style={{ fontSize: "1.5rem" }}
                    ></i>
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <i
                        className="bi bi-person-circle"
                        // style={{ fontSize: "1.5rem" }}
                      ></i>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#">My Account</NavDropdown.Item>
                    <NavDropdown.Item href="#">My Purchases</NavDropdown.Item>
                    <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Row>

      {/* Carousel */}
      <Row>
        <Col style={{ padding: "0px 0px" }}>
          <Carousel>
            <Carousel.Item>
              <img src="/image/pizza1.jpg" title="Pizza1" />
              <Carousel.Caption>
                <h3>First Pizza</h3>
                <p>Try my best.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/image/pizza2.jpg" title="Pizza2" />
              <Carousel.Caption>
                <h3>Second Pizza</h3>
                <p>Try my best.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/image/pizza3.jpg" title="Pizza3" />
              <Carousel.Caption>
                <h3>Third Pizza</h3>
                <p>Try my best.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/image/pizza4.jpg" title="Pizza4" />
              <Carousel.Caption>
                <h3>Fourth Pizza</h3>
                <p>Try my best.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/image/pizza5.jpg" title="Pizza5" />
              <Carousel.Caption>
                <h3>Fifth Pizza</h3>
                <p>Try my best.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Featured Categories & Courses*/}
      <Container style={{ marginTop: "50px", width: "60%" }}>
        <Row>
          <Col>
            <h4 style={{ fontWeight: "bold" }}>Featured Categories</h4>
            <p>Discovery popular courses</p>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Button variant="outline-dark" style={{ borderRadius: "20px" }}>
              All Categories
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i className="bi bi-palette" style={{ fontSize: "2rem" }}></i>
                  <h6 className="mt-3">Art & Design</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i
                    className="bi bi-code-square"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h6 className="mt-3">Development</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i
                    className="bi bi-broadcast"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h6 className="mt-3">Communication</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i
                    className="bi bi-camera-reels"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h6 className="mt-3">Photography</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i
                    className="bi bi-cash-stack"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h6 className="mt-3">Finance</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i
                    className="bi bi-bar-chart-line"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h6 className="mt-3">Marketing</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i className="bi bi-pen" style={{ fontSize: "2rem" }}></i>
                  <h6 className="mt-3">Content writing</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i className="bi bi-bezier2" style={{ fontSize: "2rem" }}></i>
                  <h6 className="mt-3">Science</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i
                    className="bi bi-broadcast-pin"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h6 className="mt-3">Network</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
            <a href="#" className="no-underline">
              <Card className="category-box">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <i
                    className="bi bi-chat-dots"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h6 className="mt-3">Soft skills</h6>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>

        {/* Featured Courses */}
        <Row style={{ marginTop: "50px" }}>
          <Row>
            <Col>
              <h4 style={{ fontWeight: "bold" }}>Featured Courses</h4>
              <p>Expore our finest courses</p>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <Button variant="outline-dark" style={{ borderRadius: "20px" }}>
                All Courses
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <a href="#" className="no-underline">
                <Card className="course-card">
                  <Card.Img
                    variant="top"
                    src="/image/logo192.png"
                    style={{ maxWidth: "286px", maxHeight: "180px" }}
                  />
                  <Card.Body>
                    <Badge pill className="badge-category">
                      Category
                    </Badge>
                    <p>
                      <span className="text-by">by: </span>
                      <span style={{ fontWeight: "bold" }}>Maker</span>
                    </p>
                    <h5 className="course-name">Course Name</h5>
                    <div className="course-info">
                      <span>
                        <i className="bi bi-clock-fill"></i> # weeks
                      </span>
                      <span>
                        <i className="bi bi-mortarboard"></i> ### enrolled
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="course-price">
                        <span>$50</span>
                      </div>
                      <div className="view-more">
                        <a
                          href="#"
                          style={{ fontWeight: "bold" }}
                          className="no-style"
                        >
                          View more
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <a href="#" className="no-underline">
                <Card className="course-card">
                  <Card.Img
                    variant="top"
                    src="/image/logo192.png"
                    style={{ maxWidth: "286px", maxHeight: "180px" }}
                  />
                  <Card.Body>
                    <Badge pill className="badge-category">
                      Category
                    </Badge>
                    <p>
                      <span className="text-by">by: </span>
                      <span style={{ fontWeight: "bold" }}>Maker</span>
                    </p>
                    <h5 className="course-name">Course Name</h5>
                    <div className="course-info">
                      <span>
                        <i className="bi bi-clock-fill"></i> # weeks
                      </span>
                      <span>
                        <i className="bi bi-mortarboard"></i> ### enrolled
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="course-price">
                        <span>$50</span>
                      </div>
                      <div className="view-more">
                        <a
                          href="#"
                          style={{ fontWeight: "bold" }}
                          className="no-style"
                        >
                          View more
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <a href="#" className="no-underline">
                <Card className="course-card">
                  <Card.Img
                    variant="top"
                    src="/image/logo192.png"
                    style={{ maxWidth: "286px", maxHeight: "180px" }}
                  />
                  <Card.Body>
                    <Badge pill className="badge-category">
                      Category
                    </Badge>
                    <p>
                      <span className="text-by">by: </span>
                      <span style={{ fontWeight: "bold" }}>Maker</span>
                    </p>
                    <h5 className="course-name">Course Name</h5>
                    <div className="course-info">
                      <span>
                        <i className="bi bi-clock-fill"></i> # weeks
                      </span>
                      <span>
                        <i className="bi bi-mortarboard"></i> ### enrolled
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="course-price">
                        <span>$50</span>
                      </div>
                      <div className="view-more">
                        <a
                          href="#"
                          style={{ fontWeight: "bold" }}
                          className="no-style"
                        >
                          View more
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
      {/* Footer */}
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
                variety of courses to expand your knowledge and skills in
                diverse fields. Join us and start your learning journey today!
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
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
