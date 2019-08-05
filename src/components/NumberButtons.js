import React from "react";

class NumberButtons extends React.Component {
  render() {
    return (
      <div>
        <button value="1" onClick={this.props.onNumberClick}>1</button>
        <button value="2" onClick={this.props.onNumberClick}>2</button>
        <button value="3" onClick={this.props.onNumberClick}>3</button>
      </div>
    );
  }
}

export default NumberButtons;
