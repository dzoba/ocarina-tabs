import React, { Component } from 'react';
import { map, orderBy } from 'lodash';
import ListItem from '../ListItem';
import './List.css';
import { valsWithKeys } from '../../utils';

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
        {
          map(orderBy(this.state.tabs, 'title'), tab => {
            return <ListItem tab={tab} key={tab.key} />
          })
        }
      </div>
    );
  }
}

export default List;
