import React from 'react'
import Icon1 from '../../images/doge.png'
import Icon2 from '../../images/rocket.png'
import Icon3 from '../../images/musk.png'
import { FaCheckCircle } from 'react-icons/fa'
import { SocialIcons, SocialIconLink, ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements-clubpage'
const ServicesClub = () => {
    return (
        <ServicesContainer id="planos">
            <ServicesH1>ESCOLHA SEU PLANO</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href="//api.whatsapp.com/send?phone=5519998626841&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20me%20interessei%20pelo%20plano%20Doge%20e%20quero%20fazer%20parte%20do%20Cold%20Club!%20%F0%9F%98%84%F0%9F%94%A5" target="_blank" aria-label="Whatsapp">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Doge</ServicesH2>
                    <ServicesP>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Relatório Mensal
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Estratégias para Longo Prazo
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Stop Loss
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Sinais de compra e venda no par USDT 
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Como utilizar a Exchange
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Como criar Carteira Segura
                    </SocialIcons>
                    </ServicesP>
                </ServicesCard>
                <ServicesCard href="//api.whatsapp.com/send?phone=5519998626841&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20me%20interessei%20pelo%20plano%20To%20The%20Moon%20e%20quero%20fazer%20parte%20do%20Cold%20Club!%20%F0%9F%98%84%F0%9F%94%A5" target="_blank" aria-label="Facebook">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>To the Moon</ServicesH2>
                    <ServicesP>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Plano Doge incluso
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Estratégias de Trade Mensal
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Relatórios Semanais
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Operações Realizadas pelo Trader
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"></SocialIconLink>       
                            
                    </SocialIcons>
                    </ServicesP>
                </ServicesCard>
                <ServicesCard href="//api.whatsapp.com/send?phone=5519998626841&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20me%20interessei%20pelo%20plano%20Musk%20e%20quero%20fazer%20parte%20do%20Cold%20Club!%20%F0%9F%98%84%F0%9F%94%A5" target="_blank" aria-label="Facebook">
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Musk</ServicesH2>
                    <ServicesP>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Plano To The Moon Incluso
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Operações de Trade no Cartão de Crédito
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Carteira em Tempo Real por Aplicativo
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Pedidos exclusivos de análises gráficas 
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink target="_blank" aria-label="Check"><FaCheckCircle /></SocialIconLink>       
                            Suporte prioritário 
                    </SocialIcons>
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesClub
