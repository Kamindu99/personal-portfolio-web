import React, { useContext,useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    //const {user, loading, error, dispatch} = useContext(AuthContext);
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 99) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const str = window.location.href;

    const isGallery = str.includes("/#skill");
    const isProject = str.includes("/#qualification");
    const isContactMe = str.includes("/#contact");
    const isAboutUs = str.includes("/#about");

    let isHome = str.includes("#home");

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} >
            <div className="container-fluid">
                <div className="navbar-heading">
                    <h3 style={{marginLeft:'30px'}}>
                        <Link className="navbar-h ms-5" to="/">Kamindu Gayantha</Link>
                    </h3>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto" style={{marginRight:'100px'}}>
                        <li className="nav-item">
                            <a className={`nav-link me-5 ${isHome?'active':''}`} aria-current="page" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link me-5 ${isAboutUs?'active':''}`} href="#about">About Me</a>
                        </li>

                        <li className="nav-item">
                            <a href='#contact' className={`nav-link me-5 ${isContactMe?'active':''}`}>Contact Me</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link me-5 ${isProject?'active':''}`} href="#qualification">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link me-5 ${isGallery?'active':''}`} href="#skill" >Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;