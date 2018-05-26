import React, { Component } from "react";

function getTimeDiff({ to, from }) {
  return Math.abs(to - from);
}

class Counter extends Component {
  state = {
    secondsLeft: getTimeDiff(this.props),
    active: false
  };

  componentDidMount() {
    this.togglePlay();
  }

  start = () => {
    this.counterInterval = setInterval(this.tick, 1000);
  };

  tick = () => {
    const { secondsLeft } = this.state;
    const newState = {
      secondsLeft: secondsLeft - 1
    };

    if (newState.secondsLeft === 0) {
      newState.active = false;
      this.stop();
    }
    this.setState(newState);
  };

  stop = () => {
    clearInterval(this.counterInterval);
  };

  togglePlay = () => {
    const { active, secondsLeft } = this.state;
    if (secondsLeft !== 0) {
      this.setState({ active: !active });
      if (active) {
        this.stop();
      } else {
        this.start();
      }
    }
  };

  renderTimeLabel = () => {
    return <span>{this.state.secondsLeft} TO START</span>;
  };

  render() {
    return <div className="content__timetable">{this.renderTimeLabel()}</div>;
  }
}

export default Counter;
