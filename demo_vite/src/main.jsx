import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// // A simple functional React component named MyApp
// function MyApp(){
//     return (
//         <div>
//             {/* JSX syntax to render a heading inside a div */}
//             <h1>Custom App | chai</h1>
//         </div>
//     )
// }

// // It's a raw representation of what React.createElement would produce.
// // It simulates a React element manually without JSX.
// /*
// const ReactElement = {
//     type: 'a', // HTML tag type
//     props: {
//         href: 'https://google.com', // hyperlink reference
//         target: '_blank' // open in new tab
//     },
//     children: 'Click me to visit google' // link text
// }
// */

// // Creating a React element using JSX (recommended and easier to read)
// // This will render a hyperlink that opens Google in a new tab
// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )

// // A simple string variable (not used in rendering)
// const anotherUser = "chai aur react"

// // Creating a React element manually using React.createElement (alternative to JSX)
// // Parameters: (type, props, ...children)
// // Here, we're trying to render an anchor tag with a URL, and two children:
// // 1. 'click me to visit google' (text)
// // 2. anotherElement (JSX anchor element created above)
// const reactElement = React.createElement(
//     'a',
//     { href: 'https://google.com', target: '_blank' },
//     'click me to visit google',
//     anotherElement
// )

// // Rendering the `reactElement` into the DOM element with id="root"
// // `createRoot` is used from React 18+ to create a root where the app is rendered
// ReactDOM.createRoot(document.getElementById('root')).render(
//     // Only `reactElement` is rendered on the page
//     reactElement
// )
