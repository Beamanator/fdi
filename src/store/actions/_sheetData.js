import * as actionTypes from "./actionTypes";

export const getSheetDataByRangeConfigs = (spreadsheetId, rangeConfigArr) => {
    if (!spreadsheetId)
        return {
            type: actionTypes.SHEET_DATA_QUERY_ERROR,
            error: "Invalid param 'spreadsheetId'. Not found!",
        };
    if (!Array.isArray(rangeConfigArr))
        return {
            type: actionTypes.SHEET_DATA_QUERY_ERROR,
            error: "Invalid param 'keys'. Must be array.",
        };

    return (dispatch, getState) => {
        const gapi = getState().gapi.gapi;

        dispatch({ type: actionTypes.SHEET_DATA_QUERY_TRIGGER });

        gapi.client.sheets.spreadsheets.values
            .batchGet({
                spreadsheetId: spreadsheetId,
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
