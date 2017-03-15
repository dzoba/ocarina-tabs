import React, { Component } from 'react';
import { Link } from 'react-router';
import './ListItem.css';

class ListItem extends Component {
  render() {
    const {
      title,
      author,
      key
    } = this.props.tab;
    return (
      <Link to={`/tabs/${key}`}>
        <div className="ListItem">
          {title} - {author}
        </div>
      </Link>
    );
  }
}

export default ListItem;
