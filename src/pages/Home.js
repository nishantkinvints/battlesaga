import React from 'react'

import Hero from '../components/Hero';
import Thegame from '../components/Thegame.jsx';
import Community from '../components/Community.jsx';
import Roadmap from '../components/Roadmap.jsx';
import EmailSubscribe from '../components/EmailSubscribe.jsx';


const Home = () => {
    return (
        <div className="App">
            <Hero />
            <Thegame />
            <Community />
            <Roadmap />
            <EmailSubscribe />
        </div>
    )
}

export default Home

