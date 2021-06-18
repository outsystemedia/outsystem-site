import React, {useState} from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements-eraxpage'
import Video from '../../videos/video-erax.mp4'



const HeroSectionErax = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>A NOVA ERA DA SUA LIBERDADE</HeroH1>
                <HeroP>
                    PROJETO ERA X
                </HeroP> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSectionErax
