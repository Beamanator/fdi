import React, { useEffect } from "react";
import sheetConfig from "../../../../config/sheets";

// local components
import Header from "./header";
import Round from "./bracketRound";
import Spinner from "../../../ui/Spinner";
import TableLabel from "./tableLabel";

// mui-components
import Grid from "@material-ui/core/Grid";
import MUIDataTables from "mui-datatables";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

// redux
import * as actions from "../../../../store/actions";
import * as sheetGetConfigs from "../../../../store/sheetGetConfigs";
import { connect } from "react-redux";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const BracketPlay = ({
    bracketHeader,
    bracketRoundG1,
    bracketRoundG2,
    bracketRoundG3,
    bracketRoundG4,
    bracketRoundG5,
    bracketRoundG6,
    bracketRoundG7,
    bracketRoundG8,
    bracketRoundG9,
    bracketRoundG10,

    bracket9thPlace,
    bracket3rdPlace,
    bracket1stPlace,

    bracketRankings,

    getBracketData,
}) => {
    const classes = makeStyles(styles)();

    const tableOptions = {
        // table icons
        download: false,
        filter: false,
        print: false,
        search: false,
        viewColumns: false,

        // other
        pagination: false,
        responsive: "scrollFullHeight",
        selectableRows: "none",
    };

    // component did mount
    useEffect(() => {
        getBracketData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // check if any table data is empty (still loading from interwebs)...
    if (
        !bracketHeader.length ||
        !bracketRoundG1.length ||
        !bracketRoundG2.length ||
        !bracketRoundG3.length ||
        !bracketRoundG4.length ||
        !bracketRoundG5.length ||
        !bracketRoundG6.length ||
        !bracketRoundG7.length ||
        !bracketRoundG8.length ||
        !bracketRoundG9.length ||
        !bracketRoundG10.length ||
        !bracket9thPlace.length ||
        !bracket3rdPlace.length ||
        !bracket1stPlace.length ||
        !bracketRankings.length
    )
        return <Spinner />;
    return (
        <>
            <Typography style={{ marginBottom: "20px" }} variant="h4">
                Bracket Play
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <iframe
                        title="SWIFT bracket embed"
                        height="400px"
                        width="100%"
                        src={sheetConfig.BRACKET_IFRAME_URL}
                    ></iframe>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            size="small"
                            aria-label="swift bracket table"
                        >
                            <TableHead>
                                <Header data={bracketHeader} />
                            </TableHead>

                            <TableBody>
                                {/* <TableLabel cols={12} text="Day 1" /> */}
                                <Round data={bracketRoundG1} label="r1" />
                                <Round data={bracketRoundG2} label="r2" />
                                <Round data={bracketRoundG3} label="r3" />
                                <Round data={bracketRoundG4} label="r4" />
                                <Round data={bracketRoundG5} label="r5" />
                                <Round data={bracketRoundG6} label="r6" />
                                <Round data={bracketRoundG7} label="r7" />
                                <Round data={bracketRoundG8} label="r8" />
                                <Round data={bracketRoundG9} label="r9" />
                                <Round data={bracketRoundG10} label="r10" />
                                {/* final 3 bracket matches */}
                                <TableLabel cols={3} text="Placement Rounds" />
                                <Round data={bracket9thPlace} label="9th" />
                                <Round data={bracket3rdPlace} label="3rd" />
                                <Round data={bracket1stPlace} label="1st" />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <MUIDataTables
                        title="Overall Rankings"
                        columns={bracketRankings[0]}
                        data={bracketRankings.slice(1)}
                        options={tableOptions}
                    />
                </Grid>
            </Grid>
        </>
    );
};

const mapStateToProps = (state) => {
    let ssd = state.sheetData.data;

    // get overall rankings
    let bracketRankings = ssd[sheetGetConfigs.BRACKET_RANKINGS.dataKey] || [];

    // filter out specific column from bracket rankings
    // -> (since it's hidden in google sheets)
    let col_index_to_hide = 1;
    let filteredBracketRankings = bracketRankings.map((row) =>
        row.filter((col, i) => i !== col_index_to_hide)
    );

    return {
        bracketHeader: ssd[sheetGetConfigs.BRACKET_HEADER.dataKey] || [],
        bracketRoundG1: ssd[sheetGetConfigs.BRACKET_ROUND_G1.dataKey] || [],
        bracketRoundG2: ssd[sheetGetConfigs.BRACKET_ROUND_G2.dataKey] || [],
        bracketRoundG3: ssd[sheetGetConfigs.BRACKET_ROUND_G3.dataKey] || [],
        bracketRoundG4: ssd[sheetGetConfigs.BRACKET_ROUND_G4.dataKey] || [],
        bracketRoundG5: ssd[sheetGetConfigs.BRACKET_ROUND_G5.dataKey] || [],
        bracketRoundG6: ssd[sheetGetConfigs.BRACKET_ROUND_G6.dataKey] || [],
        bracketRoundG7: ssd[sheetGetConfigs.BRACKET_ROUND_G7.dataKey] || [],
        bracketRoundG8: ssd[sheetGetConfigs.BRACKET_ROUND_G8.dataKey] || [],
        bracketRoundG9: ssd[sheetGetConfigs.BRACKET_ROUND_G9.dataKey] || [],
        bracketRoundG10: ssd[sheetGetConfigs.BRACKET_ROUND_G10.dataKey] || [],

        bracket9thPlace: ssd[sheetGetConfigs.BRACKET_9TH_PLACE.dataKey] || [],
        bracket3rdPlace: ssd[sheetGetConfigs.BRACKET_3RD_PLACE.dataKey] || [],
        bracket1stPlace: ssd[sheetGetConfigs.BRACKET_1ST_PLACE.dataKey] || [],

        bracketRankings: filteredBracketRankings,
    };
};
const mapDispatchToProps = (dispatch) => ({
    getBracketData: () =>
        dispatch(
            actions.getSheetDataByRangeConfigs([
                sheetGetConfigs.BRACKET_HEADER,
                sheetGetConfigs.BRACKET_ROUND_G1,
                sheetGetConfigs.BRACKET_ROUND_G2,
                sheetGetConfigs.BRACKET_ROUND_G3,
                sheetGetConfigs.BRACKET_ROUND_G4,
                sheetGetConfigs.BRACKET_ROUND_G5,
                sheetGetConfigs.BRACKET_ROUND_G6,
                sheetGetConfigs.BRACKET_ROUND_G7,
                sheetGetConfigs.BRACKET_ROUND_G8,
                sheetGetConfigs.BRACKET_ROUND_G9,
                sheetGetConfigs.BRACKET_ROUND_G10,

                sheetGetConfigs.BRACKET_9TH_PLACE,
                sheetGetConfigs.BRACKET_3RD_PLACE,
                sheetGetConfigs.BRACKET_1ST_PLACE,

                sheetGetConfigs.BRACKET_RANKINGS,
            ])
        ),
});

export default connect(mapStateToProps, mapDispatchToProps)(BracketPlay);
