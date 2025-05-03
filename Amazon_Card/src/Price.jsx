
function Price({oldPrice, newPrice}) {
    const oldstyle = {
        textDecoration: 'line-through',
    };
    let newStyles = {
        fontWeight: 'bold',
        fontSize: '20px'
    };
    let styles = {
        width: "100%",
        backgroundColor: "gray",
        padding: "0px 10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px"
    }
    return (
        <div style={styles}>
            <span style={oldstyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}

export default Price;