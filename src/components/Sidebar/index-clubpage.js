import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements-clubpage'

const SidebarClub = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="fature" onClick={toggle}>
                        Fature com Crypto
                    </SidebarLink>
                    <SidebarLink to="rentabi" onClick={toggle}>
                        Rentabilidade
                    </SidebarLink>
                    <SidebarLink to="ideal" onClick={toggle}>
                        Ideal para Você
                    </SidebarLink>
                    <SidebarLink to="planos" onClick={toggle}>
                        Planos
                    </SidebarLink>
                    
                </SidebarMenu>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default SidebarClub
