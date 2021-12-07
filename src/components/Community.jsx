import React from 'react'

import Sectiontitle from './Sectiontitle'
import CommunityPacks from './CommunityPacks'
import ScrollAnimation from 'react-animate-on-scroll';

import communityimage1 from '../assets/community-facebook.jpg'
import communityimage2 from '../assets/community-youtube.jpg'
import communityimage3 from '../assets/community-twitter.jpg'
import communityimage4 from '../assets/community-forum.jpg'

const thegamedata = [
    {
        id: "community_1",
        community_image: communityimage1,
    },
    {
        id: "community_2",
        community_image: communityimage2,
    },
    {
        id: "community_3",
        community_image: communityimage3,
    },
    {
        id: "community_4",
        community_image: communityimage4,
    },
]

const Community = () => {
    return (
        <div className="community_wrap_main" id="community">
            <div className="container">
                <ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true}>
                    <Sectiontitle title="community"/>
                </ScrollAnimation>
                <ul className="community_list_wrap">
                    {
                        thegamedata.map((val, index) => {
                            return(
                                    <li className="community_list" key={val.id}>
                                        <ScrollAnimation animateIn='animate__fadeInUp' delay={index / 0.01} animateOnce={true}>
                                            <a href="#0">
                                                <img src={val.community_image} alt="community"/>
                                            </a>
                                        </ScrollAnimation>
                                    </li>
                            )
                        })
                    }
                </ul>

                <div className="community-packs">
                    <CommunityPacks />
                </div>
            </div>
        </div>
    )
}

export default Community
