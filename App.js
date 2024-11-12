const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello from React!!"
);// this, here, const heading is an object, not a h1 tag

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {id:"heading"},
            "Hello I am a h1 heading from React!!"
        ),
        React.createElement(
            "h2",
            {id:"heading2"},
            "Hello I am a h2 heading from React!!"
        )]
    )
);//creating a nested div one with parent as id, one as child


//A react create element creates a react object that is converted and is understood by HTML supported browsers

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);