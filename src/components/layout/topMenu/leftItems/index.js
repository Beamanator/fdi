import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// material-ui
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

// message configurations
const swift2019 = {
    path: "swift-2019",
    message: "FDI - SWIFT 2019",
};
const erupt2020 = {
    path: "erupt-2020",
    message: "FDI - ERUPT 2020",
};

const LeftLinks = ({ handleDrawerToggle }) => {
    const classes = makeStyles(styles)();
    const { pathname } = useLocation();

    // determine message to display based on current path
    let message = "Flying Disc Invasion";
    if (pathname.includes(swift2019.path)) message = swift2019.message;
    else if (pathname.includes(erupt2020.path)) message = erupt2020.message;

    return (
        <>
            <IconButton
                className={classes.menuButton}
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
                {message}
            </Typography>
        </>
    );
};

LeftLinks.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default LeftLinks;
