import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const NavbarErax = ( {toggle} ) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        outsystem
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="conheca"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Conheça</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="foco"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Nosso foco</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="queremos"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >O que queremos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="estamos"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Nos siga</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
  );
};

export default NavbarErax;
