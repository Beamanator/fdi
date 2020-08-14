import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

// material-ui
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

// event configurations
import * as heat2020 from "./breadcrumbConfigs/heat-2020";
import * as erupt2020 from "./breadcrumbConfigs/erupt-2020";
import * as swift2020 from "./breadcrumbConfigs/swift-2020";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const RightItems = () => {
    const classes = makeStyles(styles)();
    const { pathname } = useLocation();

    // determine which breadcrumbs to display based on current path
    let breadcrumbs = [];
    if (pathname.includes(swift2020.path)) breadcrumbs = swift2020.breadcrumbs;
    else if (pathname.includes(erupt2020.path))
        breadcrumbs = erupt2020.breadcrumbs;
    else if (pathname.includes(heat2020.path))
        breadcrumbs = heat2020.breadcrumbs;

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            classes={{ separator: classes.separator }}
            separator="›"
        >
            {breadcrumbs.map(({ label, path, Icon }) => (
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
