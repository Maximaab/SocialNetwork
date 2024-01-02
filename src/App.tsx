import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import {AllDataType} from "./components/data/data";

type T_DataType = {
    allData: AllDataType


    dispatch:(action:any)=>void
}

class App extends React.Component<T_DataType> {
    render() {
        const {allData,dispatch} = this.props
        return <div className="app-wrapper">
            <Header/>
            <Navbar dialogData={allData.dialogsData.dialogItems}/>

            <div className="app-wrapper-content">
                <Roadmap allData={allData}   dispatch={dispatch}/>
            </div>
        </div>;
    }
}

// function App(props:T_DataType) {
//     return (
//         <div className="app-wrapper">
//             <Header/>
//             <Navbar dialogData={props.allData.dialogsData.dialogItems}/>
//
//             <div className="app-wrapper-content">
//                 <Roadmap allData={props.allData} addPost={props.addPost} />
//             </div>
//
//         </div>
//     );
// }

export default App;
