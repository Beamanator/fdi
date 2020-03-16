import React, { useEffect } from "react";
import Markdown from "react-markdown";

// images
import SWIFTImage from "../../../../assets/SWIFT_2019_pic.jpeg";

// markdown text
import homeText from "./homeText";

// material-ui
import Typography from "@material-ui/core/Typography";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

const Image = ({ alt: config, src }) => {
    const classes = makeStyles(styles)();

    const [alt, imgClass] = config.split("/");

    return <img alt={alt} className={classes[imgClass]} src={src} />;
};

const Home = () => {
    const classes = makeStyles(styles)();

    useEffect(() => {
        document.title = "SWIFT 2020";
    });

    return (
        <>
            <img
                alt="last year at swift 2019"
                src={SWIFTImage}
                className={classes.headerImg}
            />
            {/* Render same header style on all pages */}
            <Typography variant="h4">SWIFT 2020 Tournament Details</Typography>
            {/* Render rest of text from markdown here */}
            <Markdown renderers={{ image: Image }} source={homeText} />
        </>
    );
};

export default Home;
