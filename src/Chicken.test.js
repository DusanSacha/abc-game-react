import React from 'react';
import ReactDOM from 'react-dom';
import Chicken from './Chicken';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chicken />, div);
});