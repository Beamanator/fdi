import React from "react";
import { Route, Switch } from "react-router-dom";

// event routes
// -> heat2020
import Heat2020Home from "./components/pages-public/heat2020/home";
// -> erupt2020
import Erupt2020Agenda from "./components/pages-public/erupt2020/agenda";
import Erupt2020Home from "./components/pages-public/erupt2020/home";
import Erupt2020PoolPlay from "./components/pages-public/erupt2020/poolPlay";
import Erupt2020Rankings from "./components/pages-public/erupt2020/rankings";
// -> swift2020
import Swift2020Agenda from "./components/pages-public/swift2020/agenda";
import Swift2020Bracket from "./components/pages-public/swift2020/bracketPlay";
import Swift2020Home from "./components/pages-public/swift2020/home";
import Swift2020PoolPlay from "./components/pages-public/swift2020/poolPlay";

import Welcome from "./components/pages-public/welcome";

// other
import NotFound from "./components/pages-public/notFound";

const Routes = () => (
    <Switch>
        {/* main welcome page */}
        <Route exact path="/welcome" component={Welcome} />

        {/* heat-2020 event routes */}
        <Route
            exact
            path={["/heat-2020", "/heat-2020/home"]}
            component={Heat2020Home}
        />

        {/* erupt-2020 event routes */}
        <Route exact path="/erupt-2020/agenda" component={Erupt2020Agenda} />
        <Route
            exact
            path={["/erupt-2020", "/erupt-2020/home"]}
            component={Erupt2020Home}
        />
        <Route exact path="/erupt-2020/pool" component={Erupt2020PoolPlay} />
        <Route
            exact
            path="/erupt-2020/rankings"
            component={Erupt2020Rankings}
        />

        {/* swift-2020 event routes */}
        <Route exact path="/swift-2020/agenda" component={Swift2020Agenda} />
        <Route exact path="/swift-2020/bracket" component={Swift2020Bracket} />
        <Route
            exact
            path={["/swift-2020", "/swift-2020/home"]}
            component={Swift2020Home}
        />
        <Route exact path="/swift-2020/pool" component={Swift2020PoolPlay} />

        {/* 404 Not Found Page */}
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
