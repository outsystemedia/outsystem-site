import React from 'react'
import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from 'react-icons/fa'
import { ImgWrap, Img, FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import src1 from '../../images/logo.png'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                            <FooterLink to="/outsystem">Conheça a Outsystem</FooterLink>
                            <FooterLink to="/parceiros">Nossos Parceiros</FooterLink>
                            <FooterLink to="/contato">Entre em contato</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>   
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nossos Projetos</FooterLinkTitle>
                            <FooterLink to="/ebook">Viva de Internet</FooterLink>
                            <FooterLink to="/erax">Projeto Era X</FooterLink>
                            <FooterLink to="/club">Cold Club</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> 
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <ImgWrap>
                                <Img src={src1} />
                            </ImgWrap>
                        </SocialLogo>
                        <WebsiteRights>Outsystem Media © {new Date().getFullYear()} Todos os Direitos Reservados. </WebsiteRights>
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
                            <SocialIconLink href="//www.reddit.com/user/outsystemedia" target="_blank" aria-label="Reddit">
                                <FaReddit />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
