import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSectionErax from '../components/HeroSection/index-eraxpage';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data-eraxpage';
import ScrollToTop from '../components/ScrollToTop';
import InfoSectionErax from '../components/InfoSection/index-eraxpage';
import NavbarErax from '../components/Navbar/index-eraxpage';
import SidebarErax from '../components/Sidebar/index-eraxpage';
import Scroll from '../components/scroll';


const EraxPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Scroll showBelow={250} />
            <ScrollToTop />
            <SidebarErax isOpen={isOpen} toggle={toggle}/>
            <NavbarErax toggle={toggle} />
            <HeroSectionErax />
            <InfoSectionErax {...homeObjTwo}/>
            <InfoSectionErax {...homeObjOne}/>
            <InfoSectionErax {...homeObjFour}/>
            <InfoSectionErax {...homeObjThree}/>
            <Footer />
        </>
    );
};

export default EraxPage;
