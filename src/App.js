import React, { useState } from "react";
import Routes from "./Routes";

// top-level components
import NavDrawer from "./components/layout/navDrawer";
import TopMenu from "./components/layout/topMenu";

// @material-ui/core
import CssBaseline from "@material-ui/core/CssBaseline";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

const App = () => {
    const classes = makeStyles(styles)();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            {/* Basic, standard, nice-looking styles for most HTML elems */}
            <CssBaseline />

            {/* TopMenu */}
            <TopMenu handleDrawerToggle={handleDrawerToggle} />

            {/* NavDrawer */}
            <NavDrawer
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            />

            {/* Dialog table showing members (all or specific type) */}
            {/* <DialogMemberTable /> */}

            {/* Snackbar for campaign-add error messages */}
            {/* <ErrorSnackbar /> */}

            {/* Routes for main content */}
            <main className={classes.content}>
                {/* add vertical spacing so content goes under TopMenu */}
                <div className={classes.toolbar} />

                {/* Main content */}
                <Routes />
            </main>
        </div>
    );
};

export default App;
