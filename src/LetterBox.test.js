import React from 'react';
import ReactDOM from 'react-dom';
import LetterBox from './LetterBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LetterBox />, div);
});