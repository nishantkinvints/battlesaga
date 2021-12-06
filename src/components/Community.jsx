import React from 'react'

import Sectiontitle from './Sectiontitle'
import CommunityPacks from './CommunityPacks'

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
        <div className="community_wrap_main">
            <div className="container">
                <Sectiontitle title="Community"/>
                <ul className="community_list_wrap">
                    {
                        thegamedata.map((val, index) => {
                            return(
                                <li className="community_list" key={val.id}>
                                    <a href="#0">
                                        <img src={val.community_image} alt="community"/>
                                    </a>
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
