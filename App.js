import React, { Component } from 'react';
import Routes from './src/Routes'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<Routes/>);
  }
}