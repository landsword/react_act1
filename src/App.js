import React, { Component } from 'react';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Control from './Component/Control';
import ReadContents from './Component/readContents';
import CreateContents from './Component/createContents';
import UpdateContents from './Component/updateContents';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.last_object_id = 3;
    this.state = {
      mode: 'home',
      select_id: 1,
      main: {title: 'WEBn-React', desc: 'It`s WEBn - React section :)'},
      object: [
        {id: 1, title: 'HTML', desc: 'HyperText Markup Language'},
        {id: 2, title: 'CSS', desc: 'Casecade Style Sheet'},
        {id: 3, title: 'Javascript', desc: 'More Interactive'}
      ]
    }
  }
getReadContent = function() {
  let data = null;
  for (let i = 0; i < this.state.object.length; i++) {
    if (this.state.select_id === this.state.object[i].id) {
      data = this.state.object[i];
      break;
    }
  }
  return data;
}
onChangeMode = function() {
  let _title, _desc, _article, _content = null;
  let main = this.state.main;
  let object = this.state.object;
  let mode = this.state.mode;
  if (mode === 'home') {
    _title = main.title;
    _desc = main.desc;
    _article = <ReadContents title={_title} desc={_desc}></ReadContents>
  } else if (mode === 'read') {
    _content = this.getReadContent();
    _article = <ReadContents title={_content.title} desc={_content.desc}></ReadContents>
  } else if (mode === 'create') {
    _article = <CreateContents 
      onSubmit={function(_title, _desc) {
        let _contents = Array.from(object);
        this.last_object_id++;
        _contents.push({id: this.last_object_id, title: _title, desc: _desc});
        this.setState({
          object: _contents,
          mode: 'read',
          select_id: this.last_object_id
        });
    }.bind(this)}></CreateContents>
  } else if (mode === 'update') {
    _content = this.getReadContent();
    _article = <UpdateContents
      data={_content}
      onSubmit={function(_id, _title, _desc) {
       let _contents = Array.from(object);
        for (let i = 0; i < _contents.length; i++) {
          if ( _contents[i].id === _id) {
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
        }
        this.setState({
          object: _contents,
          mode: 'read'
        });
      }.bind(this)}></UpdateContents>
    }
  return _article;
}

  render() {
    return (
      <div className="App">
        <Header 
          loadContent={function() {
            this.setState({
              mode: 'home'
            });
          }.bind(this)}
          title={this.state.main.title}></Header>
        <Nav
          data={this.state.object}
          readContent={function(id) {
            this.setState({
              mode: 'read',
              select_id: Number(id)
            });
          }.bind(this)}
        ></Nav>
        <Control
          controlMode={function(_mode) {
            this.setState({
              mode: _mode
            });
          }.bind(this)}
          deleteContent={function() {
            if(window.confirm('Really??')) {
              let _content = this.getReadContent(); // id, title, desc
              let _contents = [];
              let cnt = 0;
              for (let i = 0; i < this.state.object.length; i++) {
                if (_content.id !== this.state.object[i].id) {
                  _contents[cnt] = this.state.object[i];
                  cnt++;
                } else {
                  continue;
                }
              }
              this.setState({
                mode: 'home',
                object: _contents
              });
              alert('Content Delete success.');
            } else {
              alert('Delete cancel.');
            }
          }.bind(this)}
        ></Control>
        {this.onChangeMode()}
      </div>
    );
  }
}

export default App;
