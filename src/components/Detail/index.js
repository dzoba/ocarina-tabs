import React, { Component } from 'react';
import { map, get } from 'lodash';
import './Detail.css';
import Note from '../Note';

class Detail extends Component {
  componentWillMount() {
    this.state = {};
    window.firebase.database().ref(`/tabs/${this.props.params.tabId}`).once('value').then((snapshot) => {
      const tab = snapshot.val();
      this.setState({
        tab
      })
      this.textChange(tab.body)
    });
  }

  textChange = (value) => {
    this.setState({
      notes: value.trim().split(' ')
    })
  }

  updateState = (param, value) => {
    this.setState({
      [param]: value
    })
  }

  render() {
    const {
      notes
    } = this.state || {};
    const tab = get(this.state, 'tab', {})

    return (
      <div className="Detail">
        <div className="Detail-header">
          {tab.title}
        </div>
        <p className="Detail-intro">
          {
            tab.body
            ? <textarea type="text" defaultValue={tab.body} onChange={(e) => { this.textChange(e.target.value) }} />
            : null
          }

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
