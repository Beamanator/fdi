import React from "react";
import PropTypes from "prop-types";

// mui-components
// import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const Header = ({ data }) => {
    const classes = makeStyles(styles)();

    return (
        <TableRow>
            {data[0].map((item, i) => {
                const cellClasses = [classes.lightgreyBackground];

                // add light left border for field cells only
                if (i > 3 && i % 2 === 0)
                    cellClasses.push(classes.lightLeftBorder);

                return (
                    <TableCell
                        className={cellClasses.join(" ")}
                        key={`header-${i}`}
                    >
                        <Typography>{item}</Typography>
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

Header.propTypes = {
    // required
    data: PropTypes.array.isRequired,
};

export default Header;
