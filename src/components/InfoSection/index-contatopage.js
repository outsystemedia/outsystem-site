import React from 'react'
import { SocialIcons, SocialIconLink, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements-contatopage'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const InfoSectionContato = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, buttonLabel2, buttonLabel3, alt, primary, dark, dark2, img}) => {
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
                                <SocialIcons>
                                    <SocialIconLink href="//www.facebook.com/outsystem.media/" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.instagram.com/outsystem/" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                    </SocialIconLink>
                                    <SocialIconLink href="//www.twitter.com/outsystemedia" target="_blank" aria-label="Twitter">
                                        <FaTwitter />
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

export default InfoSectionContato
