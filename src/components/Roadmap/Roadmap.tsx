import {Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {DialogItems, Dialogs} from "../Dialogs/Dialogs";
import {AllDataType} from "../data/data";
import React from "react";

type T_AllData = {
    allData:AllDataType


    dispatch:(action:any)=>void
}
export class Roadmap extends React.Component<T_AllData> {
    render() {
        const {allData, dispatch} = this.props
        return <Routes>
             <Route path="/profile" element={<Profile ProfilePage={allData.ProfilePage}  dispatch={dispatch} />}></Route>
             <Route path="/messages/:id" element={<Dialogs Items={allData.dialogsData}/>}></Route>
             {/*<Route path="/news" element={<News/>}></Route>*/}
             {/*<Route path="/music" element={<Music/>}></Route>*/}
             {/*<Route path="/settings" element={<Settings/>}></Route>*/}
             <Route path="/*" element={<div>error</div>}></Route>
                 </Routes>
    }
}

// const Roadmap =(props:T_AllData)=>{
//     return <Routes>
// <Route path="/profile" element={<Profile postData={props.allData.postData} addPost={props.addPost}/>}></Route>
// <Route path="/messages/:id" element={<Dialogs Items={props.allData.dialogsData}/>}></Route>
// {/*<Route path="/news" element={<News/>}></Route>*/}
// {/*<Route path="/music" element={<Music/>}></Route>*/}
// {/*<Route path="/settings" element={<Settings/>}></Route>*/}
// <Route path="/*" element={<div>error</div>}></Route>
//     </Routes>
// }

export default Roadmap