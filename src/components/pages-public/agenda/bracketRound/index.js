import React from "react";
import PropTypes from "prop-types";

// mui-components
// import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const BracketRound = ({ data, label }) => {
    const classes = makeStyles(styles)();

    // temporary fix: when g-sheets gets a row with an empty
    // -> col on far-right, it omits that cell. So we will
    // -> add an empty string to the end if needed so the
    // -> table lines go all the way to the right
    data[0].push(...Array(8 - data[0].length).fill(""));

    return (
        <TableRow className={classes.darkBorderTop}>
            {/* first 4 columns (round #, date, time) */}
            {data[0].map((round, i) => (
                <TableCell
                    // only non-header cells span 2 rows
                    key={`round-${label}-${i}`}
                    colSpan={i > 3 ? 2 : 1}
                    style={{
                        backgroundColor: i > 3 ? "grey" : "lightgrey",
                        borderLeft: i > 3 ? "2px solid black" : "",
                    }}
                >
                    {round}
                </TableCell>
            ))}
        </TableRow>
    );
};

BracketRound.propTypes = {
    // required
    data: PropTypes.array.isRequired,
    // optional
    isHeader: PropTypes.bool,
};

export default BracketRound;
