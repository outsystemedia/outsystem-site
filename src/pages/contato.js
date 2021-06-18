import React, {useState} from 'react';
import Footer from '../components/Footer';
import { homeObjTwo } from '../components/InfoSection/Data-contatopage';
import ScrollToTop from '../components/ScrollToTop';
import NavbarContato from '../components/Navbar/index-contatopage';
import SidebarContato from '../components/Sidebar/index-contatopage';
import InfoSectionContato from '../components/InfoSection/index-contatopage';
import Scroll from '../components/scroll';
import ContactUs from '../components/contactForm';

const ContatoPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Scroll showBelow={250} />
            <ScrollToTop />
            <SidebarContato isOpen={isOpen} toggle={toggle}/>
            <NavbarContato toggle={toggle} />
            <InfoSectionContato {...homeObjTwo}/>
            <ContactUs />        
            <Footer />
        </>
    );
};

export default ContatoPage;