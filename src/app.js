import React from 'react';
import './App.css';
import Router from './Router.js'


import Nav from './components/Nav'

class App extends React.Component {
  render(){
    return(
      <div>
        <Nav/>
        <Router/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      </div>
    )
  }
}

export default App;
