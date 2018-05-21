import React, { Component } from 'react';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';

import './styles/css/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewName: 'list'
    }

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent () {
    const { viewName } = this.state;

    switch(viewName) {
      case 'list':
      return (
        <LaunchesList
          onLaunchClick={this.handleLaunchClick}
        />
      );

      case 'details':
      return (
        <LaunchDetails
          onBackClick={this.handleBackClick}
        />
      );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    return (
      <main>
        {this.activeViewComponent}
      </main>
    );
  }
}

export default App;
