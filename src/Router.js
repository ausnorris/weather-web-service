import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'

class Router extends React.Component {
    render(){
      return(
        <div>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/about" component={About}/>
            <Route exact={true} path="/help" component={Help}/>
        </div>
      );
    }
}
export default Router;