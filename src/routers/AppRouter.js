import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

// //routes perzonalizadas
import HomeRouter from './HomeRouter';
import PrivateRoute from './PrivateRoute';




export default function AppRouter() {

    const {user} = useContext(AuthContext)

    return (
        <Switch>
            <Route  exact  path='/login' component={Login} auth={user.logged}  />
            <Route  exact   path='/login/:email' component={Login} auth={user.logged}  />
            <Route  exact   path='/home' component={Home} auth={user.logged}  />
            <PrivateRoute  path='/' component={HomeRouter}  auth={user.logged}  />
        </Switch>
    )
}
