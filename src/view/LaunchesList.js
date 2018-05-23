import React, { Component } from "react";

import HeaderList from "../components/HeaderList";
import Footer from "../components/Footer";
import { Grid, Row, Col } from "react-flexbox-grid";
import { format } from "date-fns";

class LaunchesList extends Component {
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

  get filteredLaunches() {
    const { filteredNames } = this.state
    const { launches } = this.props

    if(!filteredNames) return launches;
    return launches.filter(launch => launch.rocket.rocket_name === filteredNames);
  }

  handleFilterChange = (event) => {
    const value = event.target.value;
    const { launches } = this.props;
    console.log(launches)
    this.setState({filteredNames: value});
  }

  render() {
    const { launches } = this.props
    return (
      <div>
        <HeaderList onChange={this.handleFilterChange} options={this.availableRocketNames} launches={launches}/>
        <article className="launch">
          <Grid fluid>
            <Row>
              <Col xs={6} md={6}>
              {this.filteredLaunches.map((element,index) =>
                <div className="launch__details" onClick={this.props.onLaunchClick} key={index}>
                  <h3 className="launch__details--date">{format(element.launch_date_local, "DD MMMM YYYY")}</h3>
                  <p className="launch__details">
                    <span className="launch__details--hStyle">rocket:</span>
                    <span className="launch__details--spec">{element.mission_name}</span>
                    <span className="launch__details--hStyle">|</span>
                    <span className="launch__details--hStyle">launch site:</span>
                    <span className="launch__details--spec">{element.launch_site.site_name_long}</span>
                  </p>
                </div>
              )};
              </Col>
            </Row>
          </Grid>
        </article>
        <Footer />
      </div>
    );
  }
}

export default LaunchesList;
