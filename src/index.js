import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// redux imports
import { connect, Provider } from "react-redux";
import store from "./store";
import * as actions from "./store/actions";

// @material-ui setup
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// local components
import SplashScreen from "./SplashScreen";

const theme = createMuiTheme();

// wait for gapi to be initialized, then render app
const mapStateToProps = (state) => ({
    gapi: state.gapi.gapi,
    gapiLoading: state.gapi.loading,
});
const mapDispatchToProps = (dispatch) => ({
    initializeGapi: () => dispatch(actions.initializeGapi()),
});
const WaitForGapi = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ gapi, gapiLoading, initializeGapi }) => {
    // on cdm, initialize google apis
    useEffect(() => {
        initializeGapi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // display app only when gapi loads
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {!gapi || gapiLoading ? <SplashScreen /> : <App />}
            </ThemeProvider>
        </BrowserRouter>
    );
});

const app = (
    <Provider store={store}>
        <WaitForGapi />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
