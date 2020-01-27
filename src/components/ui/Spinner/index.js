import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import CircularProgress from "@material-ui/core/CircularProgress";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

const sizeMap = {
    small: 20,
    default: 40,
};

const Spinner = ({ type }) => {
    const classes = makeStyles(styles)();
    return (
        <CircularProgress
            className={[classes.progress, classes[type]].join(" ")}
            color="secondary"
            size={sizeMap[type]}
        />
    );
};

Spinner.defaultProps = {
    type: "default",
};

Spinner.propTypes = {
    type: PropTypes.oneOf(["default", "small"]).isRequired,
};

export default Spinner;
