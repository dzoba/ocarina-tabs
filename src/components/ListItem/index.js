import React, { Component } from 'react';
import { Link } from 'react-router';
import './ListItem.css';
import { Card, CardHeader } from 'material-ui/Card';

class ListItem extends Component {
  render() {
    const {
      title,
      author,
      key
    } = this.props.tab;
    return (
      <Link to={`/tabs/${key}`}>
        <Card className="list-link">
          <CardHeader
            title={title}
            subtitle={author}
          />
        </Card>
      </Link>
    );
  }
}

export default ListItem;
