import React from "react";
import LogInForm from "./components/logInForm";
import FruitData from "./components/FruitData";
import FavFrruit from "./components/favFrruit";
export class App extends Component {
  render() {
    return (
      <>
        <LogInForm />
        <FruitData />
        <Fruit />
        <FavFrruit />
      </>
    );
  }
}

export default App;
