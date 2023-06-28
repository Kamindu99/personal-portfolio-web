import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';

const Footer = () => {
    const ourAddress = [
        { name: "2nd post", link: "/" },
        { name: "Maudella , Dela", link: "/" },
        { name: "Ratnapura", link: "/" },
        { name: "Contact - 071 5273881", link: "#" },

    ]
    const oralHealth = [
        { name: "Completed O/L", link: "/" },
        { name: "Completed A/L", link: "/" },
        { name: "Undergraduate at SLIIT", link: "/" },
        { name: "Associate SE 1 Year", link: "/" },
      
    ]
    const services = [
        { name: "ReactJs | React Native", link: "/" },
        { name: "NodeJs | KoaJs", link: "/" },
        { name: "Java | Spring Boot", link: "/" },
        { name: "Android | PHP", link: "/" },
       
    ]
    const projects = [
        { name: "Computer Shop Web", link: "https://dotcomcomputers.netlify.app/" },
        { name: "Tourism Management System", link: "https://travelwithkamidu.netlify.app/" },
        { name: "Personal Portfolio Web", link: "https://kamindugayantha.netlify.app/" },
        { name: "Agriculture Management System", link: "https://greenworldagriculture.netlify.app/" },
       
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5 mt-5">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content ms-5">
                    {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterDetail key={2} menuTitle="My Projects" menuItems={projects} />
                    <FooterDetail key={2} menuTitle="My Skills" menuItems={services} />
                    <FooterDetail key={2} menuTitle="My Journey" menuItems={oralHealth} />
                    <FooterDetail key={3} menuTitle="My Address" menuItems={ourAddress}/>
                    
                    <div className="copyRight text-center">
                    <p className='text-muted'> Designed & Developed by <a href="https://kamindugayantha.netlify.app/" style={{color:'#5a5a5a',textDecoration:'none'}} target="_blank">Kamindu Gayantha</a></p>

                </div>
                </div>
              
            </div>
        </footer>
    );
};

export default Footer;