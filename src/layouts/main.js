import React, { Component } from 'react';
import { Link } from 'react-router';
import './main.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="MainLayout">
        <div className="MainLayout-header">
          <Link to={'/'}>Ocarina Tabs</Link>
          <Link to={'/tabs/asdf1234'}> Detail View</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
