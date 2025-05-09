// this is to unstand concept of props in react

import Product from "./Product.jsx";

function ProductTab() {
  const action = () => {
    alert("clicked");
    console.log("clicked");
  };

  // we can also assign a array of objects to a variable
  const features = ["hi-tech", "latest", "fast"];
  return (
    <div>
      <Product title="laptop" features={features} />
      <br />
      <Product title="phone" price="40k" features={features} />
      <br />
      <Product title="tablet" price="32k" features={features} />
      <br />
      <button onMouseOver={action}> Submit here</button>
    </div>
  );
}

export default ProductTab;
