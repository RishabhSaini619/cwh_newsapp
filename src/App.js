import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { NewsTopHeadlines } from './components/NewsTopHeadlines';
import { NewsEverything } from './components/NewsEverything';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <NewsTopHeadlines pageSize={6}/>
        <NewsEverything pageSize={20}/>
      </div>
    )
  }
}
