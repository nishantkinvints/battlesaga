import React from 'react'

const Roadmap = () => {
    return (
        <div className="roadmap_wrapper">
            <div className="container">
                <div className="field field-name-field-content field-type-text-long field-label-hidden">
                    <div className="large-8 columns grid-system-column introtext">
                        <div className="mobile-8 large-6 columns grid-system-column">
                            <h2>Constantly Evolving</h2>
                            <p><em>Clash of Clans</em> has been constantly evolving to offer more user-friendly, consistent and fun online experiences for Supercell gamers. There have been countless updates since the game launched in 2012.</p>
                        </div>
                    </div>
                    <div className="large-8 columns grid-system-column chart">
                        <div className="scroll-container">
                            <div className="timeline-block long">
                                <div className="title icon-launch animate"><span>Global Launch</span></div>
                                <div className="time">2012</div>
                            </div><div className="timeline-block medium">
                                <div className="title animate"><span>Heroes</span></div>
                                <div className="time">&nbsp;</div>
                            </div><div className="timeline-block medium">
                                <div className="title animate"><span>Clan Wars</span></div>
                                <div className="time">&nbsp;</div>
                            </div><div className="timeline-block medium">
                                <div className="title animate"><span>Friendly Wars</span></div>
                                <div className="time">&nbsp;</div>
                            </div><div className="timeline-block medium">
                                <div className="title animate"><span>Builder Base</span></div>
                                <div className="time">&nbsp;</div>
                            </div><div className="timeline-block short">
                                <div className="title animate"><span>Town Hall 12</span></div>
                                <div className="time">&nbsp;</div>
                            </div><div className="timeline-block long inactive">
                                <div className="title animate"></div>
                                <div className="time">Today</div>
                            </div>
                            <div className="scroll-tip"></div>
                        </div>
                    </div>
                    <div className="game-screen animate"></div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
