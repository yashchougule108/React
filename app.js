/*
<div id="parent">
    <div id="child">
       <h1>I'm h1 tag</h1>

    <div>
<div>

ReactElement-->object-->after rendering it will convert into html
order of files matters in code
React will replace code 
*/

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Im h1 tag")))