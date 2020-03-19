/*eslint no-dupe-keys: "ignore"*/
const NAV_DRAWER_WIDTH = 240;

const styles = (theme) => ({
    active: { backgroundColor: "#eaeaea38" },
    centeredTextChild: { flex: 1 },
    dividerGray: { backgroundColor: "#5b5b5b" },
    // drawer: {
    //     [theme.breakpoints.up("md")]: {
    //         width: NAV_DRAWER_WIDTH,
    //         flexShrink: 0,
    //     },
    // },
    drawerPaper: {
        color: "white",
        width: NAV_DRAWER_WIDTH,
        background: "rgb(248,195,15)",
        background:
            "linear-gradient(330deg, rgba(248,195,15,1) 0%, rgba(0,0,0,1) 57%)",
    },
    logoBox: { margin: "15px" },
    panelIcon: {
        marginRight: "10px",
    },

    menuItemIcon: {
        color: "white",
        minWidth: "36px",
    },
    // remove vertical padding between "expansion panel"
    // -> and other elements
    expansionPanel: {
        color: "white",
        backgroundColor: "rgba(0,0,0,0)",
        "&.Mui-expanded": {
            margin: "0px",
        },
    },
});

export default styles;
