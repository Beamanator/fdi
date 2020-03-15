import React from "react";
import PropTypes from "prop-types";

// material-ui
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const LeftLinks = ({ handleDrawerToggle }) => {
    const classes = makeStyles(styles)();

    return (
        <>
            <IconButton
                className={classes.menuButton}
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
                FDI - SWIFT
            </Typography>
        </>
    );
};

LeftLinks.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default LeftLinks;
