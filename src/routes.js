import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/user/Auth'
import Register from './Components/user/Register';
import Dashboard from './Components/Dashboard';
import NewTicket from './Components/ticket/NewTicket';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/auth/register' component={Register} />
        <Route path='/user/dash' component={Dashboard} />
        <Route path='/api/ticket/new' component={NewTicket} />
    </Switch> 
)