import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import {addPost, AllDataType} from "./components/data";

type T_DataType = {
    allData:AllDataType
    addPost:()=>void

}
function App(props:T_DataType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar dialogData={props.allData.dialogsData.dialogItems}/>

            <div className="app-wrapper-content">
                <Roadmap allData={props.allData} addPost={props.addPost} />
            </div>

        </div>
    );
}

export default App;
