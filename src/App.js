import React from "react";
import Main from "./components/Main";
import Headre from "./components/Headre";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Headre />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
