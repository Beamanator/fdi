import React from "react";

// local components
import RightItems from "./rightItems";

// material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const TopMenu = () => {
    const classes = makeStyles(styles)();

    return (
        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
                {/* left items */}
                <Typography variant="h6" className={classes.title}>
                    FDI - SWIFT
                </Typography>

                {/* right items */}
                <RightItems />
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu;
