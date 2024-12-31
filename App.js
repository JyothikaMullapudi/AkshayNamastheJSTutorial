
//const heading = React.createElement("h6",{id : "root"},"Hi this is my React JS first code");


// root.render(heading);

const parent = React.createElement("div", { id: "demo" },[
    React.createElement("div", { id: "demo2" }, [React.createElement("h3",{},"HI I Am H3"),React.createElement("h4",{},"I am H4")]),
    React.createElement("div", { id: "demo1" }, [React.createElement("h3",{},"HI I Am H3"),React.createElement("h4",{},"I am H4")])]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
