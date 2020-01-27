import React from "react";
import Markdown from "react-markdown";

// images
import SWIFTImage from "../../../assets/SWIFT_2019_pic.jpeg";

// markdown text
import homeText from "./homeText";

// material-ui
import Typography from "@material-ui/core/Typography";

const Image = ({ alt: config, src }) => {
    const [alt, raw_settings] = config.split("/");
    const style = JSON.parse(raw_settings);

    return <img alt={alt} style={{ ...style }} src={src} />;
};

const Home = () => {
    return (
        <>
            <img
                alt="swift 2019"
                src={SWIFTImage}
                style={{
                    marginBottom: "20px",
                    maxWidth: "100%",
                }}
            />
            {/* Render same header style on all pages */}
            <Typography variant="h4">SWIFT 2020 Tournament Details</Typography>
            {/* Render rest of text from markdown here */}
            <Markdown renderers={{ image: Image }} source={homeText} />
        </>
    );
};

export default Home;
