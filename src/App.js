import React, { Component } from 'react';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';

import axios from "axios";

import './styles/css/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewName: 'list',
      launches: []
    }

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidMount() {
    axios.get('../assets/launches.json')
      .then(response => {
        this.setState({ launches: response.data })
      })
      .catch(error => console.log('error'))
  }

  get activeViewComponent () {
    const { viewName, launches } = this.state;

    switch(viewName) {
      case 'list':
      return (
        <LaunchesList launches={launches}
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
