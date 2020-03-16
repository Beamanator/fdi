import React from "react";
import PropTypes from "prop-types";

// local components
import LeftItems from "./leftItems";
import RightItems from "./rightItems";

// material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const TopMenu = ({ handleDrawerToggle }) => {
    const classes = makeStyles(styles)();

    return (
        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
                {/* left items */}
                <LeftItems handleDrawerToggle={handleDrawerToggle} />

                {/* right items */}
                <RightItems />
            </Toolbar>
        </AppBar>
    );
};

TopMenu.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default TopMenu;
