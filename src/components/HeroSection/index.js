import React, {useState} from 'react'
import { LoaderVideoErax, ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import Video2 from '../../videos/video-erax.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                <LoaderVideoErax autoPlay loop muted src={Video2} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Transformando pequenos canais em grandes negócios.</HeroH1>
                <HeroP>
                    Holding especializada em mídias digitais.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/contato" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Entre em contato {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
