import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <ul>
        <li><a
          href='/create'
          onClick={function(e) {
            e.preventDefault();
            this.props.controlMode('create');
          }.bind(this)}>create</a></li>
        <li><a
          href='/update'
          onClick={function(e) {
            e.preventDefault();
            this.props.controlMode('update');
          }.bind(this)}>update</a></li>
        <li><input
          type='button'
          value='delete'
          onClick={function(e) {
            e.preventDefault();
            this.props.deleteContent();
          }.bind(this)} /></li>
      </ul>
    );
  }
}

export default Control;