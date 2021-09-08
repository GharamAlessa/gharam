import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
    };
  }
  voting = () => {
    this.setState({
      vote: this.state.vote + 1,
    });
  };

  render() {
    return (
      <div>


        <Col>
          <Card  style={{ width: "18rem" }}>
            <Card.Body>

              <Card.Img
                onClick={this.voting}
                variant="top"
                src={this.props.image_url}
              />
              <Card.Title>{this.props.title}❤️{this.state.vote}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>

        </Col>

      </div>

    );
  }
}
export default HornedBeast;
