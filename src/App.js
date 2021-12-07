import React from 'react'
import './styles/globals.css';
// import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import "animate.css/animate.min.css";

const App = () => {
    return (
        // <Routes>
        //     <Route path="/" element={<Home />} />
        // </Routes>
        <>
            <Header />
            <Home />
        </>
    )
}

export default App

