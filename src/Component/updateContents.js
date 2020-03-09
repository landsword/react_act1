import React, { Component } from 'react';

class UpdateContents extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id : this.props.data.id,
          title : this.props.data.title,
          desc : this.props.data.desc
      }
  }
  propsHandler = function(e) {
      this.setState({
        [e.target.name] : e.target.value
      });
  }
  render() {
    return (
      <article>
        <form access='create_process' method='post' onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
        }.bind(this)}>
            <input
              type='hidden' 
              name='id' 
              value={this.state.id} />
          <p>
            <input
              type='text' 
              name='title' 
              value={this.state.title} 
              placeholder='title'
              onChange={this.propsHandler.bind(this)}
              />
          </p>
          <p>
            <input 
              type='text' 
              name='desc' 
              value={this.state.desc} 
              placeholder='description'
              onChange={this.propsHandler.bind(this)}
              />
          </p>
          <p>
            <input type='submit' />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContents;