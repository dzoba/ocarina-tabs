import React, { Component } from 'react';
import { map } from 'lodash';
import './Detail.css';
import Note from '../Note';


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
        <p className="Detail-intro">
          <textarea value={tab.body} onChange={(e) => { this.updateState('body', e.target.value) }} />
        </p>
        <p>
          {
            map(tab.body && tab.body.trim().split(' '), (note, idx) => {
              return <Note note={note} key={idx} />
            })
          }
        </p>
        <button onClick={this.submit}>Write To DB</button>
      </div>
    );
  }
}

export default Detail;
