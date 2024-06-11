import { useState } from "react";

import { Container, Row, Form, Button } from "react-bootstrap";

import { FiEyeOff, FiEye } from 'react-icons/fi';

import './Login.css';

export default function Login() {
    
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <Row
        style={{
          background: "#f0f0f0",
          borderRadius: "15px",
          overflow: "hidden",
          width: "400px",
          margin: "20px auto",
        }}
      >
        <Container style={{ padding: "20px" }}>
          <Row>
            <h1>Login</h1>
          </Row>
          <Row>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email or username* " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div style={{ position: "relative" }}>
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password*"
                  />
                  <div
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {passwordVisible ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "orange",
                  borderRadius: "20px",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                Login
              </Button>
              <p>Lost your password?</p>
            </Form>
          </Row>
        </Container>
      </Row>
    </>
  );
}
