import React, { Component } from 'react'

import HeaderList from '../components/List/HeaderList'
import Footer from '../components/Footer'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { format } from 'date-fns'

class LaunchesList extends Component {
  state = {
      filteredNames: '',
      filteredURL: '',
      url: 'https://api.spacexdata.com/v2/launches?launch_year=2018',
      availableRocketNames: [
        'All rockets',
        'Falcon 1',
        'Falcon 9',
        'Falcon 10',
        'Falcon Heavy'
      ],
      launches: []
    }

  componentDidMount() {
   this.filteredLaunches()
  }

  filteredLaunches = () => {
    const { url } = this.state

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ launches: data })
      })
      .catch(error => console.log('error'))

      console.log(url);
  }

  handleFilterChange = event => {
    const { filteredNames, filteredURL } = this.state
    const value = event.target.value;

    if(!value.match(/all.rockets/i)) {
      this.setState({
        filteredNames: value,
        filteredURL: filteredNames.replace(/\s/, '%20'),
        url: `https://api.spacexdata.com/v2/launches?launch_year=2018&rocket_name=${filteredURL}`
      })
    } else {
      this.setState({
        filteredNames: '',
        url: 'https://api.spacexdata.com/v2/launches?launch_year=2018'
      })
    }

    this.filteredLaunches()
  }

  renderLaunches = () => {
      return (
        this.state.launches.map((element, index) => (
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
        ))
      )
  }

  renderContent = () => {

    return this.state.launches.length > 0 ? this.renderLaunches() : <div>sorry, no launches found</div>
  }

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
                {this.renderContent()}
              </Col>
            </Row>
          </Grid>
        </article>
        <Footer />
      </div>
    )
  }
}

export default LaunchesList
