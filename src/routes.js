import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Register from './Components/Register';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/auth/register' component={Register} />
    </Switch> 
)