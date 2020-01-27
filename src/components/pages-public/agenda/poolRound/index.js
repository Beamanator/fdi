import React from "react";
import PropTypes from "prop-types";

// mui-components
// import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const PoolRound = ({ data, label }) => {
    const classes = makeStyles(styles)();

    // grab first 4 cols for round data
    const roundData = data[0].slice(0, 4);
    // grab the rest for score data
    const scoreData = [data[0].slice(4), data[1].slice(4)];

    // temporary fix: when g-sheets gets a row with an empty
    // -> col on far-right, it omits that cell. So we will
    // -> add an empty string to the end if needed so the
    // -> table lines go all the way to the right
    if (scoreData[0].length < 8) scoreData[0].push("");
    if (scoreData[1].length < 8) scoreData[1].push("");

    return (
        <>
            <TableRow className={classes.darkBorderTop}>
                {/* first 4 columns (round #, date, time) */}
                {roundData.map((round, i) => (
                    <TableCell
                        // only non-header cells span 2 rows
                        rowSpan={2}
                        key={`round-${label}-${i}`}
                        style={{ backgroundColor: "lightgrey" }}
                    >
                        {round}
                    </TableCell>
                ))}

                {/* header or top teams + scores */}
                {scoreData[0].map((item, i) => (
                    <TableCell
                        key={`${label}-top-${i}`}
                        className={i % 2 ? classes.lightgreyBackground : ""}
                    >
                        {item}
                    </TableCell>
                ))}
            </TableRow>
            {/* display second row of scores */}
            <TableRow className={classes.lightBorderTop}>
                {/* bottom teams + scores */}
                {scoreData[1].map((item, i) => (
                    <TableCell
                        key={`${label}-bottom-${i}`}
                        className={i % 2 ? classes.lightgreyBackground : ""}
                    >
                        {item}
                    </TableCell>
                ))}
            </TableRow>
        </>
    );
};

PoolRound.propTypes = {
    // required
    data: PropTypes.array.isRequired,
    // optional
    isHeader: PropTypes.bool,
};

export default PoolRound;
