import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './../components/Home'

export default class Router extends Component{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
