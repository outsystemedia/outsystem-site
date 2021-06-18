import React, {useState, useEffect} from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements-contatopage'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const NavbarContato = ( {toggle} ) => {
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
        <IconContext.Provider value={{ color: '#000' }}>
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
                            <NavLinks to="redes"
                               smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Nossas Redes</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="email"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                            >Envie um e-mail</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/parceiros">Parcerias</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
  );
};

export default NavbarContato;
