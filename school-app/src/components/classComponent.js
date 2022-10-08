import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getRandomText = this.getRandomText.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  getRandomText() {
    const randomTexts = ["Esto es un texto random", "texto 2", "texto 3"];
    return randomTexts.map((text) => <p>{text}</p>);
  }

  render() {
    return (
      <div>
        <p>Has hecho click {this.state.count} veces</p>
        <button onClick={this.handleClick}>Presiona</button>
        {this.getRandomText()}
      </div>
    );
  }
}
