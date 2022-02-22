import React from "react";
import ReactDOM from "react-dom";

const fName = "Diego";
const lName = "Felix";
const num = "16";

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}! </h1>
    <p>your lucky number Diego is {8 + 8}</p>
    <p> 🥳 🥳</p>
  </div>,
  document.getElementById("root")
);
