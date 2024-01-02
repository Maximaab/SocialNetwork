import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AllDataType, Store, T_Store} from "./components/data/data";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const rerenderEntireThree = (state:AllDataType)=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App allData={state} dispatch={Store.dispatch.bind(Store)}  />
            </BrowserRouter>

        </React.StrictMode>
    );
}
rerenderEntireThree(Store.getData())
Store.subscribe(rerenderEntireThree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
