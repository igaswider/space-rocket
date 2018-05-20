import React from "react";
import Header from "../components/Header";
import Data from "../components/DataContainer";
import MissionLinks from "../components/MissionLinks";
import Footer from "../components/Footer";
import { format } from "date-fns";

import axios from "axios";

class LaunchDetails extends React.Component {
  state = {
    dataList: []
  };

  componentDidMount() {
    const firstRequest = "../assets/launch.json";
    const secondRequest = "../assets/rocket.json";
    const thirdRequest = "../assets/launch_site.json";

    axios
      .all([
        axios.get(firstRequest),
        axios.get(secondRequest),
        axios.get(thirdRequest)
      ])
      .then(
        (axios.spread = response => {
          this.setState({
            dataList: [
              {
                name: response[0].data.rocket.rocket_name,
                image: response[0].data.links.mission_patch_small,
                launch: new Date(format(
                  response[0].data.launch_date_local,
                  "YYYY,MM,DD"
                )),
                today: new Date(),
                details: response[0].data.details,
                company: response[1].data.company,
                heightMeters: response[1].data.height.meters,
                heightFeet: response[1].data.height.feet,
                diameterMeters: response[1].data.diameter.meters,
                diameterFeet: response[1].data.diameter.feet,
                massKg: response[1].data.mass.kg,
                massLb: response[1].data.mass.lb,
                mass: response[1].data.mass[0],
                firstFlight: format(
                  response[1].data.first_flight,
                  "DD MMMM YYYY"
                ),
                country: response[1].data.country,
                successRate: response[1].data.success_rate_pct,
                cost: response[1].data.cost_per_launch,
                description: response[1].data.description,
                fullName: response[2].data.full_name,
                locationName: response[2].data.location.name,
                locationRegion: response[2].data.location.region,
                launchPadDetails: response[2].data.details
              }
            ]
          });
          console.log(this.state.dataList[0].launch, this.state.dataList[0].today)
        })
      )
      .catch(error => {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Data dataList={this.state.dataList} />
        <MissionLinks />
        <Footer />
      </div>
    );
  }
}

export default LaunchDetails;
