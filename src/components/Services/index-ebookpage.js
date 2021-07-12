import React, { useState } from 'react'
import Icon1 from '../../images/vivacall.png'
import { FaCheckCircle } from 'react-icons/fa'
import { SocialIcons, SocialIconLink, ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements-ebookpage'
import  Downloader  from '../Downloader/Downloader'
import { Buttonebook } from '../ButtonElement-download-ebook';
const ServicesEbook = () => {

    const [download, setDownload] = useState('');

    return (
        <ServicesContainer id="quero">
            <ServicesH1>QUERO MEU EBOOK</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>VIVA DE INTERNET</ServicesH2>
                    <ServicesP>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Técnicas de Marketing Digital
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Dezenas de sites para fazer dinheiro
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Estratégias de como iniciar seu negócio
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Fontes de Renda Passivas
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Comece a faturar em menos de 24 horas
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Crie um Mindset empreendedor!
                    </SocialIcons>
                    </ServicesP>
                        <a href='//pay.hotmart.com/D56738458M' style={{textDecoration: 'none', color: '#fff'}}>
                        <Buttonebook src="//pay.hotmart.com/D56738458M">Quero Viver de Internet</Buttonebook>
                        </a>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        
    )
}

export default ServicesEbook
