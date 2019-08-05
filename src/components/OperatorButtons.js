import React from "react";

class OperatorButtons extends React.Component {
  render() {
    return (
      <div>
        <button value="+" onClick={this.props.onOperatorClick}>
          +
        </button>
        <button value="-" onClick={this.props.onOperatorClick}>
          -
        </button>
        <button value="*" onClick={this.props.onOperatorClick}>
          *
        </button>
        <button value="/" onClick={this.props.onOperatorClick}>
          /
        </button>
        <button value="=" onClick={this.props.onEqualsClick}>
          =
        </button>
      </div>
    );
  }
}

export default OperatorButtons;
