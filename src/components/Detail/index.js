import React, { Component } from 'react';
import { map } from 'lodash';
import './Detail.css';
import Note from '../Note';
import transposer from 'note-transposer';
import { notesConvertToTransposer, notesConvertFromTransposer } from '../../utils/';

class Detail extends Component {
  componentWillMount = () => {
    this.init();
  }

  init = (nextProps) => {
    const props = nextProps || this.props;
    this.state = {
      db: window.firebase.database()
    };
    this.state.db.ref(`/tabs/${props.params.tabId}`).once('value').then((snapshot) => {
      const tab = snapshot.val() || {};
      this.setState({
        tab
      })
      this.updateState('body', tab.body)
    });
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.params.tabId !== nextProps.params.tabId) {
      this.init(nextProps);
    }
  }

  updateState = (param, value) => {
    this.setState({
      tab: Object.assign(this.state.tab, {[param]: value})
    })
  }

  transposeUp = () => {
    const transposerNotes = notesConvertToTransposer(this.state.tab.body);
    const transposedNotes = transposerNotes.map(transposer('2M'));
    const ourNewNotes =  notesConvertFromTransposer(transposedNotes);

    this.setState({
      tab: Object.assign(this.state.tab, {body:ourNewNotes})
    })

  }

  transposeDown = () => {
    const transposerNotes = notesConvertToTransposer(this.state.tab.body);
    const transposedNotes = transposerNotes.map(transposer('-2M'));
    const ourNewNotes =  notesConvertFromTransposer(transposedNotes);

    this.setState({
      tab: Object.assign(this.state.tab, {body:ourNewNotes})
    })
  }

  submit = () => {
    let key = this.props.params.tabId;
    if (key === 'new') {
      key = this.state.db.ref('/tabs/').push().key;
    }

    this.state.db.ref(`/tabs/${key}`).update(this.state.tab);
  }

  render() {
    const tab = this.state.tab || {title: '', body: ''};
    return (
      <div className="Detail" key={this.props.params.tabId}>
        <div className="Detail-header">
          <input type="text" value={tab.title} onChange={(e) => { this.updateState('title', e.target.value) }} />
        </div>
        <div className="Detail-intro">
          <textarea value={tab.body} onChange={(e) => { this.updateState('body', e.target.value) }} />
        </div>
        <div>
          {
            map(tab.body && tab.body.trim().split(' '), (note, idx) => {
              return <Note note={note} key={idx} />
            })
          }
        </div>
        <button onClick={this.submit}>Write To DB</button>
        <button onClick={this.transposeUp}>Transpose Up</button>
        <button onClick={this.transposeDown}>Transpose Down</button>
      </div>
    );
  }
}

export default Detail;
