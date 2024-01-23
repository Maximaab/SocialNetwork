import {Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import React from "react";
import DialogsContainer from "../Dialogs/Dialogs.Container";

import {UserContainer} from "../Users/User.Container";

export class Roadmap extends React.Component<any> {
    render() {

        return <Routes>
             <Route path="/profile"
                    element={<Profile />}></Route>
             <Route path="/messages/:id"
                    element={<DialogsContainer />}></Route>
            <Route path="/users"
                   element={<UserContainer />}></Route>
             <Route path="/*"
                    element={<div>error</div>}></Route>
                 </Routes>
    }
}

