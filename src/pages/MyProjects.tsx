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
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384201/dotcomcomputers.net_bc1ms6.jpg",
            url: "https://dotcomcomputers.netlify.app/"
        },
        {
            id: "headingTwo",
            target: "collapseTwo",
            title: "Tourism Management System - (ReactJs , NodeJs & MongoDB)",
            description: "I developed a Tourism Management Web Application using React.js, Node.js, Express.js, and MongoDB. This comprehensive web application is designed to streamline and enhance the management of tourism-related activities and services. The Tourism Management Web Application offers a range of features and functionalities that cater to the needs of both tourists and tourism operators. It provides a user-friendly interface that ensures seamless navigation and an enjoyable user experience. For tourists, the application allows them to explore various destinations, view attractions and activities, and make bookings for accommodations, tours, and transportation. They can access detailed information about each destination, including popular landmarks, local culture, and recommended itineraries. The integrated booking system ensures a convenient and secure reservation process.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
            url: "https://travelwithkamidu.netlify.app/"
        },
        {
            id: "headingThree",
            target: "collapseThree",
            title: "Personal Portfolio Website - (ReactJs & TypeScript)",
            description: "I developed a Personal Portfolio Web application using React.js, TypeScript, Bootstrap, and CSS. This dynamic web application serves as a showcase of my skills, experiences, and projects, providing visitors with a comprehensive overview of my professional background. The Personal Portfolio Web application offers a visually appealing and user-friendly interface, allowing visitors to explore my portfolio and learn more about my expertise and achievements. It is designed to be responsive and compatible with various devices, ensuring a seamless user experience across desktop and mobile platforms.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://kamindugayantha.netlify.app/"
        },
        {
            id: "headingFour",
            target: "collapseFour",
            title: "Agriculture Management System - (ReactJs , NodeJs , ExpressJS & MongoDB)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingFive",
            target: "collapseFive",
            title: "Travel Management System - (ReactJs , NodeJs , ExpressJS & MongoDB)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingSix",
            target: "collapseSix",
            title: "Hospital Management System - (Java & MySQL)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingSeven",
            target: "collapseSeven",
            title: "Food Ordering System - (Android , Java , & Firebase)",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        }
    ])

    return (
        <div>
            <br/>
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
                            <h4 className="card-title mt-3">Backend Deployment</h4>
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
                          <div className="item-header" id={project.id}>
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
                              <div className="t-p">
                              {project.description}
                              <br/> <br/>
                             <div> Livi Site - <Link to={project.url} style={{textDecoration:'none',color :"blue"}}>{project.url}</Link> </div>
                              </div>
                                <div className="t-p">
                                    <img src={project.image} alt="" className="img-fluid" />
                                </div>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyProjects