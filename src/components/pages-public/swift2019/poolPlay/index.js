import React, { useEffect } from "react";

// mui-components
import Grid from "@material-ui/core/Grid";
import MUIDataTables from "mui-datatables";
import Typography from "@material-ui/core/Typography";

// redux
import * as actions from "../../../../store/actions";
import * as sheetGetConfigs from "../../../../store/sheetGetConfigs";
import { connect } from "react-redux";

// styles
// import styles from 'styles'
// import { makeStyles } from "@material-ui/core/styles";

const PoolPlay = ({ getPoolData, poolAData, poolBData }) => {
    // const classes = makeStyles(styles)();

    // component did mount
    useEffect(() => {
        getPoolData();
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
                Pool-Play Statistics
            </Typography>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <MUIDataTables
                        title="Pool A"
                        columns={poolAData[0]}
                        data={poolAData.slice(1)}
                        options={tableOptions}
                    />
                </Grid>
                <Grid item>
                    <MUIDataTables
                        title="Pool B"
                        columns={poolBData[0]}
                        data={poolBData.slice(1)}
                        options={tableOptions}
                    />
                </Grid>
            </Grid>
        </>
    );
};

const mapStateToProps = (state) => {
    // get pool A and B data
    let allPoolAData =
        state.sheetData.data[sheetGetConfigs.POOL_A.dataKey] || [];
    let allPoolBData =
        state.sheetData.data[sheetGetConfigs.POOL_B.dataKey] || [];

    // filter out specific column from pool table
    // -> (since it's hidden in google sheets)
    let col_index_to_hide = 1;
    let filteredPoolAData = allPoolAData.map((row) =>
        row.filter((col, i) => i !== col_index_to_hide)
    );
    let filteredPoolBData = allPoolBData.map((row) =>
        row.filter((col, i) => i !== col_index_to_hide)
    );

    return {
        poolAData: filteredPoolAData,
        poolBData: filteredPoolBData,
    };
};
const mapDispatchToProps = (dispatch) => ({
    getPoolData: () =>
        dispatch(
            actions.getSheetDataByRangeConfigs([
                sheetGetConfigs.POOL_A,
                sheetGetConfigs.POOL_B,
            ])
        ),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoolPlay);
