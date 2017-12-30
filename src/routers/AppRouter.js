import React from 'react';
import ConnectedComponent from '../components/ConnectedComponent';
import NotFoundPage from '../components/NotFoundPage';
import Main from '../components/Main';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
