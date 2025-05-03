// this is to unstand concept of props in react

import Product from './Product.jsx';

function ProductTab() {

  // we can also assign a array of objects to a variable
  const features = ["hi-tech", "latest", "fast"];
  return (
    <>
    <Product title="laptop" features={features} />
    <br />
    <Product title="phone" price="40k" features={features}/>
    <br />
    <Product title="tablet" price="32k" features={features}/>
    </>
  );
}

export default ProductTab;
