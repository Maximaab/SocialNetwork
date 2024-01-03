import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Roadmap} from "./components/Roadmap/Roadmap";
import {NavbarCantainer} from "./components/Navbar/Navbar.cantainer";


class App extends React.Component<any> {
    render() {

        return <div className="app-wrapper">
            <Header/>
            <NavbarCantainer/>

            <div className="app-wrapper-content">
                <Roadmap/>
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
