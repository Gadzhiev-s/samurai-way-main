import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Content from "./components/Profile/Profile";


const App = () => {
    return (
        <div className={'app-wrapper'}>

            <Header/>
            <Nav/>
            <Content/>
        </div>
    );
}


export default App;
