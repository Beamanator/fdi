import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

// styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const FAB = ({ buttonStyle, Icon, text, tooltip, onClick }) => {
    const classes = makeStyles(styles)();
    if (!tooltip) tooltip = text;

    return (
        <div className={classes.root}>
            <Tooltip title={tooltip}>
                <Fab
                    aria-label={text}
                    classes={{
                        root: classes.fabRoot,
                    }}
                    color="secondary"
                    onClick={onClick}
                    style={buttonStyle}
                    variant="extended"
                >
                    <Icon />{" "}
                    <Typography className={classes.fabText} variant="h6">
                        {text}
                    </Typography>
                </Fab>
            </Tooltip>
        </div>
    );
};

FAB.defaultProps = {
    buttonStyle: {},
};

FAB.propTypes = {
    // required
    Icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    // optional
    buttonStyle: PropTypes.object,
    tooltip: PropTypes.string,
};

export default FAB;
