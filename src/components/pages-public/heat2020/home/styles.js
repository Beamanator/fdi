const styles = (theme) => ({
    headerImg: {
        marginBottom: "20px",
        width: "100%",
    },
    fieldImg: {
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            paddingBottom: "15px",
            paddingLeft: "0px",
        },
        width: "50%",
        float: "right",
        paddingLeft: "10px",
    },
});

export default styles;
