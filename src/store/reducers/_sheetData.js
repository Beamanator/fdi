import * as actionTypes from "../actions/actionTypes";

const initState = {
    data: {},
    error: null,
    loading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SHEET_DATA_QUERY_TRIGGER:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case actionTypes.SHEET_DATA_QUERY_SUCCESS:
            return {
                ...state,
                // add data to specified dataKey
                data: {
                    ...state.data,
                    [action.dataKey]: action.data,
                },
                error: null,
                loading: false,
            };
        case actionTypes.SHEET_DATA_QUERY_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
};
