// import './App.css'
// import Title1 from './Title.jsx';

// function Title2(){
//   return (
//     <h2>hello I am React</h2>
//   );
// }


// // we can only write a single component in a app component
// function App() {
//   return (
//     <Title1 />
//   )
// }

// export default App;

// // but we can use multiple components in a single component
// function App2() {
//   return (
//     <div>
//       <Title1 />
//       <Title2 />

//       <Title1 />
//       <Title2 />
//     </div>
//   )
// }

// export default App2;


// this is to unstand concept of props in react
import './App.css'
import Product from './ProductTab.jsx'

function App(){
  return (
    <Product />
  );
}

export default App;