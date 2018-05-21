import React, { Component } from "react";
import Buttons from "./Buttons"

import { Grid, Row, Col } from "react-flexbox-grid";

class HeaderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredNames: ''
    }

  }

  get availableRocketNames() {
    const { launches } = this.props
    const rocketNames = launches
      .map(element => {
        return element.rocket.rocket_name
      })
      .filter((value,index, arr) => {
        return arr.indexOf(value) === index
      })
      return rocketNames;
  }

  filteredLaunches() {
    const { filteredNames } = this.state
    const { launches } = this.props

    if(!filteredNames) return launches;
    return launches.filter(launch => launch.rocket.rocket_name === filteredNames);
  }

  handleFilterChange = (event) => {

    const value = event.target.value
    this.setState({filteredNames: value});
  }

  render() {
const { launches } = this.props
  const { filteredNames } = this.state
    return (
      <header className="headerList">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <div className="headerList__bg">
                <div className="headerList__logo" />
                <h1 className="headerList--hStyle">launches 2018</h1>
                <Buttons onChange={this.handleFilterChange} options={this.availableRocketNames} launches={launches}/>

              </div>

            </Col>
          </Row>
        </Grid>
      </header>
    );
  }

};

export default HeaderList;
