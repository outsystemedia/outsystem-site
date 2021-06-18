import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements-outsystempage'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const NavbarOutsystem = ( {toggle} ) => {
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
                            <NavLinks to="somos"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Quem somos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="fazemos"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >O que fazemos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="historia"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Nossa história</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="objetivos"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Nossos objetivos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="parte"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Faça parte</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
  );
};

export default NavbarOutsystem;
