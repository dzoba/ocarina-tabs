import React, { Component } from 'react';
import { map } from 'lodash';
import ListItem from '../ListItem';
import './List.css';
import valsWithKeys from '../../utils';

class List extends Component {
  componentWillMount() {
    this.state = {};
    window.firebase.database().ref('/tabs').once('value').then((snapshot) => {
      this.setState({
        tabs: valsWithKeys(snapshot)
      })
    });
  }
  render() {
    return (
      <div className="List">
        List view
        {
          map(this.state.tabs, tab => {
            return <ListItem tab={tab} key={tab.key} />
          })
        }
      </div>
    );
  }
}

export default List;
