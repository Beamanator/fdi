import React from "react";
import { Route, Switch } from "react-router-dom";

// public routes
import Agenda from "./components/pages-public/agenda";
import Bracket from "./components/pages-public/bracketPlay";
import Home from "./components/pages-public/home";
import PoolPlay from "./components/pages-public/poolPlay";

import Welcome from "./components/pages-public/welcome";

// other
import NotFound from "./components/pages-public/notFound";

const Routes = () => (
    <Switch>
        <Route exact path="/welcome" component={Welcome} />

        {/* event-routes */}
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/bracket" component={Bracket} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/pool" component={PoolPlay} />
        {/* 404 Not Found Page */}
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
