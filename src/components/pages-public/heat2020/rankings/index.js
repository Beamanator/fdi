import React, { useEffect } from "react";

// material-ui
import Grid from "@material-ui/core/Grid";
import MUIDataTables from "mui-datatables";
import Typography from "@material-ui/core/Typography";

// redux
import * as actions from "../../../../store/actions";
import * as sheetGetConfigs from "../../../../store/sheetGetConfigs/erupt2020";
import { connect } from "react-redux";

const Rankings = ({ getRankingData, rankingData }) => {
    // component did mount
    useEffect(() => {
        getRankingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    return (
        <>
            <Typography style={{ marginBottom: "20px" }} variant="h4">
                Day 2 - Final Rankings!
            </Typography>
            <MUIDataTables
                columns={rankingData[0]}
                data={rankingData.slice(1)}
                options={tableOptions}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    // get ranking data
    let rankingData =
        state.sheetData.data[sheetGetConfigs.FINAL_RANKINGS.dataKey] || [];

    return {
        rankingData,
    };
};
const mapDispatchToProps = (dispatch) => ({
    getRankingData: () =>
        dispatch(
            actions.getSheetDataByRangeConfigs(sheetGetConfigs.SPREADSHEET_ID, [
                sheetGetConfigs.FINAL_RANKINGS,
            ])
        ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
