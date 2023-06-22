import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const MyProjects = (props: Props) => {

    const [projects, setProjects] = React.useState([
        {
            id: "headingOne",
            target: "collapseOne",
            title: "Computer Shop Management System - (ReactJs & TypeScript)",
            description: "The computer shop application is a modern, user-friendly web application developed using TypeScript and React. It offers customers a seamless and convenient shopping experience for computer-related products. Users can explore a diverse catalog of laptops, desktops, peripherals, and accessories, with detailed product information, including specifications, pricing, reviews, and ratings. The application incorporates essential features such as a shopping cart, user authentication, secure checkout and payment options, order tracking, and a search functionality. It also encourages customer engagement through reviews and ratings, helping users make informed purchasing decisions. With its responsive design, the computer shop application ensures a consistent and enjoyable experience across various devices.",
            features: [
                "Product Catalog",
                "Shopping Cart",
                "User Authentication",
                "Secure Checkout",
                "Payment Options",
                "Order Tracking",
                "Search Functionality",
                "Reviews and Ratings",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "TypeScript",
                "Bootstrap",
                "CSS"
            ],
            image: [
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"1. Home Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431561/dotcomlatast_ietygx.jpg",
                imagename:"2. Latest Laptops Page"}
            ],
            url: "https://dotcomcomputers.netlify.app/"
        },
        {
            id: "headingTwo",
            target: "collapseTwo",
            title: "Tourism Management System - (ReactJs , NodeJs & MongoDB)",
            description: "I developed a Tourism Management Web Application using React.js, Node.js, Express.js, and MongoDB. This comprehensive web application is designed to streamline and enhance the management of tourism-related activities and services. The Tourism Management Web Application offers a range of features and functionalities that cater to the needs of both tourists and tourism operators. It provides a user-friendly interface that ensures seamless navigation and an enjoyable user experience. For tourists, the application allows them to explore various destinations, view attractions and activities, and make bookings for accommodations, tours, and transportation. They can access detailed information about each destination, including popular landmarks, local culture, and recommended itineraries. The integrated booking system ensures a convenient and secure reservation process.",
            features: [
                "Destination Information",
                "Attractions and Activities",
                "Accommodation Booking",
                "Tour Booking",
                "Transportation Booking",
                "Secure Payment",
                "User Authentication",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "Node",
                "Express",
                "MongoDB",
                "Bootstrap",
                "CSS"
            ],
            image: [
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
                imagename:"1. Home Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431551/resturent_g5iqk4.jpg",
                imagename:"2. Resturents Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431551/flightbook_hu0win.jpg",
                imagename:"3. Flight Booking Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431551/events_qgpi72.jpg",
                imagename:"4. Event Booking Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431550/rentacar_mzwqyl.jpg",
                imagename:"5. Rent a Car Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431550/hotels_wqltsl.jpg",
                imagename:"6. Hotel Booking Page"}
            ],
            url: "https://travelwithkamidu.netlify.app/"
        },
        {
            id: "headingThree",
            target: "collapseThree",
            title: "Personal Portfolio Website - (ReactJs & TypeScript)",
            description: "I developed a Personal Portfolio Web application using React.js, TypeScript, Bootstrap, and CSS. This dynamic web application serves as a showcase of my skills, experiences, and projects, providing visitors with a comprehensive overview of my professional background. The Personal Portfolio Web application offers a visually appealing and user-friendly interface, allowing visitors to explore my portfolio and learn more about my expertise and achievements. It is designed to be responsive and compatible with various devices, ensuring a seamless user experience across desktop and mobile platforms.",
            features: [
                "About Me",
                "Skills",
                "Experiences",
                "Projects",
                "Contact Me",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "TypeScript",
                "Bootstrap",
                "CSS"
            ],
            image: [
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/homepageportfolio_bq2nno.jpg",
                imagename:"1. Home Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/myexpe_dkww9y.jpg",
                imagename:"2. Education Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/myprojectsportfolio_qk7awy.jpg",
                imagename:"3. My Projects Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/galleryportfolio_kfb8go.jpg",
                imagename:"4. Gallery Page"}
            ],
            url: "https://kamindugayantha.netlify.app/"
        },
        {
            id: "headingFour",
            target: "collapseFour",
            title: "Agriculture Management System - (ReactJs , NodeJs , ExpressJS & MongoDB)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            features: [
                "About Me",
                "Skills",
                "Experiences",
                "Projects",
                "Contact Me",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "TypeScript",
                "Bootstrap",
                "CSS"
            ],
            image: [
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"1. Home Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
                imagename:"2. Profile Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
                imagename:"3. About Us Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"4. Projects Page"}
            ],
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingFive",
            target: "collapseFive",
            title: "Travel Management System - (ReactJs , NodeJs , ExpressJS & MongoDB)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            features: [
                "About Me",
                "Skills",
                "Experiences",
                "Projects",
                "Contact Me",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "TypeScript",
                "Bootstrap",
                "CSS"
            ],
            image: [
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"1. Home Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
                imagename:"2. Profile Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
                imagename:"3. About Us Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"4. Projects Page"}
            ],
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingSix",
            target: "collapseSix",
            title: "Hospital Management System - (Java & MySQL)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            features: [
                "About Me",
                "Skills",
                "Experiences",
                "Projects",
                "Contact Me",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "TypeScript",
                "Bootstrap",
                "CSS"
            ],
            image: [
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"1. Home Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
                imagename:"2. Profile Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
                imagename:"3. About Us Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"4. Projects Page"}
            ],
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingSeven",
            target: "collapseSeven",
            title: "Food Ordering System - (Android , Java , & Firebase)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            features: [
                "About Me",
                "Skills",
                "Experiences",
                "Projects",
                "Contact Me",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "TypeScript",
                "Bootstrap",
                "CSS"
            ],
            image: [
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"1. Home Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
                imagename:"2. Profile Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
                imagename:"3. About Us Page"},
                {image:"https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
                imagename:"4. Projects Page"}
            ],
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        }
    ])

    return (
        <div>
            <br />
            <section id="services">
                <div className="container">
                    <h1 className="text-center">My Projects</h1>
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className="fas servicesIcon fa-clock"></i>
                                    <h4 className="card-title mt-3">WebApp Development</h4>
                                    <p className="card-text mt-3">Website Development is the process of creating and building websites
                                        that are accessible and functional on the internet. It involves a combination of various skills and
                                        technologies to design, develop.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-layer-group'></i>
                                    <h4 className="card-title mt-3">Website Design</h4>
                                    <p className="card-text mt-3">Website design refers to the process of creating the visual aesthetics
                                        and user interface of a website. It involves the thoughtful arrangement and presentation of elements,
                                        such as layout, colors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='far servicesIcon fa-check-circle'></i>
                                    <h4 className="card-title mt-3">Backend Development</h4>
                                    <p className="card-text mt-3">Backend development refers to the server-side development. It is the term
                                        used for the behind-the-scenes activities that happen when performing any action on a website.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="accordion" id="accordionExample">
                    {projects.map((project) => (
                        <div className="item">
                            <div className="item-header" >
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target={`#${project.target}`} aria-expanded="true" aria-controls={project.target}>
                                        {project.title}
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                </h2>
                            </div>
                            <div id={project.target} className="collapse" aria-labelledby={project.id}
                                data-parent="#accordionExample">
                                <section className="py-5 header" style={{ backgroundColor: '#cbcbcb1e' }}>
                                    <div className="container py-4">

                                        <div className="row">
                                            <div className="col-md-3">

                                                <div className="nav flex-column nav-pills nav-pills-custom" id={`${project.id}-tab`} role="tablist" aria-orientation="vertical">
                                                    <a className="nav-link mb-3 p-3 shadow active" id={`${project.id}-home-tab`} data-toggle="pill" href={`#${project.id}-home`} role="tab" aria-controls={`${project.id}-home`} aria-selected="true">
                                                        <i className="fa fa-user-circle-o mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Project Overview</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id={`${project.id}-profile-tab`} data-toggle="pill" href={`#${project.id}-profile`} role="tab" aria-controls={`${project.id}-profile`} aria-selected="false">
                                                        <i className="fa fa-calendar-minus-o mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Features</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id={`${project.id}-messages-tab`} data-toggle="pill" href={`#${project.id}-messages`} role="tab" aria-controls={`${project.id}-messages`} aria-selected="false">
                                                        <i className="fa fa-star mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Technologies</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id={`${project.id}-settings-tab`} data-toggle="pill" href={`#${project.id}-settings`} role="tab" aria-controls={`${project.id}-settings`} aria-selected="false">
                                                        <i className="fa fa-check mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Screens</span></a>
                                                </div>
                                            </div>

                                            <div className="col-md-9">

                                                <div className="tab-content" id={`${project.id}-tabContent`}>
                                                    <div className="tab-pane fade shadow rounded bg-white show active p-5" id={`${project.id}-home`} role="tabpanel" aria-labelledby={`${project.id}-home-tab`}>
                                                        <h4 className="font-italic mb-4">Project Overview</h4>
                                                        <p className="font-italic text-muted mb-2">

                                                            {project.description}
                                                            <br /> <br />
                                                            <div> Livi Site - <Link to={project.url} style={{ textDecoration: 'none', color: "blue" }}>{project.url}</Link> </div>

                                                        </p>
                                                    </div>

                                                    <div className="tab-pane fade shadow rounded bg-white p-5" id={`${project.id}-profile`} role="tabpanel" aria-labelledby={`${project.id}-profile-tab`}>
                                                        <h4 className="font-italic mb-4">Features</h4>
                                                        <p className="font-italic text-muted mb-2">
                                                            In this project, I have used following features.
                                                            <ul>
                                                                {project.features.map((feature) => (
                                                                    <li>{feature}</li>
                                                                ))}
                                                            </ul>
                                                        </p>
                                                    </div>

                                                    <div className="tab-pane fade shadow rounded bg-white p-5" id={`${project.id}-messages`} role="tabpanel" aria-labelledby={`${project.id}-messages-tab`}>
                                                        <h4 className="font-italic mb-4">Technologies</h4>
                                                        <p className="font-italic text-muted mb-2">
                                                            In this project, I have used following technologies.

                                                            <br /><br />
                                                            {project.technologies.map((technology) => (
                                                                <>
                                                                    {technology == "React" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-ReactJs-gray?style=for-the-badge&logo=react" />
                                                                    }
                                                                    {technology == "TypeScript" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-Type_Script-bfc29b?style=for-the-badge&logo=typescript" />
                                                                    }
                                                                    {technology == "Bootstrap" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-bootstrap-2e2e2e?style=for-the-badge&logo=bootstrap" />
                                                                    }
                                                                    {technology == "CSS" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-CSS-000269?style=for-the-badge&logo=csswizardry" />
                                                                    }
                                                                    {technology == "MongoDB" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-mongo_db-gray?style=for-the-badge&logo=mongodb" />
                                                                    }
                                                                    {technology == "Express" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-ExpressJs-gray?style=for-the-badge&logo=express" />
                                                                    }
                                                                    {technology == "Node" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-NodeJs-gray?style=for-the-badge&logo=nodedotjs" />
                                                                    }
                                                                    {technology == "VsCode" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-VS_Code-gray?style=for-the-badge&logo=visualstudiocode" />
                                                                    }
                                                                    {technology == "Java" &&
                                                                        <img className='me-3' src="https://img.shields.io/badge/-Java-gray?style=for-the-badge&logo=coffeescript" />
                                                                    }
                                                                </>
                                                            ))}

                                                        </p>
                                                    </div>

                                                    <div className="tab-pane fade shadow rounded bg-white p-5" id={`${project.id}-settings`} role="tabpanel" aria-labelledby={`${project.id}-settings-tab`}>
                                                        <h4 className="font-italic mb-4">Screens</h4>
                                                        <div >
                                                            <div className="row">
                                                                {project.image.map((img) => (
                                                                    <div className="col-md-4 mb-3">
                                                                        <div className="image-container project-image-container">
                                                                        {img.imagename} <img src={img.image} alt="" className="mt-2 img-fluid" />
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyProjects