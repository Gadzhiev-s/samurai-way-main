import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";
import {ActionAcType, StateType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type AppProps = {
    state: StateType
    dispatch: (action: ActionAcType) => void
    store:any
}


const App = (props: AppProps) => {

    return (<BrowserRouter>
            <div className={'app-wrapper'}>


                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={'/Dialogs'} render={() => <DialogsContainer store={props.store} />} />
                    <Route path={'/Profile'} render={() => <Profile store={props.store} />}/>
                                                  {/*updateNewPostsText={props.updateNewPostsText} addPosts={props.addPostsCallBack}*/}
                    {/*<Route path={'/Profile'} render={()=><Profile state={value} addPosts={addPosts}/>}/>*/}
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setting'} component={Setting}/>
                    <Route path={'/Friends'} component={Friends}/>

                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
