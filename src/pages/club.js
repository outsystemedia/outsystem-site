import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSectionClub from '../components/HeroSection/index-clubpage';
import InfoSectionClub from '../components/InfoSection/index-clubpage';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data-clubpage';
import NavbarClub from '../components/Navbar/index-clubpage';
import ServicesClub from '../components/Services/index-clubpage';
import SidebarClub from '../components/Sidebar/index-clubpage';
import ScrollToTop from '../components/ScrollToTop';
import Scroll from '../components/scroll';


const ClubPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Scroll showBelow={250} />
            <ScrollToTop />
            <SidebarClub isOpen={isOpen} toggle={toggle}/>
            <NavbarClub toggle={toggle} />
            <HeroSectionClub />
            <InfoSectionClub {...homeObjOne}/>
            <InfoSectionClub {...homeObjTwo}/>
            <InfoSectionClub {...homeObjThree}/>
            <ServicesClub />
            <Footer />
        </>
    );
};

export default ClubPage;
