import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HomePage from './index';

// 引入 store
ReactDOM.render(
  <HomePage name={ 'bart' } />,
  document.getElementById( "app" )
)