import React from "react";

import axios from "axios";
import queryString from "querystring";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // axios.get("/users").then((e) => console.log(e));
    axios.get("/users").then((e) => console.log(e));
  }
  render() {
    return (
      <div className="App">
        <h1 className="hello">App</h1>
      </div>
    );
  }
}

export default App;
