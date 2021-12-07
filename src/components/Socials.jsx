import React from 'react';

import FacebookLogo from '../assets/fb.png';
import InstagramLogo from '../assets/ig.png';
import MediumLogo from '../assets/med.png';
import RedditLogo from '../assets/rdt.png';
import TelegramLogo from '../assets/tele.png';
import TwitterLogo from '../assets/tw.png';
import DiscordLogo from '../assets/disc.png';

const Socials = () => {
	return (
		<>
			<a  href="https://www.instagram.com/battlesagaofficial/" target="_blank" >
				<img
					src={InstagramLogo}
					layout="fixed"
					width="52"
					alt="instagarm"
				/>
			</a>
			<a href="https://www.facebook.com/Battle-Saga-106783131809509" target="_blank">
				<img
					src={FacebookLogo}
					layout="fixed"
					width="52"
					alt="FacebookLogo"
				/>
			</a>
			<a href="https://medium.com/@BattleSagaOfficial" target="_blank">
				<img
					src={MediumLogo}
					layout="fixed"
					width="52"
					alt="MediumLogo"
				/>
			</a>
			<a href="https://discord.gg/2KNN6JXSWS" target="_blank">
				<img
					src={DiscordLogo}
					layout="fixed"
					width="52"
					alt="DiscordLogo"
				/>
			</a>
			<a href="https://twitter.com/battle_saga?s=21" target="_blank">
				<img
					src={TwitterLogo}
					layout="fixed"
					width="52"
					alt="TwitterLogo"
				/>
			</a>
			<a href="https://www.reddit.com/user/BattleSagaOfficial" target="_blank">
				<img
					src={RedditLogo}
					layout="fixed"
					width="52"
					alt="RedditLogo"
				/>
			</a>
			{/* <a href="#">
				<a target="_blank">
					<img
						src={YoutubeLogo}
						objectFit="contain"
						layout="fixed"
						width="52"
						alt="RedditLogo"
					/>
				</a>
			</a> */}
			<a href="https://t.me/BattleSaga_Official" target="_blank">
				<img
					src={TelegramLogo}
					layout="fixed"
					width="52"
					alt="TelegramLogo"
				/>
			</a>
		</>
	);
};

export default Socials;
