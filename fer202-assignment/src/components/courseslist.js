
import { Row, Col, Container, Nav, Navbar, Form, Button, Card, NavDropdown, Alert, Carousel, Image, Badge, FormControl, Pagination } from "react-bootstrap";



export default function NavPath() {
    return (

        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="">
                    <Nav.Link href="#">Home</Nav.Link>
                    <span className="mx-3" style={{ fontSize: '1.5em' }}>›</span>
                    <Nav.Link href="#">Course</Nav.Link>
                    <span className="mx-3" style={{ fontSize: '1.5em' }}>›</span>
                    <Nav.Link href="#">All Courses</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export { CoursesBody, CoursesBody2 }

function CoursesBody() {
    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <Col xs={8}>
                    <Row>
                        <Col xs={6} md={12}>
                            <h5>All Courses</h5>
                        </Col>
                        <Col xs={6} className="d-flex justify-content-end align-items-center">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </div>
                                <div className="btn-group mr-2" role="group" style={{ margin: "0px 5px" }}>
                                    <Button variant="light" className="border" title="List View">
                                        <i class="bi bi-list-task"></i>
                                    </Button>
                                    <Button variant="light" className="border" title="Grid View">
                                        <i class="bi bi-grid"></i>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col>
                            <Row>
                                <Col>
                                    <Card className="d-flex flex-row">
                                        <div>
                                            <Card.Img variant="top" src="/images/286x180.png" style={{ maxWidth: "286px", maxHeight: "180px" }} />
                                        </div>
                                        <Card.Body className="flex-grow-1">
                                            <Badge pill className="badge-category">Category</Badge>
                                            <Card.Title className="mt-2 mb-3">Course Name</Card.Title>
                                            <Card.Text>
                                                <p><span className="text-by">by: </span><span style={{ fontWeight: "bold" }}>Maker</span></p>
                                                <div className="course-info">
                                                    <span><i className="bi bi-clock-fill"></i> 4 weeks</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 enrolled</span>
                                                    <span><i className="bi bi-bar-chart-line"></i> All level</span>
                                                    <span><i className="bi bi-mortarboard"></i> 20 lession</span>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="course-price">
                                                        <span>$50</span>
                                                    </div>
                                                    <div className="view-more">
                                                        <a href="#" style={{ fontWeight: "bold" }} className="no-style">View more</a>
                                                    </div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Pagination className="justify-content-center">
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
                <Col xs={4}>
                    <Form>
                        <Col>
                            <Form.Group>
                                <Form.Label><strong>Categories</strong></Form.Label>
                                <Form.Check type="checkbox" label="Commercial" id="commercial" />
                                <Form.Check type="checkbox" label="Office" id="office" />
                                <Form.Check type="checkbox" label="Shop" id="shop" />
                                <Form.Check type="checkbox" label="Educate" id="educate" />
                                <Form.Check type="checkbox" label="Academy" id="academy" />
                                <Form.Check type="checkbox" label="Single Family Home" id="single-family-home" />
                                <Form.Check type="checkbox" label="Studio University" id="studio-university" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Instructor</strong></Form.Label>
                                <Form.Check type="checkbox" label="Person 1" id="person-1" />
                                <Form.Check type="checkbox" label="Person 2" id="person-2" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Price</strong></Form.Label>
                                <Form.Check type="checkbox" label="All" id="all" />
                                <Form.Check type="checkbox" label="Free" id="free" />
                                <Form.Check type="checkbox" label="Paid" id="paid" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Review</strong></Form.Label>
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9733;&#9733;&#9733; (5 Stars)" id="5-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9733;&#9733;&#9734; (4 Stars)" id="4-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9733;&#9734;&#9734; (3 Stars)" id="3-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9734;&#9734;&#9734; (2 Stars)" id="2-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9734;&#9734;&#9734;&#9734; (1 Star)" id="1-star" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Level</strong></Form.Label>
                                <Form.Check type="checkbox" label="All Levels" id="all-levels" />
                                <Form.Check type="checkbox" label="Beginner" id="beginner" />
                                <Form.Check type="checkbox" label="Intermediate" id="intermediate" />
                                <Form.Check type="checkbox" label="Expert" id="expert" />
                            </Form.Group>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}


function CoursesBody2() {
    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <Col xs={8}>
                    <Row style={{ marginTop: "20px" }}>
                        <Col xs={6}>
                            <h5>All Courses</h5>
                        </Col>
                        <Col xs={6} className="d-flex justify-content-end align-items-center">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </div>
                                <div className="btn-group mr-2" role="group" style={{ margin: "0px 5px" }}>
                                    <Button variant="light" className="border" title="List View">
                                        <i class="bi bi-list-task"></i>
                                    </Button>
                                    <Button variant="light" className="border" title="Grid View">
                                        <i class="bi bi-grid"></i>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                        <Col>
                            <Card className="course-card">
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                    <Row style={{ marginTop: "20px" }}>
                        <Col>
                            <Card className="course-card">
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                    <Row style={{ marginTop: "20px" }}>
                        <Col>
                            <Card className="course-card">
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                    <Row style={{ marginTop: "20px" }}>
                        <Col>
                            <Card className="course-card">
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                    <Row style={{ marginTop: "20px" }}>
                        <Col>
                            <Card className="course-card">
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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
                                <Card.Img variant="top" src="/images/286x180.png" style={{ width: "100%", maxHeight: "220px" }} />
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



                    <Pagination className="justify-content-center">
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
                <Col xs={4}>
                    <Form>
                        <Col>
                            <Form.Group>
                                <Form.Label><strong>Categories</strong></Form.Label>
                                <Form.Check type="checkbox" label="Commercial" id="commercial" />
                                <Form.Check type="checkbox" label="Office" id="office" />
                                <Form.Check type="checkbox" label="Shop" id="shop" />
                                <Form.Check type="checkbox" label="Educate" id="educate" />
                                <Form.Check type="checkbox" label="Academy" id="academy" />
                                <Form.Check type="checkbox" label="Single Family Home" id="single-family-home" />
                                <Form.Check type="checkbox" label="Studio University" id="studio-university" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Instructor</strong></Form.Label>
                                <Form.Check type="checkbox" label="Person 1" id="person-1" />
                                <Form.Check type="checkbox" label="Person 2" id="person-2" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Price</strong></Form.Label>
                                <Form.Check type="checkbox" label="All" id="all" />
                                <Form.Check type="checkbox" label="Free" id="free" />
                                <Form.Check type="checkbox" label="Paid" id="paid" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Review</strong></Form.Label>
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9733;&#9733;&#9733; (5 Stars)" id="5-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9733;&#9733;&#9734; (4 Stars)" id="4-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9733;&#9734;&#9734; (3 Stars)" id="3-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9733;&#9734;&#9734;&#9734; (2 Stars)" id="2-stars" />
                                <Form.Check type="checkbox" label="&#9733;&#9734;&#9734;&#9734;&#9734; (1 Star)" id="1-star" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Level</strong></Form.Label>
                                <Form.Check type="checkbox" label="All Levels" id="all-levels" />
                                <Form.Check type="checkbox" label="Beginner" id="beginner" />
                                <Form.Check type="checkbox" label="Intermediate" id="intermediate" />
                                <Form.Check type="checkbox" label="Expert" id="expert" />
                            </Form.Group>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}










function checkbox() {
    return (
        <Form.Group>
            <Form.Label><strong>Categories</strong></Form.Label>
            <div className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Commercial" id="commercial" />
                <span>15</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Office" id="office" />
                <span>10</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Shop" id="shop" />
                <span>20</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Educate" id="educate" />
                <span>12</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Academy" id="academy" />
                <span>8</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Single Family Home" id="single-family-home" />
                <span>5</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Studio University" id="studio-university" />
                <span>7</span>
            </div>
        </Form.Group>
    );

}