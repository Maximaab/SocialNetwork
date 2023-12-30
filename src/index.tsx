import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, allData} from "./components/data";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const rerenderEntireThree = ()=>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App allData={allData} addPost={addPost}  />
            </BrowserRouter>

        </React.StrictMode>
    );
}
rerenderEntireThree()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
