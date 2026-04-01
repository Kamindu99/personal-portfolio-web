import React from 'react';

import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const FaGithubIcon = FaGithub as React.ElementType;
const FaExternalLinkAltIcon = FaExternalLinkAlt as React.ElementType;
const FaArrowRightIcon = FaArrowRight as React.ElementType;

const projects = [
    {
        title: "Library Management System",
        description: "Full-stack system built with React, Node.js, and MySQL.",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240123180754/E--Library-Management-System-copy.webp",
        github: "https://github.com/Kamindu99/Online_Book_Store_Web",
        live: "https://online-library-webapp.netlify.app"
    },
    {
        title: "Agriculture Management System",
        description: "Smart agriculture solution with real-time data tracking.",
        image: "https://modula.us/wp-content/uploads/2026/03/agriculture-management-system-hero-image.png",
        github: "https://github.com/Kamindu99/Agriculture-Management-System",
        live: "https://greenworldagriculture.netlify.app/"
    },
    {
        title: "Tourism Management System",
        description: "Online store with payment integration and admin dashboard.",
        image: "https://i.ytimg.com/vi/05BbFvmmu6Q/maxresdefault.jpg",
        github: "https://github.com/Kamindu99/TourismManagementWeb",
        live: "https://travelwithkamidu.netlify.app/"
    }
];

function RecentProjects() {
    return (

        <div className="container">

            <div className="position-relative d-flex align-items-center justify-content-center mb-4">
                <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
                    Projects
                </h1>
                <h1 className="position-absolute text-uppercase text-primary">My Recent Projects</h1>
            </div>

            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>

                        <div className="project-card">

                            <img src={project.image} alt={project.title} />

                            {/* 🔥 Overlay */}
                            <div className="overlay">
                                <h5>{project.title}</h5>

                                <div className="overlay-buttons">
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <FaGithubIcon />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer">
                                        <FaExternalLinkAltIcon />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <a href="/my-projects" className="view-all-btn">
                    View All Projects <FaArrowRightIcon style={{ marginLeft: "8px" }} />
                </a>
            </div>

        </div>
    )
}

export default RecentProjects