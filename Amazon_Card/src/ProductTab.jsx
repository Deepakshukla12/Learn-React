
import Product from './Product.jsx';

function ProductTab() {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };
  return (
    <div style={styles}>
        <Product title="Logitech MX Master" idx={0} />
        <Product title="Apple Pencil (2nd gen)" idx={1} />
        <Product title="Zebronics Zeb-Transformer" idx={2} />
        <Product title="Petronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
