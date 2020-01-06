import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import HomePage from './pages/home';

ReactDOM.render(
  <HomePage author={ 'bart' } />,
  document.getElementById( 'app' )
)