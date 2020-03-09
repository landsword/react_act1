import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <a href='/'
          onClick={function(e) {
              e.preventDefault();
              this.props.loadContent();
          }.bind(this)}
        >
          <h1>{this.props.title}</h1>
        </a>
      </header>
    );
  }
}

export default Header;