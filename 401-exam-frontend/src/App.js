import React from "react";
import LogInForm from './Component/logInForm'
import FruitData from './Component/FruitData';
export class App extends Component
 {
  render() {
    return (
      <>
        <LogInForm />
        <FruitData/>
      </>
    );
  }
}

export default App;
