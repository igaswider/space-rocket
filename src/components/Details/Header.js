import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header className="header">
          <div className="header__heading--arrow"></div>
              <div onClick={this.props.onBackClick} className=""><a href="/"><h3 className="header__heading">go back</h3></a>
                </div>
              <div className="header__logo"></div>
      </header>
    )
  }

};


export default Header;
