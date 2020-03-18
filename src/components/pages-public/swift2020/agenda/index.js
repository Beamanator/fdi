import React, { useEffect } from "react";

// local components
import BracketRound from "./bracketRound";
import Header from "./header";
import PoolRound from "./poolRound";
import Spinner from "../../../ui/Spinner";
import TableLabel from "./tableLabel";

// mui-components
// import Grid from "@material-ui/core/Grid";
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
import * as sheetGetConfigs from "../../../../store/sheetGetConfigs/swift2020";
import { connect } from "react-redux";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const Agenda = ({
    agendaHeader,
    agendaR1Data,
    agendaR2Data,
    agendaR3Data,
    agendaR4Data,
    agendaR5Data,

    agendaR6Data,
    agendaR7Data,
    agendaR8Data,
    agendaR9Data,
    agendaAwardsData,

    getAgendaData,
}) => {
    const classes = makeStyles(styles)();

    // component did mount
    useEffect(() => {
        getAgendaData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // check if any table data is empty (still loading from interwebs)...
    if (
        !agendaHeader.length ||
        !agendaR1Data.length ||
        !agendaR2Data.length ||
        !agendaR3Data.length ||
        !agendaR4Data.length ||
        !agendaR5Data.length ||
        !agendaR6Data.length ||
        !agendaR7Data.length ||
        !agendaR8Data.length ||
        !agendaR9Data.length ||
        !agendaAwardsData.length
    )
        return <Spinner />;
    return (
        <>
            <Typography style={{ marginBottom: "20px" }} variant="h4">
                Agenda
            </Typography>
            <TableContainer component={Paper}>
                <Table
                    aria-label="swift agenda table"
                    className={classes.table}
                    size="small"
                >
                    <TableHead>
                        <Header data={agendaHeader} />
                    </TableHead>

                    <TableBody>
                        {/* day 1 */}
                        <TableLabel cols={12} text="Day 1" />
                        <PoolRound data={agendaR1Data} label="r1" />
                        <PoolRound data={agendaR2Data} label="r2" />
                        <PoolRound data={agendaR3Data} label="r3" />
                        {/* day 2 */}
                        <TableLabel cols={12} text="Day 2" />
                        <PoolRound data={agendaR4Data} label="r4" />
                        <PoolRound data={agendaR5Data} label="r5" />
                        {/* bracket rounds */}
                        <TableLabel cols={12} text="Bracket Play!" />
                        <BracketRound data={agendaR6Data} label="r6" />
                        <BracketRound data={agendaR7Data} label="r7" />
                        <BracketRound data={agendaR8Data} label="r8" />
                        <BracketRound data={agendaR9Data} label="r9" />
                        <BracketRound data={agendaAwardsData} label="award" />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

const mapStateToProps = (state) => ({
    agendaHeader:
        state.sheetData.data[sheetGetConfigs.AGENDA_HEADER.dataKey] || [],
    agendaR1Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_1.dataKey] || [],
    agendaR2Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_2.dataKey] || [],
    agendaR3Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_3.dataKey] || [],
    agendaR4Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_4.dataKey] || [],
    agendaR5Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_5.dataKey] || [],

    agendaR6Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_6.dataKey] || [],
    agendaR7Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_7.dataKey] || [],
    agendaR8Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_8.dataKey] || [],
    agendaR9Data:
        state.sheetData.data[sheetGetConfigs.AGENDA_ROUND_9.dataKey] || [],
    agendaAwardsData:
        state.sheetData.data[sheetGetConfigs.AGENDA_AWARDS.dataKey] || [],
});
const mapDispatchToProps = (dispatch) => ({
    getAgendaData: () =>
        dispatch(
            actions.getSheetDataByRangeConfigs(sheetGetConfigs.SPREADSHEET_ID, [
                sheetGetConfigs.AGENDA_HEADER,
                sheetGetConfigs.AGENDA_ROUND_1,
                sheetGetConfigs.AGENDA_ROUND_2,
                sheetGetConfigs.AGENDA_ROUND_3,
                sheetGetConfigs.AGENDA_ROUND_4,
                sheetGetConfigs.AGENDA_ROUND_5,

                sheetGetConfigs.AGENDA_ROUND_6,
                sheetGetConfigs.AGENDA_ROUND_7,
                sheetGetConfigs.AGENDA_ROUND_8,
                sheetGetConfigs.AGENDA_ROUND_9,
                sheetGetConfigs.AGENDA_AWARDS,
            ])
        ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);
