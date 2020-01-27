import * as actionTypes from "./actionTypes";
import sheetsConfig from "../../config/sheets";

export const initializeGapi = () => {
    return (dispatch, getState) => {
        const loadGapi = () => {
            dispatch({ type: actionTypes.GAPI_INIT_TRIGGER });

            /**
             *  On load, called to load the auth2 library and API client library.
             */
            window.gapi.load("client:auth2", () => {
                /**
                 *  Initializes the API client library and sets up sign-in state
                 *  listeners.
                 */
                window.gapi.client
                    .init({
                        apiKey: sheetsConfig.API_KEY,
                        clientId: sheetsConfig.CLIENT_ID,
                        discoveryDocs: sheetsConfig.DISCOVERY_DOCS,
                        scope: sheetsConfig.SCOPES,
                    })
                    .then(
                        function() {
                            dispatch({
                                type: actionTypes.GAPI_INIT_SUCCESS,
                                gapi: window.gapi,
                            });
                        },
                        function(error) {
                            let err = JSON.stringify(error, null, 2);
                            console.error(err);
                            dispatch({
                                type: actionTypes.GAPI_INIT_ERROR,
                                error: err,
                            });
                        }
                    );
            });
        };

        let maxWait = 5000;
        let currentWait = 0;
        let int = setInterval(() => {
            // wait a bit for gapi to load
            if (window.gapi) {
                loadGapi();
                clearInterval(int);
            }
            // if gapi never loads, ask user to refresh
            if (currentWait === maxWait) {
                alert("Please try refreshing the page");
                clearInterval(int);
            }
            currentWait += 500;
        }, 500);
    };
};
