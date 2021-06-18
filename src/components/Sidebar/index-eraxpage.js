import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements-eraxpage'

const SidebarErax = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="conheca" onClick={toggle}>
                        Conheça
                    </SidebarLink>
                    <SidebarLink to="foco" onClick={toggle}>
                        Nosso foco
                    </SidebarLink>
                    <SidebarLink to="queremos" onClick={toggle}>
                        O que queremos
                    </SidebarLink>
                    <SidebarLink to="estamos" onClick={toggle}>
                        Nos siga
                    </SidebarLink>
                </SidebarMenu>
                
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default SidebarErax
