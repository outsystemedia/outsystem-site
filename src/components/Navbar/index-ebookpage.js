import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements-ebookpage'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ( {toggle} ) => {
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
                            <NavLinks to="viva"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Ebook</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="fontes"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Fontes de Renda</NavLinks>
                        </NavItem>
                       {/* <NavItem>
                            <NavLinks to="distri"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Distribuição</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to="valor"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Valor</NavLinks>
                        </NavItem> */}
                        {/* <NavItem>
                            <NavLinks to="brinde"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Bônus</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to="quero"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Quero Viver de Internet</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
  );
};

export default Navbar;
