import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="erax" onClick={toggle}>
                        Era X
                    </SidebarLink>
                    <SidebarLink to="viva" onClick={toggle}>
                        Viva de Internet
                    </SidebarLink>
                    {/*<SidebarLink to="cold" onClick={toggle}>
                        Cold Club
    </SidebarLink>*/}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="outsystem" onClick={toggle}>
                        Conheça a Outsystem
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>            
        </SidebarContainer>
    )
}

export default Sidebar
