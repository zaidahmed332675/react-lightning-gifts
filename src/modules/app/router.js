// NPM Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Module Dependencies
import NotFoundPage from 'modules/error/pages/not-found';
import LandingPage from 'modules/create/pages/landing-page';

/**
 * RouterMap
 */
const RouterMap = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default RouterMap;
