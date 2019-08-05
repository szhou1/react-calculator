import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.displayText}</p>
        <input value={this.props.displayText}></input>
      </div>
    );
  }
}

export default Display;
