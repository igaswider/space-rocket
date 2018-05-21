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
        console.log(this.state)
      })
      .catch(error => console.log('error'))
  }

  render() {
    const { launches } = this.state
    return (
      <div>
        <HeaderList/>
        <Launch launches={launches}/>
        <Footer />
      </div>
    );
  }
}

export default LaunchesList;
