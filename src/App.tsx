import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home';

ReactDOM.render(
  <Router>
    <HomePage author='bart' />
  </Router>,
  document.getElementById( 'app' )
)