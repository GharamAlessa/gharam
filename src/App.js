import React from "react";
import Main from "./components/Main";
import Headre from "./components/Headre";
import Footer from "./components/Footer";
import HornedData from "./assets/HornedData.json";
import SelectedBeast from "./components/SlecetedBeast";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      description: "",
      img: "",
      title: "",
      filterData: HornedData,
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
  getNumOfHorns = (event) => {
    let horns = event.target.value;
    let Data = HornedData.filter((item) => {
      if (item.horns === horns) {
        return true;
      }
    });
    this.setState({
      filterData: Data,
    });
  };

  render() {
    return (
      <div>
        <Headre />
        <Form.Label>How many Horns?</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={this.getNumOfHorns}
        >
          <option value="All">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">Wow</option>
        </Form.Select>

        <Main
          data={this.state.filterData}
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
