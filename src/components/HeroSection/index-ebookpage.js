import React, {useState} from 'react'
import { ImgWrap, Img, ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements-ebookpage'
import Video from '../../videos/lan.mp4'
import { Button } from '../ButtonElement'
import src1 from '../../images/vivalan.png'
import { NavLinks } from '../Navbar/NavbarElements-ebookpage'

const HeroSectionEbook = () => {
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
                <HeroH1>
                    <ImgWrap>
                        <Img src={src1} />
                    </ImgWrap>
                </HeroH1>

                <HeroBtnWrapper>
                    <NavLinks to="quero"
                         smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                    >
                        <Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                        Adquira já! {hover ? <ArrowForward /> : <ArrowRight /> }
                        </Button>
                    </NavLinks>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSectionEbook
