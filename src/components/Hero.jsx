import { motion } from "framer-motion"
import React, { useState } from 'react'
import GrassFront from '../assets/grass_front.png';
import Grass from '../assets/grass.png';
// import Layer675 from '../assets/Layer_675.png';
import Base from '../assets/base.png';
import LogoBase from '../assets/logo_base.png';
import BattleSaga from '../assets/battle_saga.png';
import ElementSide1 from '../assets/element_side_1.png';
import ElementSide2 from '../assets/element_side_2.png';
import Orge from '../assets/ogre.png';
import Warrior2 from '../assets/warrior_2.png';
import Warrior1 from '../assets/warrior_1.png';
import Archer1 from '../assets/archer_1.png';
import Archer2 from '../assets/archer_2.png';
import Shadow from '../assets/shadow.png';
import Spartan from '../assets/spartan.png';
import DragonR from '../assets/dragon-right.png';
import DragonL from '../assets/dragon-left.png';
// import DragonFront from '../assets/DRAGON_FRONT copy.png';

import Lightning1 from '../assets/lightning_1.png';
import Lightning2 from '../assets/lighting_2.png';
import Socials from './Socials';
import DarkBg from '../assets/dark_bg.png';
import Toggle from '../assets/toggle.png';


const Hero = () => {
    const [toggle, settoggle] = useState(false);

    const togglemenu = () => {
        settoggle(!toggle);
    }


  return (
    // this div is used for full screen
    <div className="battle_saga_wrapper">
      {/* This div is used for the top navbar */}
      <div className="dark_bg">
        <img src={DarkBg} alt="dark"/>
      </div>
      <div className="base_img">
        <img src={Base} alt="base"/>
        <div className="logo_battlesaga_wrap">
          <img src={LogoBase} alt="logo battel"/>
          <div className="battleSaga_img">
            <img src={BattleSaga} alt="battel"/>
          </div>
        </div>
      </div>

      {/* Used for the left side element */}
      <div className="tree_and_strone">
        <img
          src={ElementSide1}
          alt="Element side 2"
          width={600}
          // layout="responsive"
        />
      </div>

      {/* Thunder */}

      {/* <div className="absolute top-8 right-1/2 w-[1020px]">
				<img src={Thunder} />
			</div> */}
       <motion.div
        animate={{
          filter: [
            'brightness(1.5)',
            'brightness(0)',
            'brightness(1)',
            'brightness(1.9)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
          ],
        }}
        transition={{ duration: 0.9, yoyo: Infinity, delay: 0.7 }}
        className="birds_left"
        >
            <img src={Lightning1}  alt="light"/>
        </motion.div>

    <motion.div
        animate={{
          filter: [
            'brightness(1.5)',
            'brightness(0)',
            'brightness(1)',
            'brightness(1.9)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
          ],
    }}
    transition={{ duration: 0.9, yoyo: Infinity, delay: 0.7 }}
    className="birds_right"
    >
        <img src={Lightning2} alt="Lightning"/>
    </motion.div> 

      {/* This div is used for the characters */}
      <div className="battle_saga_mens_wrapper">
        <div className="battle_saga_mens_inner">
          <div className="orge_img">
            <img src={Orge} alt="Orge"/>
          </div>

          <motion.div
            animate={{ y: [-80, -50], x: [300, 300] }}
            transition={{ duration: 1, yoyo: Infinity, delay: 0.7 }}
            className="dragonL_img"
          >
            <span>
              <img src={DragonL} alt="DragonL"/>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [-80, -50], x: [-300, -300] }}
            transition={{ duration: 1, yoyo: Infinity }}
            className="dragonR_img"
          >
            <span>
              <img src={DragonR} alt="DragonR"/>
            </span>
          </motion.div>

          <div className="warrior2_img_wrap">
            <span className="warrior2_img_inner">
              <img src={Warrior2} alt="Warrior2"/>
            </span>
          </div>
          <div className="archer1_wrap">
            <span className="archer1_inner">
              <img src={Archer1} alt="Archer1"/>
            </span>
          </div>
          <div className="Warrior1_img_wrap">
            <span className="Warrior1_img_wrap_inner">
              <img src={Warrior1} alt="Warrior1"/>
            </span>
          </div>
          <div className="spartan_wrap_img">
            <span className="spartan_inner_img">
              <img src={Spartan} alt="Spartan"/>
            </span>
          </div>
          <div className="archer2_img_wrap">
            <div className="archer2_img_inner">
              <img src={Archer2} alt="Archer2"/>
            </div>
          </div>
          <div className="shadow_img_wrap">
            <img src={Shadow} alt="Shadow"/>
          </div>
        </div>
      </div>

      {/* Used for the right side element */}
      <div className="elementside2_right">
        <img
          src={ElementSide2}
          alt="Element side 2"
          width={600}
        />
      </div>

      {/* Used for the bottom grass section */}
      <div className="grass_wrap">
        <img src={Grass} layout="responsive" alt="light"/>
      </div>
      <div className="grass_wrap_img">
        <img
          src={GrassFront}
          alt="light"
        />
      </div>

      <div className="socials_wrapper">
            <div to="#0" target="_blank" className="toggle" onClick={togglemenu}>
                <img
                    src={Toggle}
                    layout="fixed"
                    width="52"
                    alt="toggle"
                />
            </div>
            <div id="social_icon"  className = { toggle === true ? "toggle_active" : "" }>
                <Socials />
            </div>
      </div>


    </div>
  );
};

export default Hero;
