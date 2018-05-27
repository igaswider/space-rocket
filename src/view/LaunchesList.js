import React, { Component } from 'react';

import HeaderList from '../components/List/HeaderList';
import Footer from '../components/Footer';
import { format } from 'date-fns';

class LaunchesList extends Component {
  state = {
      filteredNames: '',
      filteredURL: '',
      availableRocketNames: [
        'All rockets',
        'Falcon 1',
        'Falcon 9',
        'Falcon Heavy'
      ],
      launches: []
    };

  componentDidMount() {
   this.filteredLaunches();
  }

  filteredLaunches() {
    const { filteredNames, filteredURL } = this.state;
    let url = 'https://api.spacexdata.com/v2/launches?launch_year=2018';

    if(filteredNames !== '') {
      url = `https://api.spacexdata.com/v2/launches?launch_year=2018&rocket_name=${filteredURL}`
    }

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ launches: data });
      })
      .catch(error => console.log('error'));

      console.log(url);
  }

  handleFilterChange = event => {
    const { filteredNames } = this.state
    const value = event.target.value;

    !value.match(/all.rockets/i) ? this.setState({ filteredNames: value, filteredURL: filteredNames.replace(/\s/, '%20') }) : this.setState({ filteredNames: '', filteredURL: 'https://api.spacexdata.com/v2/launches?launch_year=2018' });

    this.filteredLaunches()
  };

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

    return this.state.launches.length > 0 ? this.renderLaunches() : <div>sorry, no launches</div>
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

                {this.renderContent()}
        </article>
        <Footer />
      </div>
    );
  }
}

export default LaunchesList;
