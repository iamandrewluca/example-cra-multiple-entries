import React from 'react';
import ReactDOM from 'react-dom';
import AdminApp from './AdminApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
