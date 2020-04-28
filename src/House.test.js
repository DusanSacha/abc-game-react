import React from 'react';
import ReactDOM from 'react-dom';
import House from './House';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<House />, div);
});