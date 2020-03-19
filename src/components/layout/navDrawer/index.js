import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { useLocation } from "react-router-dom";

// menu-items
import BasicItems from "./BasicItems";
// import AdminItems from "./AdminItems";

// @material-ui/core
// import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
// import Paper from "@material-ui/core/Paper";

// styles
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../../assets/fdi_logo.png";
import styles from "./styles";

const NavDrawer = ({ handleDrawerToggle, mobileOpen }) => {
    const classes = makeStyles(styles)();
    // const location = useLocation();
    // const currentPath = location.pathname;

    const drawer = (
        <div>
            <div className={classes.logoBox}>
                <img src={Logo} alt="Logo" width={"100%"} />
            </div>

            {/* when user not authenticated, render some dummy text */}
            {/* otherwise, render appropriate items, based on currentPath */}
            {/* {!auth || !auth.uid ? (
                <div>Please sign in...</div>
            ) : currentPath.includes("admin") ? (
                <AdminItems />
            ) : (
                <BasicItems />
            )} */}
            <BasicItems />
        </div>
    );

    return (
        <nav aria-label="nav drawer">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                onClick={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
        </nav>
    );
};

NavDrawer.propTypes = {
    auth: PropTypes.object,
    handleDrawerToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    // auth: state.firebase.auth,
});
// const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(NavDrawer);
