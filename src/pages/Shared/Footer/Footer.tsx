import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },
        { name: "Call now - 071 5273881", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
      
    ]
    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
       
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5 mt-5">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content">
                    {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterDetail key={2} menuTitle="Projects" menuItems={services} />
                    <FooterDetail key={2} menuTitle="Services" menuItems={services} />
                    <FooterDetail key={2} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterDetail key={3} menuTitle="Our Address" menuItems={ourAddress}/>
                    
                    <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
                </div>
              
            </div>
        </footer>
    );
};

export default Footer;