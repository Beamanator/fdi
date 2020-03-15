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
        {/* main welcome page */}
        <Route exact path="/welcome" component={Welcome} />

        {/* swift-2019 event routes */}
        <Route exact path="/swift-2019/agenda" component={Agenda} />
        <Route exact path="/swift-2019/bracket" component={Bracket} />
        <Route
            exact
            path={["/swift-2019", "/swift-2019/home"]}
            component={Home}
        />
        <Route exact path="/swift-2019/pool" component={PoolPlay} />

        {/* 404 Not Found Page */}
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
