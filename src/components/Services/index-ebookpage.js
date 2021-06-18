import React from 'react'
import Icon1 from '../../images/vivacall.png'
import { FaCheckCircle } from 'react-icons/fa'
import { SocialIcons, SocialIconLink, ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements-ebookpage'
const ServicesEbook = () => {
    return (
        <ServicesContainer id="quero">
            <ServicesH1>QUERO MEU EBOOK</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href="//www.amazon.com/" target="_blank" aria-label="Facebook">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>VIVA DE INTERNET</ServicesH2>
                    <ServicesP>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Marketing Digital
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Mais de 100 sites mencionados
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Estratégias de como iniciar
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Fontes de Renda passivas
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Comece a faturar em 1 dia
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Mude seu Mindset
                    </SocialIcons>
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesEbook
