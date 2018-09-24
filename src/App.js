import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carter: {
        top: '0px',
        left: '0px',
      },
      reagan: {
        top: '0px',
        left: '0px',
      },
    };
    this.bind;
  }
  getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  handleKeyDown = event => {
    console.log(event.key);
    const leftOffset = this.getRndInteger(-10, 10);
    const leftValue = leftOffset + 'px';
    switch (event.key) {
      case 'j':
        this.setState({ carter: { top: '10px', left: leftValue } });
        break;
      case 'f':
        this.setState({ reagan: { top: '10px', left: leftValue } });
        break;
      default:
        break;
    }
  };
  handleKeyUp = () => {
    const reset = { top: '0px', left: '0px' };
    this.setState({ carter: reset, reagan: reset });
  };
  render() {
    const carterStyles = {
      top: this.state.carter.top,
      left: this.state.carter.left,
    };
    const reaganStyles = {
      top: this.state.reagan.top,
      left: this.state.reagan.left,
    };
    return (
      <div
        className="App"
        onKeyDown={event => this.handleKeyDown(event)}
        onKeyUp={() => this.handleKeyUp()}
        tabIndex="0"
      >
        <header className="App-header">
          <h1 className="App-title">Presidential Puppets!</h1>
        </header>
        <main>
          <div className="reagan-wrapper">
            <div className="reagan-face" />
            <div className="reagan-mouth" style={reaganStyles} />
          </div>
          <div className="carter-wrapper">
            <div className="carter-face" />
            <div className="carter-mouth" style={carterStyles} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
