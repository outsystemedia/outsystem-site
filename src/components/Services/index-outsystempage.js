import React from 'react'
import Icon1 from '../../images/parceria.svg'
import Icon2 from '../../images/contact.svg'
import { useHistory } from 'react-router-dom'

import { FaCheckCircle } from 'react-icons/fa'
import { SocialIcons, SocialIconLink, ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements-outsystempage'
const ServicesOutsystem = () => {
    const { push } = useHistory()
    return (
        <ServicesContainer id="parte">
            <ServicesH1>FAÇA PARTE</ServicesH1>
            <ServicesWrapper>
                <ServicesCard onClick={() => push('/parceiros')}>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2 >Parceria</ServicesH2>
                    <ServicesP>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Conheça nosso Programa
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Veja nossos parceiros Oficiais
                    </SocialIcons>
                    </ServicesP>
                </ServicesCard>
                <ServicesCard onClick={() => push('/contato')}>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Contato</ServicesH2>
                    <ServicesP>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Conheça nossas Redes Sociais
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Envie um e-mail 
                    </SocialIcons>
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesOutsystem
