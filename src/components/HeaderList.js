import React, { Component } from "react";
import Buttons from "./Buttons"

import { Grid, Row, Col } from "react-flexbox-grid";

class HeaderList extends Component {


  render() {
    const { launches, onChange, options } = this.props
    return (
      <header className="headerList">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <div className="headerList__bg">
                <div className="headerList__logo" />
                <h1 className="headerList--hStyle">launches 2018</h1>
                <Buttons onChange={onChange} options={options} launches={launches}/>

              </div>

            </Col>
          </Row>
        </Grid>
      </header>
    );
  }

};

export default HeaderList;
