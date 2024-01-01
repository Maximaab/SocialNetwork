import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import {AllDataType} from "./components/data";

type T_DataType = {
    allData: AllDataType
    addPost: (value:string) => void
    onChangePostValue:(value:string)=>void
}

class App extends React.Component<T_DataType> {
    render() {
        const {allData, addPost,onChangePostValue} = this.props
        return <div className="app-wrapper">
            <Header/>
            <Navbar dialogData={allData.dialogsData.dialogItems}/>

            <div className="app-wrapper-content">
                <Roadmap allData={allData} addPost={addPost} onChangePostValue={onChangePostValue}/>
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
