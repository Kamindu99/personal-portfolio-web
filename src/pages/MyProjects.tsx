import React from 'react'

type Props = {}

const MyProjects = (props: Props) => {

    const [projects, setProjects] = React.useState([
        {
            id: "headingOne",
            target: "collapseOne",
            title: "Computer Shop Management System",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingTwo",
            target: "collapseTwo",
            title: "Tourism Management System",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1685799530/dotcomecomputers_rzpgyg.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingThree",
            target: "collapseThree",
            title: "Personal Portfolio Website",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingFour",
            target: "collapseFour",
            title: "Agriculture Management System",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingFive",
            target: "collapseFive",
            title: "Travel Management System",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingSix",
            target: "collapseSix",
            title: "Hospital Management System",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        },
        {
            id: "headingSeven",
            target: "collapseSeven",
            title: "Food Ordering System",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687292391/potfolioappmy_imyf7n.jpg",
            url: "https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg"
        }
    ])

    return (
        <div>
            <br/>
            {/* <section id="services">
        <div className="container">
            <h1 className="text-center">My Projects</h1>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className="fas servicesIcon fa-clock"></i>
                            <h4 className="card-title mt-3">Website Development</h4>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-layer-group'></i>
                            <h4 className="card-title mt-3">Website Design</h4>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='far servicesIcon fa-check-circle'></i>
                            <h4 className="card-title mt-3">Website Deployment</h4>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-search'></i>
                            <h4 className="card-title mt-3">SEO</h4>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-shield-alt'></i>
                            <h4 className="card-title mt-3">DevOps</h4>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className='fas servicesIcon fa-wrench'></i>
                            <h4 className="card-title mt-3">QA</h4>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </section> */}

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
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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