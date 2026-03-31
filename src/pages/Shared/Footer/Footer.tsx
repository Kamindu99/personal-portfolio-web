import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='myfootecss'>
            <div className="card ">
                <div className='footer-content'>
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h1 className="font-weight-bold me-2 px-3" style={{ color: "white", backgroundColor: "#8ca3ba" }}> K </h1>
                                    <h2 style={{ color: "#8ca3ba" }}>Kamindu Gayantha</h2>
                                </div>
                                <p className="card-text">
                                    I am a Software Engineer with 4 years + of experience in the IT industry.
                                    So, if you are looking for a Software Engineer, I am here to help you.
                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("https://www.facebook.com/profile.php?id=100007444869672&mibextid=LQQJ4d") }}></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("https://instagram.com/k_a_m_i_n_d_u_") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("https://twitter.com/k_a_m_i_n_d_u_") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("https://www.linkedin.com/in/kamindu-gayantha-4693661b5") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.location.replace("https://github.com/Kamindu99") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Skills</h5>
                            <ul>
                                <li>Web Development</li>
                                <li>Database Handle</li>
                                <li>Cloud</li>
                                <li>Mobile App</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Projects</h5>
                            <ul className="card-text">
                                <li>Tourism System</li>
                                <li>Agriculture System</li>
                                <li>Personal Portfolio</li>
                                <li>ComputerShop Web</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Me</h5>
                            <ul className="card-text">
                                <li>Colombo</li>
                                <li>Sri Lanka</li>
                                <li>+94 71 527 3881</li>
                                <li>kamindu.gw@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "10px", textAlign: "center" }}>
                        <div>
                            © {new Date().getFullYear()} Designed and Developed by Kamindu Gayantha <br />
                            {/* <i className="fa fa-copyright"></i>  {Date().substr(10, 6)} */}
                        </div>
                    </div>
                </div>
                <div className="mobile-footer">
                    <div className="mobile-footer-card">

                        <h5 className="footer-name">Kamindu Gayantha</h5>
                        <p className="footer-role">Software Engineer</p>

                        <div className="footer-social">
                            <a href="https://www.linkedin.com/in/kamindugayantha" target="_blank" rel="noreferrer">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Kamindu99" target="_blank" rel="noreferrer">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://instagram.com/k_a_m_i_n_d_u_" target="_blank" rel="noreferrer">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>

                        <p className="footer-text">
                            © {new Date().getFullYear()} Designed & Developed by Kamindu
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;