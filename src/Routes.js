import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

export default class routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                <Route  path='/'
                 component={Home} exact />

                <Route path='/about'
                component={About} />

                <Route path='/classlist/:class' 
                component={ClassList} />
                
                <Student path='/student/:id'
                component={Student} />

                </Switch>
            </div>
        )
    }

}