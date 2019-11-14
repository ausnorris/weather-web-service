import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'

class Router extends React.Component {
    render(){
      return(
        <div>
            <Switch>
              <Route  path="/weather/:loc" component={Home}/>
              <Route  path="/about" component={About}/>
              <Route  path="/help" component={Help}/>
              <Route  exact path="/" component={Home}/>
            </Switch>
        </div>
      );
    }
}
export default Router;