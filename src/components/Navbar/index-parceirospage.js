import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements-parceirospage'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const NavbarParceiros = ( {toggle} ) => {
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
                            <NavLinks to="programa"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Programa de parcerias</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="ser"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Como ser parceiro</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="parceiros"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Nossos parceiros</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
  );
};

export default NavbarParceiros;
