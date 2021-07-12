import React, {useState} from 'react'
import { LoaderImgEbook, LoaderVideoErax, ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../images/construction.jpg'
import { Button } from '../ButtonElement'
import Video2 from '../../videos/video-erax.mp4'
import src1 from '../../images/viva.png'

const HeroSectionPlanilhas = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type='image' />
                <LoaderVideoErax autoPlay muted src={Video2} type='video/mp4' />
                <LoaderImgEbook src={src1} type='img/png'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>PÁGINA EM CONSTRUÇÃO</HeroH1>
                <HeroP>
                    Em breve...
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Voltar para Home {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSectionPlanilhas
