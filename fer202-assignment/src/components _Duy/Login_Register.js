import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Login_Register.css";  

export default function Login_Register() {
  const [signIn, setSignIn] = useState(true);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Container className="p-5 shadow form-container">
        <Form>
          <h2 className="mb-4">{signIn ? "Login" : "Register"}</h2>
          {!signIn && (
            <Form.Group controlId="formBasicName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
          )}
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {signIn && (
            <Form.Text className="text-muted mb-3">
              <a href="#">Forgot your password?</a>
            </Form.Text>
          )}
          <Button variant="primary" type="submit" className="w-100 mb-2">
            {signIn ? "Login" : "Sign Up"}
          </Button>
          <Button
            variant="link"
            className="w-100"
            onClick={() => setSignIn(!signIn)}
          >
            {signIn ? "Register" : "Sign In"}
          </Button>
        </Form>
      </Container>
    </Container>
  );
}
