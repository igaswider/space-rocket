import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';


const Header = () => {
  return (

    <header className="header">
      <Grid fluid>
        <Row>
          <Col xs={3} md={3}>
              <div className="header__heading--arrow"></div>
              <div className=""><a href="/"><h3 className="header__heading">go back</h3></a>
              </div>
          </Col>
          <Col xs={6} md={6}>
            <div className="header__logo">
            </div>
          </Col>
        </Row>
      </Grid>
    </header>
  )
};


export default Header;
