import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Profile";


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
