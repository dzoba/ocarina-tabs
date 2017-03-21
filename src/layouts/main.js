import React, { Component } from 'react';
import { Link } from 'react-router';
import './main.css';
import { AppBar, Drawer, MenuItem} from 'material-ui'

class MainLayout extends Component {
  componentWillMount = () => {
    this.state = {}
  }

  handleToggle = () => {
    this.setState({
      leftNavOpen: !this.state.leftNavOpen
    })
  }

  closeLeftNav = () => {
    this.setState({
      leftNavOpen: false
    })
  }

  render() {
    return (
      <div className="MainLayout">
        <AppBar
          title="Ocarina Tabs"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{backgroundColor: 'black', marginBottom: '15px'}}
        >
          <Drawer
            open={this.state.leftNavOpen}
            docked={false}
            onRequestChange={(leftNavOpen) => { this.setState({leftNavOpen})}}
          >
            <MenuItem
              primaryText="Home"
              containerElement={<Link to="/" />}
              onTouchTap={this.closeLeftNav}
            />
            <MenuItem
              primaryText="Make a new tab"
              containerElement={<Link to="/tabs/new" />}
              onTouchTap={this.closeLeftNav}
            />
          </Drawer>
        </AppBar>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
