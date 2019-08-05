import React from "react";
import Display from "./components/Display";
import NumberButtons from "./components/NumberButtons";
import OperatorButtons from "./components/OperatorButtons";

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const OPERATORS = ["+", "-", "*", "/", "="];

class App extends React.Component {
  initialState = {
    displayText: "",
    operations: [],
    lastOperation: []
  };
  state = JSON.parse(JSON.stringify(this.initialState));
  onNumberClick = event => {
    console.log("clicked number ", event.target.value);
    const { operations } = this.state;
    let final;
    if (
      operations.length > 0 &&
      operations[operations.length - 1].type === "NUMBER"
    ) {
      const old = operations[operations.length - 1].value + "";
      const newNumber = event.target.value + "";
      final = Number(old + newNumber);
      operations[operations.length - 1].value = final;
    } else {
      operations.push({
        type: "NUMBER",
        value: event.target.value
      });
    }
    this.setState(
      {
        operations
      },
      this.getDisplayText
    );
  };
  onOperatorClick = event => {
    console.log("clicked Operator ", event.target.value);
    const { operations } = this.state;
    if (operations.length > 0) {
      const lastInput = operations[operations.length - 1];
      if (lastInput.type === "OPERATOR") {
        lastInput.value = event.target.value;
      } else {
        operations.push({ type: "OPERATOR", value: event.target.value });
      }
      this.setState(
        {
          operations
        },
        this.getDisplayText
      );
    }
  };
  onEqualsClick = event => {
    console.log("clicked Equals ", event.target.value);
    const { operations } = this.state;
    if (operations.length > 0) {
      if (operations.length >= 3) {
        this.calculate();
        return;
      } else {
        console.error("Nothing to perform, not enough values entered");
        return;
      }
    }
  };
  onResetClick = () => {
    console.log("===initial state", this.initialState);
    this.setState({
      displayText: "",
      operations: [],
      lastOperation: []
    });
  };
  getDisplayText = () => {
    const displayText = this.state.operations.reduce(
      (displayText, operation) => {
        return displayText + " " + operation.value;
      },
      ""
    );
    this.setState({
      displayText
    });
  };
  calculate = () => {
    console.log("calculating...", this.state.operations);
    const result = this.state.operations.reduce((acc, part) => {
      return acc + " " + part.value;
    }, "");
    console.log('==== calculate()', result)
    this.setState({
      displayText: eval(result),
      operations: [
        {
          type: "NUMBER",
          value: eval(result)
        }
      ]
    });
  };
  handleKeyDown = event => {
    console.log(event.target);
  };
  onSwitchSign = () => {
    const { operations } = this.state;
    if (operations.length > 0) {
      const lastInput = operations[operations.length - 1];
      if (lastInput.type === "NUMBER") {
        lastInput.value = lastInput.value * -1;
        this.setState(
          {
            operations
          },
          this.getDisplayText
        );
      } else if (lastInput.type === "OPERATION") {

      }
    }
  };
  render() {
    return (
      <div onInput={this.handleKeyDown}>
        <Display displayText={this.state.displayText} />
        <NumberButtons onNumberClick={this.onNumberClick} />
        <OperatorButtons
          onOperatorClick={this.onOperatorClick}
          onEqualsClick={this.onEqualsClick}
        />
        <button onClick={this.onSwitchSign}>+/-</button>
        <button onClick={this.onResetClick}>Reset</button>
      </div>
    );
  }
}

export default App;
