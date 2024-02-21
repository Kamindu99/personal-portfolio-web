import React, { useContext, useState, useEffect } from 'react';
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

    const isGallery = str.includes("/my-photo");
    const isProject = str.includes("/my-projects");
    const isContactMe = str.includes("/#contact");
    const isAboutUs = str.includes("/#about");
    const isBlogs = str.includes("/my-blogs");
    let isHome = str.includes("#home");

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} >
            <div className="container-fluid">
                <div className="navbar-heading mt-2">
                    <h3 style={{ marginLeft: '30px' }}>
                        <Link className="navbar-h ms-5" to="/">
                            <img src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384669/2023-06-18_1.18.52_AM_an6meh.png" style={{ height: '50px' }} alt="Logo" className="logo-image me-3" />
                            Kamindu Gayantha
                        </Link>
                    </h3>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto" style={{ marginRight: '2%' }}>
                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isHome ? 'actives' : ''}`} aria-current="page" href="/#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isAboutUs ? 'actives' : ''}`} href="/#about">About Me</a>
                        </li>

                        <li className="nav-item">
                            <a href='/#contact' className={`nav-link me-3 nav-link-a-text ${isContactMe ? 'actives' : ''}`}>Contact Me</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isProject ? 'actives' : ''}`} href="/my-projects">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isBlogs ? 'actives' : ''}`} href="/my-blogs" >Blogs</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-3 ${isGallery ? 'actives' : ''}`} href="/my-photo" >Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;