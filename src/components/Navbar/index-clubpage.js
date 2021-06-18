import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements-clubpage'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const NavbarClub = ( {toggle} ) => {
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
                            <NavLinks to="fature"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Fature com Crypto</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="rentabi"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Rentabilidade</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="ideal"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Ideal para você</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="planos"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Planos</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
  );
};

export default NavbarClub;
