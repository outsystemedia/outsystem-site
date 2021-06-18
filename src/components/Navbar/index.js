import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
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
                            <NavLinks to="erax"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Era X</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="viva"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Viva de Internet</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cold"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Cold Club</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/outsystem">Conheça a Outsystem</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
  );
};

export default Navbar;
