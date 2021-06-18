import React from 'react'
import Icon1 from '../../images/xarties.png'
import Icon2 from '../../images/xmusic.png'
import Icon3 from '../../images/fran.png'
import Icon4 from '../../images/propel.png'

import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements-parceirospage'
const ServicesParceiros = () => {
    return (
        <ServicesContainer id="parceiros">
            <ServicesH1>NOSSOS PARCEIROS</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href="//twitch.tv/xxarties" target="_blank" aria-label="Xarties">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>xarties</ServicesH2>
                    <ServicesP>
                        Streamer na plataforma Twitch.tv
                    </ServicesP>
                </ServicesCard>
                <ServicesCard href="//twitch.tv/xartiesmusic" target="_blank" aria-label="Xarties">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>xarties music</ServicesH2>
                    <ServicesP>
                        Stream de músicas e vídeos para trabalhar e relaxar.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard href="//instagram.com/fran.viagens" target="_blank" aria-label="Fran">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>fran.viagens</ServicesH2>
                    <ServicesP>
                        Instagram focado em viagens e dicas.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard href="//propel.com.br/" target="_blank" aria-label="Propel">
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Propel</ServicesH2>
                    <ServicesP>
                        Fábrica de Papel Tissue - Entrega para todo o Brasil
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesParceiros
