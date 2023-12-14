import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import {AllDataType} from "./components/data";

type T_DataType = {
    allData:AllDataType

}
function App(props:T_DataType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Roadmap allData={props.allData} />
            </div>

        </div>
    );
}

export default App;
