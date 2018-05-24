import React, { Component } from "react";

import HeaderList from "../components/HeaderList";
import Footer from "../components/Footer";
import { Grid, Row, Col } from "react-flexbox-grid";
import { format } from "date-fns";

class LaunchesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNames: "",
      filteredURL: "",
      availableRocketNames: [
        "All rockets",
        "Falcon 1",
        "Falcon 9",
        "Falcon Heavy"
      ],
      launches: []
    };
  }

  componentDidMount() {
   this.filteredLaunches();
  }

  filteredLaunches() {
    const { filteredNames, filteredURL } = this.state;
    let url = "https://api.spacexdata.com/v2/launches/all";

    if(filteredNames !== "") {
      url = `https://api.spacexdata.com/v2/launches?rocket_name=${filteredURL}`
    }

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ launches: data });
      })
      .catch(error => console.log("error"));
      console.log(url);
  }

  handleFilterChange = event => {
    const { filteredNames } = this.state
    const value = event.target.value;

    this.setState({ filteredNames: value, filteredURL: filteredNames.replace(/\s/, '%20') });
    this.filteredLaunches()
  };

  render() {
    const { launches, availableRocketNames } = this.state;
    return (
      <div>
        <HeaderList
          onChange={this.handleFilterChange}
          options={availableRocketNames}
          launches={launches}
        />
        <article className="launch">
          <Grid fluid>
            <Row>
              <Col xs={6} md={6}>
                {launches.map((element, index) => (
                  <div
                    className="launch__details"
                    onClick={this.props.onLaunchClick}
                    key={index}
                  >
                    <h3 className="launch__details--date">
                      {format(element.launch_date_local, "DD MMMM YYYY")}
                    </h3>
                    <p className="launch__details">
                      <span className="launch__details--hStyle">rocket:</span>
                      <span className="launch__details--spec">
                        {element.rocket.rocket_name}
                      </span>
                      <span className="launch__details--hStyle">|</span>
                      <span className="launch__details--hStyle">
                        launch site:
                      </span>
                      <span className="launch__details--spec">
                        {element.launch_site.site_name_long}
                      </span>
                    </p>
                  </div>
                ))};
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
