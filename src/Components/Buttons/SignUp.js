import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow} className="me-2">
      <i class="fa fa-user"></i> SignUp
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="text" placeholder="John" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter LastName</Form.Label>
              <Form.Control type="text" placeholder="Smith" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" placeholder="example123@.com" required/>
              {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Retype - Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agree" />
            </Form.Group> */}
            <Button variant="outline-success" type="submit" className="w-100">
              SignUp
            </Button>
          </Form>
          <Button variant="outline-primary" className="btn w-100 mt-4">
            <i className="fa fa-google me-2"></i>SignUp With Google
          </Button>
          <Button variant="outline-primary" className="btn w-100 mt-4">
            <i className="fa fa-facebook me-2"></i>SignUp With Facebook
          </Button>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
      </Modal>
    </>
  );
}
