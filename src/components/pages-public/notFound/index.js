import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";

// @material-ui/core
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons
import BrokenLinkIcon from "@material-ui/icons/LinkOff";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

const NotFound = () => {
    const classes = makeStyles(styles)();

    // automatically open home page if empty path
    const location = useLocation();
    if (location.pathname === "/") return <Redirect to="/welcome" />;

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.root}
        >
            <Grid item>
                <Typography variant="h3">
                    <BrokenLinkIcon fontSize="inherit" color="inherit" />
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h3" className={classes.boldText}>
                    404
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="caption" className={classes.caption}>
                    PAGE NOT FOUND
                </Typography>
            </Grid>
            <Grid item>
                <Link to="/home" className={classes.backLink}>
                    Back to Home
                </Link>
            </Grid>
        </Grid>
    );
};

export default NotFound;
