import {Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {DialogItems, Dialogs} from "../Dialogs/Dialogs";

const Roadmap =()=>{
    return <Routes>
<Route path="/profile" element={<Profile/>}></Route>
<Route path="/messages" element={<Dialogs/>}></Route>
<Route path="/messages/:id" element={<Dialogs/>}></Route>
{/*<Route path="/news" element={<News/>}></Route>*/}
{/*<Route path="/music" element={<Music/>}></Route>*/}
{/*<Route path="/settings" element={<Settings/>}></Route>*/}
<Route path="/*" element={<div>error</div>}></Route>
    </Routes>
}

export default Roadmap