import React from 'react';
import { Link } from 'react-router-dom';

import FacebookLogo from '../assets/fb.png';
import InstagramLogo from '../assets/ig.png';
import MediumLogo from '../assets/med.png';
import RedditLogo from '../assets/rdt.png';
import TelegramLogo from '../assets/tele.png';
import TwitterLogo from '../assets/tw.png';
import YoutubeLogo from '../assets/yt.png';
import DiscordLogo from '../assets/disc.png';

const Socials = () => {
	return (
		<>
			<Link to="https://www.instagram.com/battlesagaofficial/" target="_blank" >
				<img
					src={InstagramLogo}
					layout="fixed"
					width="52"
					alt="instagarm"
				/>
			</Link>
			<Link to="https://www.facebook.com/Battle-Saga-106783131809509" target="_blank">
				<img
					src={FacebookLogo}
					layout="fixed"
					width="52"
					alt="FacebookLogo"
				/>
			</Link>
			<Link to="https://medium.com/@BattleSagaOfficial" target="_blank">
				<img
					src={MediumLogo}
					layout="fixed"
					width="52"
					alt="MediumLogo"
				/>
			</Link>
			<Link to="https://discord.gg/2KNN6JXSWS" target="_blank">
				<img
					src={DiscordLogo}
					layout="fixed"
					width="52"
					alt="DiscordLogo"
				/>
			</Link>
			<Link to="https://twitter.com/battle_saga?s=21" target="_blank">
				<img
					src={TwitterLogo}
					layout="fixed"
					width="52"
					alt="TwitterLogo"
				/>
			</Link>
			<Link to="https://www.reddit.com/user/BattleSagaOfficial" target="_blank">
				<img
					src={RedditLogo}
					layout="fixed"
					width="52"
					alt="RedditLogo"
				/>
			</Link>
			{/* <Link href="#">
				<a target="_blank">
					<img
						src={YoutubeLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
						alt="RedditLogo"
					/>
				</a>
			</Link> */}
			<Link to="https://t.me/BattleSaga_Official" target="_blank">
				<img
					src={TelegramLogo}
					layout="fixed"
					width="52"
					alt="TelegramLogo"
				/>
			</Link>
		</>
	);
};

export default Socials;
