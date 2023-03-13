import React, { Component, createContext } from "react";
import data from "./components/data";

export const ValueContext = createContext();

class Context extends Component {
  state = {
    voteValue: 0,
    data: data,
  };

  setValue = (val) => {
    this.setState({ voteValue: val });
  };

  render() {
    return (
      <ValueContext.Provider value={{ ...this.state, setValue: this.setValue }}>
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}

export default Context;
