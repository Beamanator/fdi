import React, { useEffect } from "react";

// local components
// import BracketRound from "./bracketRound";
import PoolRound from "./poolRound";
import Header from "./header";
import Spinner from "../../../ui/Spinner";
import TableLabel from "./tableLabel";

// material-ui
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
import * as sheetGetConfigs from "../../../../store/sheetGetConfigs/erupt2020";
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

    getAgendaData,
}) => {
    const classes = makeStyles(styles)();

    // component did mount
    useEffect(() => {
        getAgendaData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (
        !agendaHeader.length ||
        !agendaR1Data.length ||
        !agendaR2Data.length ||
        !agendaR3Data.length ||
        !agendaR4Data.length ||
        !agendaR5Data.length ||
        !agendaR6Data.length ||
        !agendaR7Data.length ||
        !agendaR8Data.length
    )
        return <Spinner />;
    return (
        <>
            <Typography style={{ marginBottom: "20px" }} variant="h4">
                Agenda
            </Typography>
            <TableContainer component={Paper}>
                <Table
                    aria-label="erupt agenda table"
                    className={classes.table}
                    size="small"
                >
                    <TableHead>
                        <Header data={agendaHeader} />
                    </TableHead>

                    <TableBody>
                        <TableLabel cols={12} text="Day 1" />
                        <PoolRound data={agendaR1Data} label="r1" />
                        <PoolRound data={agendaR2Data} label="r2" />
                        <PoolRound data={agendaR3Data} label="r3" />
                        <PoolRound data={agendaR4Data} label="r4" />

                        <TableLabel cols={12} text="Day 2" />
                        <PoolRound data={agendaR5Data} label="r5" />
                        <PoolRound data={agendaR6Data} label="r6" />
                        <PoolRound data={agendaR7Data} label="r7" />

                        <TableLabel cols={12} text="Final Round!" />
                        <PoolRound data={agendaR8Data} label="r8" />

                        <TableLabel cols={12} text="Awards 🥇🥈🥉" />
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
            ])
        ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);
