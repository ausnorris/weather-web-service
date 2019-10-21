import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Button} from '@material-ui/core'
import { withRouter} from 'react-router-dom'




class Nav extends React.Component {
    constructor(){
        super();
        this.routeChange=this.routeChange.bind(this);
    }
    routeChange(path){
        this.props.history.push(path);
    }
    render(){
        return (
            <div>
                <AppBar color="inherit" position="static">
                    <Toolbar>
                        
                        <Button color="inherit" onClick={()=>this.routeChange("/")} >Home</Button>
                        <Button color="inherit" onClick={()=>this.routeChange("/about") }>About</Button>
                        <Button color="inherit" onClick={()=>this.routeChange("/help")} >Help</Button>
                    </Toolbar>                  
                </AppBar>
            </div>
        );
    }
}
export default withRouter (Nav);