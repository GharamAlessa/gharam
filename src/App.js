import React from "react";
import Main from "./components/Main";
import Headre from "./components/Headre";
import Footer from "./components/Footer";
import HornedData from "./assets/HornedData.json";
import SelectedBeast from "./components/SlecetedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      description: "",
      img: "",
      title: "",
    };
  }
  handleopen = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  getSelectedBeastData = (title, img, description) => {
    this.setState({
      title: title,
      img: img,
      description: description,
    });
  };
  render() {
    return (
      <div>
        <Headre />
        <Main
          data={HornedData}
          handleopen={this.handleopen}
          getSelectedBeastData={this.getSelectedBeastData}
        />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          img={this.state.img}
          description={this.state.description}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
