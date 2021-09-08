import React from "react";


import HornedBeast from "./HornedBeast";

import HornedData from '../assets/HornedData.json';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";






class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      pageInfo: HornedData,
      pageTitle: ''

    };
  }


  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          <h1>{this.state.pageTitle}


          </h1>

          {
            this.state.pageInfo.map(item => {
              return (
                <HornedBeast
                  title={item.title}
                  image_url={item.image_url}
                  description={item.description}
                />
              );
            })
          }
        </Row>
      </div>

    );
  }
}


export default Main;
