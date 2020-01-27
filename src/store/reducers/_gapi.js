import * as actionTypes from "../actions/actionTypes";

const initState = {
    error: null,
    gapi: null,
    loading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GAPI_INIT_TRIGGER:
            return { ...state, error: null, loading: true };
        case actionTypes.GAPI_INIT_SUCCESS:
            return { ...state, gapi: action.gapi, error: null, loading: false };
        case actionTypes.GAPI_INIT_ERROR:
            return { ...state, error: action.error, loading: false };

        default:
            return state;
    }
};
