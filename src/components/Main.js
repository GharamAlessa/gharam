import React from "react";

import HornedBeast from "./HornedBeast";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          <h1>{this.state.pageTitle}</h1>

          {this.state.data.map((item) => {
            return (
              <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                handleopen={this.props.handleopen}
                getSelectedBeastData={this.props.getSelectedBeastData}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Main;
