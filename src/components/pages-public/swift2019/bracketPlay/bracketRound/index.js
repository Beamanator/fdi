import React from "react";
import PropTypes from "prop-types";

// mui-components
// import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const Round = ({ data, label }) => {
    const classes = makeStyles(styles)();

    // temporary fix: when g-sheets gets a row with an empty
    // -> col on far-right, it omits that cell. So we will
    // -> add an empty string to the end if needed so the
    // -> table lines go all the way to the right
    if (data[0].length < 3) data[0].push("");
    if (data[1].length < 3) data[1].push("");

    return (
        <>
            {/* display first row with round # */}
            <TableRow className={classes.darkBorderTop}>
                {data[0].map((top, i) => (
                    <TableCell
                        key={`${label}-top-${i}`}
                        className={i === 2 ? classes.lightgreyBackground : ""}
                    >
                        {top}
                    </TableCell>
                ))}
            </TableRow>
            {/* display second row with time / field */}
            <TableRow className={classes.lightBorderTop}>
                {/* bottom teams + scores */}
                {data[1].map((bottom, i) => (
                    <TableCell
                        key={`${label}-bottom-${i}`}
                        className={i === 2 ? classes.lightgreyBackground : ""}
                    >
                        {bottom}
                    </TableCell>
                ))}
            </TableRow>
        </>
    );
};

Round.propTypes = {
    // required
    data: PropTypes.array.isRequired,
    // optional
    isHeader: PropTypes.bool,
};

export default Round;
