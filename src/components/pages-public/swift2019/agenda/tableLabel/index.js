import React from "react";
import PropTypes from "prop-types";

// mui-components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const TableLabel = ({ cols, text }) => {
    const classes = makeStyles(styles)();

    return (
        <TableRow className={classes.row}>
            <TableCell className={classes.cell} colSpan={cols}>
                {text}
            </TableCell>
        </TableRow>
    );
};

TableLabel.propTypes = {
    cols: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default TableLabel;
