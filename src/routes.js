import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth'

import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/auth/register' component={Register} />
        <Route path='/user/dash' component={Dashboard} />
    </Switch> 
)