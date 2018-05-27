import React, { Component } from "react";
import Buttons from "./Buttons"

class HeaderList extends Component {


  render() {
    const { launches, onChange, options } = this.props
    return (
      <header className="headerList">
              <div className="headerList__bg">
                <div className="headerList__logo" />
                <h1 className="headerList--hStyle">launches 2018</h1>
                <Buttons onChange={onChange} options={options} launches={launches}/>

              </div>
      </header>
    );
  }

};

export default HeaderList;
