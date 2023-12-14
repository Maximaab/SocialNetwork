import {Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {DialogItems, Dialogs} from "../Dialogs/Dialogs";
import {AllDataType} from "../data";

type T_AllData = {
    allData:AllDataType
}
const Roadmap =(props:T_AllData)=>{
    return <Routes>
<Route path="/profile" element={<Profile postData={props.allData.postData}/>}></Route>
<Route path="/messages/*" element={<Dialogs Items={props.allData.dialogsData}/>}></Route>
{/*<Route path="/news" element={<News/>}></Route>*/}
{/*<Route path="/music" element={<Music/>}></Route>*/}
{/*<Route path="/settings" element={<Settings/>}></Route>*/}
<Route path="/*" element={<div>error</div>}></Route>
    </Routes>
}

export default Roadmap