const mainContainer = document.getElementById("root");

const reactElement = {
    type :'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to go to google'
}


customRender(reactElement, mainContainer);

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // Set the attributes of the element one by one
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);


    // Loop through the props and set them as attributes
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}