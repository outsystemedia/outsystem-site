import React, {useState} from 'react';
import Footer from '../components/Footer';
import InfoSectionParceiros from '../components/InfoSection/index-parceirospage';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data-parceirospage';
import NavbarParceiros from '../components/Navbar/index-parceirospage';
import SidebarParceiros from '../components/Sidebar/index-parceirospage';
import Scroll from '../components/scroll.js';
import ScrollToTop from '../components/ScrollToTop';
import ServicesParceiros from '../components/Services/index-parceirospage';

const ParceirosPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Scroll showBelow={250} />
            <ScrollToTop />
            <SidebarParceiros isOpen={isOpen} toggle={toggle}/>
            <NavbarParceiros toggle={toggle} />
            <InfoSectionParceiros {...homeObjOne}/>
            <InfoSectionParceiros {...homeObjTwo}/>
            <ServicesParceiros />
            <Footer />
        </>
    );
};

export default ParceirosPage;
