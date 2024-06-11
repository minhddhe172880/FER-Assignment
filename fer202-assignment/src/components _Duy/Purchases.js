import React, { useState } from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";

export default function Purchases() {
  const [showAllFreeCourses, setShowAllFreeCourses] = useState(false);
  const [showAllDegreeCourses, setShowAllDegreeCourses] = useState(false);

  const toggleShowAllFreeCourses = () => {
    setShowAllFreeCourses(!showAllFreeCourses);
  };

  const toggleShowAllDegreeCourses = () => {
    setShowAllDegreeCourses(!showAllDegreeCourses);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 style={{ fontSize: "28px" }}>Purchases</h1>
          <p>
            Need more help? Check out our <a href="#">help center</a> and
            <a href="#">refund policies</a>.
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Nav variant="tabs" defaultActiveKey="/my-purchases/transactions">
            <Nav.Item>
              <Nav.Link
                href="/my-purchases/transactions"
                active
                style={{ color: "blue" }}
              >
                Payment history
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row style={{ height: "400px"}}>
        <Col>
          <p>
            No purchases found in your history.
            <a href="#">Browse courses offering</a> and <a  href="#" >Certificates now.</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ fontSize: "28px", fontWeight: "normal" }}>
            Get Started with These Free Courses
          </h2>
        </Col>
      </Row>
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <Col md={3} className="mb-4" key={index}>
            {showAllFreeCourses || index <= 4 ? (
              <Card style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "2px 5px",
                    borderRadius: "3px",
                    fontWeight: "bold",
                  }}
                >
                  Free
                </div>
                <Card.Img
                  variant="top"
                  src="../meo.png"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="../meo.png"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    <p style={{ margin: 0 }}>Mèo cute</p>
                  </div>
                  <Card.Text
                    style={{ fontWeight: "bold", marginBottom: "5px" }}
                  >
                    Mèo anh Lông ngắn
                  </Card.Text>
                  <p style={{ margin: 0 }}>Courses</p>
                </Card.Body>
              </Card>
            ) : null}
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Button
            variant="outline-primary"
            onClick={toggleShowAllFreeCourses}
          >
            {showAllFreeCourses ? "Show Fewer" : "Show More"}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={{ fontSize: "28px", fontWeight: "normal" }}>
            Earn Your Degree
          </h2>
        </Col>
      </Row>
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <Col md={3} className="mb-4" key={index}>
            {index <= (showAllDegreeCourses ? 8 : 4) && (
              <Card style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "2px 5px",
                    borderRadius: "3px",
                    fontWeight: "bold",
                  }}
                >
                  Free
                </div>
                <Card.Img
                  variant="top"
                  src="../meo.png"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="../meo.png"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    <p style={{ margin: 0 }}>Mèo cute</p>
                  </div>
                  <Card.Text
                    style={{ fontWeight: "bold", marginBottom: "5px" }}
                  >
                    Mèo anh Lông ngắn
                  </Card.Text>
                  <p style={{ margin: 0 }}>Courses</p>
                </Card.Body>
              </Card>
            )}
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
          <Button
            variant="outline-primary"
            onClick={toggleShowAllDegreeCourses}
          >
            {showAllDegreeCourses ? "Show Fewer" : "Show More"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
