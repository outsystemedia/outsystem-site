import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements-outsystempage'
import Video from '../../videos/space.mp4'
import logo from '../../images/logo.png'


const HeroSectionOutsystem = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1 src={logo}></HeroH1>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSectionOutsystem
