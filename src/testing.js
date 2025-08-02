import React from "react";
import ReactDOM from "react-dom/client";

const Function = () =>{
    return(React.createElement(h2,{},"Somberi"));
};

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Function />);