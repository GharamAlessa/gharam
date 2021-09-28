import React, { Component } from 'react'
import {Form,Modal} from 'react-bootstrap'

export class logInForm extends Component {
  constructor(props) {
    super(props);
    fruits =[];
    
  }
    render() {
        return (
            <>
         <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>401-exam</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
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
  
</Form>
  </Modal.Body>

  <Modal.Footer>
  <Button variant="primary" type="submit">
    continue
  </Button>
  </Modal.Footer>
</Modal.Dialog> 
            </>
        )
    }
}

export default logInForm
