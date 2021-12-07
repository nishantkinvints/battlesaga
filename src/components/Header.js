import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const moveSection = (data) => {
        var getsectionId = document.getElementById(data).offsetTop;
        window.scroll({
            top: getsectionId,
            behavior: 'smooth'
        });
    }


    return (
        <div className="header_wrap">
            <div className="menu_col menu_left">
                <ul>
                    <li>
                        <Link to="#0" className="thegame" onClick={(e) => moveSection(e.target.className)}>
                            The game
                        </Link>
                    </li>
                    <li>
                        <Link to="#0" className="community" onClick={(e) => moveSection(e.target.className)}>
                            COMMUNITY
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="menu_col menu_right">
                <ul>
                    <li>
                        <Link to="#0" className="roadmap" onClick={(e) => moveSection(e.target.className)}>
                            Roadmap
                        </Link>
                    </li>
                    <li>
                        <Link to="#0" className="subscribe" onClick={(e) => moveSection(e.target.className)}>
                            Subscribe
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
