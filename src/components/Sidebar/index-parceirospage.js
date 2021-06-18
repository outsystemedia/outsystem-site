import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements-parceirospage'

const SidebarParceiros = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="programa" onClick={toggle}>
                        Programa de Parcerias
                    </SidebarLink>
                    <SidebarLink to="ser" onClick={toggle}>
                        Como ser Parceiro
                    </SidebarLink>
                    <SidebarLink to="parceiros" onClick={toggle}>
                        Nossos Parceiros
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                </SideBtnWrap>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default SidebarParceiros
