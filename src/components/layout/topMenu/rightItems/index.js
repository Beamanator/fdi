import React from "react";
import { NavLink } from "react-router-dom";

// material-ui
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

// icons
import GrainIcon from "@material-ui/icons/Grain";
import HomeIcon from "@material-ui/icons/Home";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const RightItems = () => {
    const classes = makeStyles(styles)();

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            classes={{ separator: classes.separator }}
            separator="›"
        >
            {[
                {
                    label: "Home",
                    path: "/home",
                    Icon: HomeIcon,
                },
                {
                    label: "Agenda",
                    path: "/agenda",
                    Icon: GrainIcon,
                },
                {
                    label: "Pool Play",
                    path: "/pool",
                    Icon: WhatshotIcon,
                },
                {
                    label: "Bracket Play",
                    path: "/bracket",
                    Icon: SportsEsportsIcon,
                },
                // {
                //     label: "Social?",
                //     path: "/socials",
                //     Icon: GrainIcon,
                // },
            ].map(({ label, path, Icon }) => (
                <Link
                    activeClassName={classes.active}
                    className={classes.link}
                    color="inherit"
                    component={NavLink}
                    to={path}
                    key={path}
                >
                    <Icon className={classes.icon} />
                    {label}
                </Link>
            ))}
        </Breadcrumbs>
    );
};

export default RightItems;
