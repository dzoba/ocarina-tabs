import React, { Component } from 'react';
import { map } from 'lodash';
import logo from './logo.svg';
import './App.css';
import Note from './Note.js';

class App extends Component {
  onComponentMount() {
    this.state = {}
  }

  textChange = (e) => {
    this.setState({
      notes: e.target.value.trim().split(' ')
    })
  }

  render() {
    const {
      notes
    } = this.state || {};
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <textarea type="text" onChange={this.textChange} />
        </p>
        <p>

          {
            map(notes, (note, idx) => {
              return <Note note={note} idx={idx} />
            })
          }
        </p>

      </div>
    );
  }
}

export default App;
