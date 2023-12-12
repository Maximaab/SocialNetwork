import {Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";

const Roadmap =()=>{
    return <Routes>
<Route path="/profile" element={<Profile/>}></Route>
<Route path="/messages" element={<Dialogs/>}></Route>
<Route path="/*" element={<div>error</div>}></Route>
    </Routes>
}

export default Roadmap