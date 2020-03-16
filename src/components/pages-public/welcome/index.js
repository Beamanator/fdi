import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

// header image
import ERUPT2017Image from "../../../assets/ERUPT_2017_pic.jpg";

// material-ui
import Typography from "@material-ui/core/Typography";

// markdown text
import welcomeTextFile from "./welcome.md";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

const Welcome = () => {
    const classes = makeStyles(styles)();
    const [welcomeText, setWelcomeText] = useState("");

    useEffect(() => {
        document.title = "FDI - Welcome";

        fetch(welcomeTextFile)
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                setWelcomeText(text);
            })
            .catch((error) => console.error(error));
    });

    return (
        <>
            <img
                alt="erupt 2017 - FDI's first tournament"
                src={ERUPT2017Image}
                className={classes.headerImg}
            />
            {/* Render same header style on all pages */}
            <Typography variant="h4">Welcome, young and old!</Typography>
            {/* Render rest of text from markdown here */}
            <Markdown source={welcomeText} />
            {/* <Markdown renderers={{ image: Image }} source={welcomeText} /> */}
        </>
    );
};

export default Welcome;
