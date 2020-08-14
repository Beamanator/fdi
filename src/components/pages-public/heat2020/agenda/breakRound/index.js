import React from "react";
import PropTypes from "prop-types";

// mui-components
// import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const BreakRound = ({ data, label }) => {
    const classes = makeStyles(styles)();

    // grab first 4 cols for round data
    const roundData = data[0].slice(0, 4);
    // grab the rest for break text
    const breakText = data[0][4];

    return (
        <>
            <TableRow
                className={[classes.darkBorderTop, classes.background].join(
                    " "
                )}
            >
                {/* first 4 columns (round #, date, time) */}
                {roundData.map((round, i) => (
                    <TableCell key={`round-${label}-${i}`}>{round}</TableCell>
                ))}

                {/* break text */}
                <TableCell colSpan={8}>{breakText}</TableCell>
            </TableRow>
        </>
    );
};

BreakRound.propTypes = {
    // required
    data: PropTypes.array.isRequired,
    // optional
    isHeader: PropTypes.bool,
};

export default BreakRound;
