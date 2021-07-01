import React, {useState} from 'react'
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SidebarEbook from '../components/Sidebar/index-ebookpage';
import NavbarEbook from '../components/Navbar/index-ebookpage';
import InfoSectionEbook from '../components/InfoSection/index-ebookpage';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive } from '../components/InfoSection/Data-ebookpage'
import Scroll from '../components/scroll';
import HeroSectionEbook from '../components/HeroSection/index-ebookpage'
import ServicesEbook from '../components/Services/index-ebookpage';

const EbookPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Scroll showBelow={250} />
            <ScrollToTop />
            <SidebarEbook isOpen={isOpen} toggle={toggle}/>
            <NavbarEbook toggle={toggle} />
            <HeroSectionEbook />
            <InfoSectionEbook {...homeObjTwo}/>
            <InfoSectionEbook {...homeObjOne}/>
            {/* <InfoSectionEbook {...homeObjFour}/> */}
            {/* <InfoSectionEbook {...homeObjThree}/> */}
            {/* <InfoSectionEbook {...homeObjFive}/> */}
            <ServicesEbook />
            <Footer />
        </>
    );
};

export default EbookPage
