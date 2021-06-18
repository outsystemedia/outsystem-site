import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements-contatopage'

const SidebarContato = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="redes" onClick={toggle}>
                        Nossas redes
                    </SidebarLink>
                    <SidebarLink to="email" onClick={toggle}>
                        Envie um e-mail
                    </SidebarLink>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="parceiros" onClick={toggle}>
                        Parcerias
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default SidebarContato
