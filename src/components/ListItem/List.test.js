import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItem />, div);
});
