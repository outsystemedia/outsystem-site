import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSectionPlanilhas from '../components/HeroSection/index-planilhaspage';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/scroll.js';
import ScrollToTop from '../components/ScrollToTop';

const PlanilhasPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Scroll showBelow={250} />
            <ScrollToTop />
            {/*<Sidebar isOpen={isOpen} toggle={toggle}/>*/}
            {/*<Navbar toggle={toggle} />*/}
            <HeroSectionPlanilhas />
            {/*<InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>*/}
            <Footer />
        </>
    );
};

export default PlanilhasPage;
