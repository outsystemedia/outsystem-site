import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements-outsystempage'

const SidebarOutsystem = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="somos" onClick={toggle}>
                        Quem somos
                    </SidebarLink>
                    <SidebarLink to="fazemos" onClick={toggle}>
                        O que fazemos
                    </SidebarLink>
                    <SidebarLink to="historia" onClick={toggle}>
                        Nossa história
                    </SidebarLink>
                    <SidebarLink to="objetivos" onClick={toggle}>
                        Nossos objetivos
                    </SidebarLink>
                    <SidebarLink to="parte" onClick={toggle}>
                        Faça parte
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default SidebarOutsystem
