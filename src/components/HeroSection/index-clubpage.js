import React, {useState} from 'react'
import { ImgWrap, Img, ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements-clubpage'
import Video from '../../videos/video-club.mp4'
import { Buttonclub } from '../ButtonElement-club'
import src1 from '../../images/coldclub.png'
import { NavLinks } from '../Navbar/NavbarElements-clubpage'

const HeroSectionClub = () => {
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
                <HeroP>
                    Crypto Investments Club
                </HeroP>
                <HeroBtnWrapper>
                    <NavLinks to="planos"
                         smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                    >
                        <Buttonclub onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                        Contratar Agora! {hover ? <ArrowForward /> : <ArrowRight /> }
                        </Buttonclub>
                    </NavLinks>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSectionClub
