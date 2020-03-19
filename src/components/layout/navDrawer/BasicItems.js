import React from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types'

// redux
// import { connect } from "react-redux";

// @material-ui/core
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons
import AcUnitIcon from "@material-ui/icons/AcUnit";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import WelcomeIcon from "@material-ui/icons/Dashboard";

// styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const BasicItems = () => {
    const classes = makeStyles(styles)();

    return (
        <>
            <Divider className={classes.dividerGray} />

            {/* Welcome */}
            <ListItem
                button
                activeClassName={classes.active}
                component={NavLink}
                to={"/welcome"}
            >
                <ListItemIcon classes={{ root: classes.menuItemIcon }}>
                    <WelcomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Welcome"} />
            </ListItem>

            <Divider className={classes.dividerGray} />

            {/* Upcoming Events */}
            <ExpansionPanel
                expanded
                elevation={0}
                classes={{ expanded: classes.expansionPanel }}
            >
                <ExpansionPanelSummary>
                    <Typography
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        {"Upcoming Events"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List dense disablePadding>
                        {[
                            {
                                Icon: AcUnitIcon,
                                label: "ERUPT 2020",
                                path: "/erupt-2020",
                            },
                        ].map(({ Icon, label, path }, index) => (
                            <React.Fragment key={path}>
                                {index ? null : (
                                    <Divider className={classes.dividerGray} />
                                )}
                                <ListItem
                                    button
                                    activeClassName={classes.active}
                                    component={NavLink}
                                    to={path}
                                >
                                    <ListItemIcon
                                        classes={{ root: classes.menuItemIcon }}
                                    >
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={label} />
                                </ListItem>
                                <Divider className={classes.dividerGray} />
                            </React.Fragment>
                        ))}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <Divider className={classes.dividerGray} />

            {/* Previous Events */}
            <ExpansionPanel
                elevation={0}
                classes={{ root: classes.expansionPanel }}
                // cancel click propagation so nav drawer doesn't
                // -> close when this panel is expanded
                onChange={(e) => e.stopPropagation()}
            >
                <ExpansionPanelSummary>
                    <Typography
                        style={{
                            backgroundColor: "rgba(0,0,0,0)",
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        {"Previous Events"}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List dense disablePadding>
                        {[
                            {
                                Icon: BeachAccessIcon,
                                label: "SWIFT 2020",
                                path: "/swift-2020",
                            },
                        ].map(({ Icon, label, path }, index) => (
                            <React.Fragment key={path}>
                                {index ? null : (
                                    <Divider className={classes.dividerGray} />
                                )}
                                <ListItem
                                    button
                                    activeClassName={classes.active}
                                    component={NavLink}
                                    to={path}
                                >
                                    <ListItemIcon
                                        classes={{ root: classes.menuItemIcon }}
                                    >
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={label} />
                                </ListItem>
                                <Divider className={classes.dividerGray} />
                            </React.Fragment>
                        ))}
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <Divider className={classes.dividerGray} />

            {/* <List disablePadding>
                {[
                    {
                        Icon: EventIcon,
                        label: "Calendar",
                        path: "/calendar",
                    },
                    {
                        Icon: RolesIcon,
                        label: "Reports",
                        path: "/reports",
                    },
                ].map(({ Icon, label, path }, index) => (
                    <React.Fragment key={path}>
                        {index ? (
                            <Divider className={classes.dividerGray} />
                        ) : null}
                        <ListItem
                            button
                            activeClassName={classes.active}
                            component={NavLink}
                            to={path}
                        >
                            <ListItemIcon
                                classes={{ root: classes.menuItemIcon }}
                            >
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>

            <Divider className={classes.dividerGray} /> */}
        </>
    );
};

export default BasicItems;
