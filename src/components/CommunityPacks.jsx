import React from 'react'

import communitypacksimg1 from '../assets/kit-walls.jpg'
import communitypacksimg2 from '../assets/kit-fan.jpg'
import communitypacksimg3 from '../assets/kit-stickers.jpg'


const communitypacks = [
    {
        id: "communitypacks_1",
        communitypacks_image: communitypacksimg1,
    },
    {
        id: "communitypacks_2",
        communitypacks_image: communitypacksimg2,
    },
    {
        id: "communitypacks_3",
        communitypacks_image: communitypacksimg3,
    },
]


const CommunityPacks = () => {
    return (
        <ul>
        {
            communitypacks.map((val, index) => {
                return(
                    <li key={val.id}>
                        <a href="#0">
                            {/* <Image src={val.communitypacks_image} alt="community packs"/> */}
                        </a>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default CommunityPacks
