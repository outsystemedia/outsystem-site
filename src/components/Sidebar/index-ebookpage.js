import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const SidebarEbook = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="viva" onClick={toggle}>
                        Ebook
                    </SidebarLink>
                    <SidebarLink to="fontes" onClick={toggle}>
                        Fontes de Renda
                    </SidebarLink>
                    <SidebarLink to="distri" onClick={toggle}>
                        Distribuição
                    </SidebarLink>
                    <SidebarLink to="valor" onClick={toggle}>
                        Valor
                    </SidebarLink>
                    <SidebarLink to="brinde" onClick={toggle}>
                        Brinde
                    </SidebarLink>
                    <SidebarLink to="quero" onClick={toggle}>
                        Quero Viver de Internet
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                </SideBtnWrap>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default SidebarEbook
