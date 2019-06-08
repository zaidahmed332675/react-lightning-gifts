// NPM Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Module Dependencies
import NotFoundPage from 'modules/error/pages/not-found';

/**
 * RouterMap
 */
const RouterMap = () => (
    <Switch>
        <Route exact path="/" component={null} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default RouterMap;
