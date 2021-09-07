import React from "react";
import Main from "./components/Main";
import Headre from "./components/Headre";
import Footer from "./components/Footer";
import Data from "./components/Data";
class App extends React.Component {
  render() {
    return (
      <div>
        <Headre />
        <Main />
        <Footer />
        <Data />
      </div>
    );
  }
}

export default App;
