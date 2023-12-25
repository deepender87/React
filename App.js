// creating the nested div using react element

// can have multiple child

const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"New Heading"),React.createElement("h2",{},"New Heading 2")])
);


const heading = React.createElement(
    "h1",
    {id:"heading",className:"heading-h1"},
    "My first React Js program");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);