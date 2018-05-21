import React, { Component } from "react";
import { format } from "date-fns";

import { Grid, Row, Col } from "react-flexbox-grid";

class Launch extends Component  {

  renderLaunches = () => {
    const { launches } = this.props;

    return launches.map((element, index) => {
      return (

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
      )
    })
  }

  render() {
    return (
      <article className="launch">
        <Grid fluid>
          <Row>
            <Col xs={6} md={6}>
              {this.renderLaunches()}
            </Col>
          </Row>
        </Grid>
      </article>
    )
  }

}

export default Launch;
