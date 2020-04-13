import React from "react";
import ReactDOM from "react-dom";
import * as math from "mathjs";

import "./styles.css";
import Input from "./input";
import Button from "./button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  handleEqual = () => {
    this.setState({
      input: math.eval(this.state.input)
    });
  };

  handleClick = val => {
    // if(val === this.state.input[-1])
    this.setState({
      input: this.state.input + val
    });
  };

  handleClear = () => {
    this.setState({
      input: ""
    });
  };

  renderButtons = () => {
    return this.state.ops.map(row => {
      return (
        <div className="row">
          {row.map(digit => {
            return <Button handleClick={this.handleClick}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Input input={this.state.input} />

        {this.renderButtons()}

        <div className="row">
          <Button label="clear-btn" handleClick={this.handleClear}>
            Clear
          </Button>

          <Button label="equal" handleClick={this.handleEqual}>
            =
          </Button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
