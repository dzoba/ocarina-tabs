import React, { Component } from 'react';
import { map } from 'lodash';
import './main.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="MainLayout">
        <div className="MainLayout-header">
          Ocarina Tabs
        </div>
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default MainLayout;
