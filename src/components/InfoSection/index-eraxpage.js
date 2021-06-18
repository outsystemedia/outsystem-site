import React from 'react'
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements-eraxpage'
import { FaInstagram, FaItunesNote, FaPlay, FaYoutube } from 'react-icons/fa'
import { SocialIconLink, SocialIcons } from './../InfoSection/InfoElements-eraxpage'

const InfoSectionErax = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2, img}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <SocialIcons dark={dark}>
                                    <SocialIconLink href="//cos.tv/channel/26854183668720640/" target="_blank" aria-label="Costv" >
                                        <FaPlay />
                                    </SocialIconLink>
                                        <SocialIconLink href="//www.instagram.com/projeto.erax/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                        </SocialIconLink>
                                    <SocialIconLink href="//www.youtube.com/channel/UCzfqsMmeJmjiHglucGB8prg/" target="_blank" aria-label="Youtube">
                                        <FaYoutube />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.tiktok.com/@projeto.erax?lang=pt-BR/" target="_blank" aria-label="Tiktok">
                                        <FaItunesNote />
                                    </SocialIconLink>
                                </SocialIcons>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSectionErax
