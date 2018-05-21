import React, { Component } from "react";

import HeaderList from "../components/HeaderList";
import Launch from "../components/Launch";
import Footer from "../components/Footer";
import { format } from "date-fns";

import axios from "axios";

class LaunchesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      launches: []
    }
  }

  componentDidMount() {
    axios.get('../assets/launches.json')
      .then(response => {
        this.setState({ launches: response.data })
      })
      .catch(error => console.log('error'))
  }

  render() {
    const { launches } = this.state
    const { onLaunchClick } = this.props
    return (
      <div>
        <HeaderList launches={launches}/>
        <Launch onLaunchClick={onLaunchClick} launches={launches}/>
        <Footer />
      </div>
    );
  }
}

export default LaunchesList;
