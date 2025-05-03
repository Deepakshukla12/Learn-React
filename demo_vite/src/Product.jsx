// this is to unstand concept of props in react

function Product({ title, price = "10k", features}) {
  let styles = {backgroundColor: "gray", padding: "10px", margin: "10px", width: "200px"};

  // with condition styles(dynamic styles)
  const sty = {backgroundColor: price > "35k" ? "green" : "red"};
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h4 style={sty}>{price}</h4>
      <h5>{title} Description</h5>
      {features && features.map((element) => (
        <li>{element}</li>
      ))}
    </div>
  );
}

export default Product;
