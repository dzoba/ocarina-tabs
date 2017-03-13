import React, { Component } from 'react';
import { map } from 'lodash';
import './Detail.css';
import Note from '../Note';

class Detail extends Component {
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
      <div className="Detail">
        <div className="Detail-header">
          Ocarina Tabs
        </div>
        <p className="Detail-intro">
          <textarea type="text" onChange={this.textChange} />
        </p>
        <p>
          {
            map(notes, (note, idx) => {
              return <Note note={note} key={idx} />
            })
          }
        </p>

      </div>
    );
  }
}

export default Detail;
