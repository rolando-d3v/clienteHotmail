import React from 'react'
import Home from '../pages/home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function HomeRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}
