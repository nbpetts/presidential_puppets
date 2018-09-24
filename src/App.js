import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: '0px',
      left: '0px',
      right: '0px',
    };
    this.bind;
  }

  handleKeyDown = () => {
    this.setState({ top: '10px' });
  };
  handleKeyDown = () => {
    this.setState({ top: '0px' });
  };
  render() {
    const styles = {
      top: this.state.top,
      left: this.state.left,
      right: this.state.right,
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Presidential Puppets!</h1>
        </header>
        <main>
          <div className="carter-wrapper">
            <div className="carter-face" />
            <div
              className="carter-mouth"
              style={styles}
              onKeyDown={() => this.handleKeyDown()}
              onKeyUp={() => this.handleKeyUp()}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
