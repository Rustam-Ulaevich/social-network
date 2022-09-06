import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsCotainer";


type AppType = {
    // store: StoreType
    // dispatch: (action: ActionsType) => void
  }

function App(props: AppType) {
    return(
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile"
                           element={<Profile />}/>
                    <Route path="/dialogs"
                           element={<DialogsContainer />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
    )
}

export default App;
