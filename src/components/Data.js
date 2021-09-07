import React from "react";

class Data extends React.Component {
  render() {
    return (
      <main>
        <img src={this.props.image_url} alt=""></img>
        <p>{this.props.description} </p> <h2> {this.props.title}</h2>
       
      </main>
    );
  }
}
export default Data;
