import React from 'react';
import ReactDOM from 'react-dom/client';
import  { BrowserRouter } from "react-router-dom"
import RouterCustom from "./router";
import "./style/style.css"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
    <RouterCustom/>
</BrowserRouter>
);


