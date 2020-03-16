import React from "react";

// local components
import Spinner2 from "./components/ui/Spinner2";

// @material-ui/core
import Typography from "@material-ui/core/Typography";

const gradient = `radial-gradient(
    circle,
    rgba(248,195,15,1) 25%,
    rgba(144,138,111,1) 50%,
    rgba(255,255,255,1) 75%
)`;

const SplashScreen = () => {
    return (
        <div
            style={{
                // position element so there's no padding / margin
                position: "absolute",
                top: "0",
                left: "0",

                // should take up entire screen
                width: "100%",
                height: "100vh",

                // make flexbox + center items in screen
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                // add gradient background
                // Note: made with https://cssgradient.io/
                background: gradient,
            }}
        >
            <Typography variant="h4">Flying Disc</Typography>
            <Typography variant="h1">Invasion</Typography>
            <Spinner2 />
        </div>
    );
};

export default SplashScreen;
