import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import Home from '../pages/HomePage/Home'
import Detail from '../pages/HomePage/Detail'
import NotFound from '../layout/NotFound'

const routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/detail/:id" render={ routeProps => <Detail match={routeProps}></Detail>}/>
        <Route component={ NotFound } />
    </Switch>
);

export default routes;
