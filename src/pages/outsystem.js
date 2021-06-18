import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSectionOutsystem from '../components/HeroSection/index-outsystempage';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data-outsystempage';
import { homeObjFive, homeObjFour } from '../components/InfoSection/Data-outsystempage';
import InfoSectionOutsystem from '../components/InfoSection/index-outsystempage';
import NavbarOutsystem from '../components/Navbar/index-outsystempage';
import ScrollToTop from '../components/ScrollToTop';
import SidebarOutsystem from '../components/Sidebar/index-outsystempage';
import Scroll from '../components/scroll';
import ServicesOutsystem from '../components/Services/index-outsystempage'
const OutsystemPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Scroll showBelow={250} />
            <ScrollToTop />
            <SidebarOutsystem isOpen={isOpen} toggle={toggle}/>
            <NavbarOutsystem toggle={toggle} />
            <HeroSectionOutsystem />
            <InfoSectionOutsystem {...homeObjOne}/>
            <InfoSectionOutsystem {...homeObjTwo}/>
            <InfoSectionOutsystem {...homeObjThree}/>
            <InfoSectionOutsystem {...homeObjFour}/>
            <InfoSectionOutsystem {...homeObjFive}/>
            <ServicesOutsystem />
            <Footer />
        </>
    );
};

export default OutsystemPage
