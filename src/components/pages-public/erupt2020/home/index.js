import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

// images
import ERUPTImage from "../../../../assets/ERUPT_2019_pic.jpeg";

// markdown text
import homeTextFile from "./homeText.md";

// material-ui
import Typography from "@material-ui/core/Typography";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

const Image = ({ alt: config, src: fileName }) => {
    const classes = makeStyles(styles)();

    // dynamically load image based on filename (from md file)
    // -> for some reason, couldn't require(fullPath) didn't work
    let imgSrc = require("../../../../assets/" + fileName);

    // break out image alt & class
    const [alt, imgClass] = config.split("/");

    return <img alt={alt} className={classes[imgClass]} src={imgSrc} />;
};

const Home = () => {
    const classes = makeStyles(styles)();
    const [homeText, setHomeText] = useState("");

    useEffect(() => {
        document.title = "ERUPT 2020";

        fetch(homeTextFile)
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                setHomeText(text);
            })
            .catch((error) => console.error(error));
    });

    return (
        <>
            <img
                alt="erupt 2019"
                src={ERUPTImage}
                className={classes.headerImg}
            />
            {/* Render same header style on all pages */}
            <Typography variant="h4">ERUPT 2020 Tournament Details</Typography>
            {/* Render rest of text from markdown here */}
            <Markdown renderers={{ image: Image }} source={homeText} />
        </>
    );
};

export default Home;
