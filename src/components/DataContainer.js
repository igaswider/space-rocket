import React, { Component } from "react";
import Data from "./Data";

class DataContainer extends Component {
  renderData() {
    return this.props.dataList.map((el, index) => {
      return (
        <Data
          details={el.details}
          nameRocket={el.name}
          image={el.image}
          launch={el.launch}
          today={el.today}
          company={el.company}
          heightMeters={el.heightMeters}
          heightFeet={el.heightFeet}
          diameterMeters={el.diameterMeters}
          diameterFeet={el.diameterFeet}
          massKg={el.massKg}
          massLb={el.massLb}
          firstFlight={el.firstFlight}
          country={el.country}
          successRate={el.successRate}
          costPerLaunch={el.cost}
          description={el.description}
          fullName={el.fullName}
          locationName={el.locationName}
          locationRegion={el.locationRegion}
          launchPadDetails={el.launchPadDetails}
          key={index}
        />
      );
    });
  }

  renderContent() {
    if (this.props.dataList.length !== -1) {
      return this.renderData();
    }
    return console.log("error");
  }

  render() {
    return <section>{this.renderContent()}</section>;
  }
}

export default DataContainer;
