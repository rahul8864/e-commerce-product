import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Button, FloatingLabel } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="assets/3.png" width="400px" height="400px" />
          </div>
          <div className="col-md-6">
            {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
            <Form>
            <FloatingLabel
                controlId="floatingInput"
                label="Full Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="John Smith" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button type="submit" variant="outline-primary">Send Message</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
