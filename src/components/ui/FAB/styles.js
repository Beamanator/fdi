const styles = (theme) => ({
    root: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 150,
    },
    fabRoot: {
        opacity: "60%",
        "&:hover": {
            opacity: "80%",
        },
    },
    fabText: {
        paddingRight: "5px",
        paddingLeft: "10px",
    },
});

export default styles;
