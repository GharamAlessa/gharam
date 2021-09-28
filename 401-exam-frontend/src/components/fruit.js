import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export class fruit extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img>${this.props.img}</Card.Img>
          <Card.Body>
            <Card.Title>${this.props.title}</Card.Title>
            <Card.Text>${this.props.price}</Card.Text>

            <Button variant="primary">Add To Fav</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default fruit;
