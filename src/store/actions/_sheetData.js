import * as actionTypes from "./actionTypes";
// import * as sheetGetConfigs from "../sheetGetConfigs";

export const getSheetDataByRangeConfigs = (rangeConfigArr) => {
    if (!Array.isArray(rangeConfigArr)) {
        return {
            type: actionTypes.SHEET_DATA_QUERY_ERROR,
            error: "Invalid param 'keys'. Must be array.",
        };
    }

    return (dispatch, getState) => {
        const gapi = getState().gapi.gapi;

        dispatch({ type: actionTypes.SHEET_DATA_QUERY_TRIGGER });

        gapi.client.sheets.spreadsheets.values
            .batchGet({
                spreadsheetId: "1NgRmsAkdekwA6DEvKJCKq5fmlnh-cJcBxskg22AunM4",
                ranges: rangeConfigArr.map(({ range }) => range),
            })
            .then(
                function(response) {
                    let valueRanges = response.result.valueRanges;

                    rangeConfigArr.forEach(({ dataKey }, index) => {
                        dispatch({
                            type: actionTypes.SHEET_DATA_QUERY_SUCCESS,
                            data: valueRanges[index].values,
                            dataKey,
                        });
                    });
                },
                function(response) {
                    dispatch({
                        type: actionTypes.SHEET_DATA_QUERY_ERROR,
                        error: response.result.error.message,
                    });
                }
            );
    };
};
