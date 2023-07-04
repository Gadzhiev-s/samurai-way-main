import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { StateType} from "./redux/state";


export type AppProps = {
    state:StateType
}
const App = (props:AppProps) => {
    return (<BrowserRouter>
            <div className={'app-wrapper'}>


                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={'/Dialogs'} render={()=><Dialogs state={props.state}/>}/>
                    <Route path={'/Profile'} render={()=><Profile posts={props.state.profilePage.myPostData}/>}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setting'} component={Setting}/>

                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
