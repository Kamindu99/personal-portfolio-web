import projects from "../data/projects"

const MyProjects = () => {

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
                                                        <i className="fa fa-eye mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Project Overview</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id={`${project.id}-profile-tab`} data-toggle="pill" href={`#${project.id}-profile`} role="tab" aria-controls={`${project.id}-profile`} aria-selected="false">
                                                        <i className="fa fa-calendar-minus-o mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Features</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id={`${project.id}-messages-tab`} data-toggle="pill" href={`#${project.id}-messages`} role="tab" aria-controls={`${project.id}-messages`} aria-selected="false">
                                                        <i className="fa fa-star mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Technologies</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id={`${project.id}-settings-tab`} data-toggle="pill" href={`#${project.id}-settings`} role="tab" aria-controls={`${project.id}-settings`} aria-selected="false">
                                                        <i className="fa fa-picture-o mr-2"></i>
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
                                                            <div> Live Site - <span onClick={() => { window.open(project.url) }} style={{ textDecoration: 'none', color: "blue", cursor: 'pointer' }}>{project.url}</span> </div>

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

                                                            <i className="fa fa-angle-right  mb-3"></i>  Frontend Development -

                                                            <div className='ms-5'>
                                                                {project.technologies.map((technology) => (
                                                                    <>
                                                                        {technology == "React" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-ReactJs-gray?style=for-the-badge&logo=react" />
                                                                        }
                                                                        {technology == "TypeScript" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Type_Script-bfc29b?style=for-the-badge&logo=typescript" />
                                                                        }
                                                                        {technology == "Bootstrap" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-bootstrap-2e2e2e?style=for-the-badge&logo=bootstrap" />
                                                                        }
                                                                        {technology == "MUI" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-MUI-2e2e2e?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                        {technology == "CSS" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-CSS-000269?style=for-the-badge&logo=csswizardry" />
                                                                        }
                                                                        {technology == "HTML" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-HTML-gray?style=for-the-badge&logo=html5" />
                                                                        }
                                                                        {technology == "Javascript" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Javascript-gray?style=for-the-badge&logo=javascript" />
                                                                        }
                                                                        {technology == "AngularJs" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-AngularJs-gray?style=for-the-badge&logo=javascript" />
                                                                        }
                                                                        {technology == "AngularMUI" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Angular_MUI-gray?style=for-the-badge&logo=ghostery" />
                                                                        }

                                                                        {technology == "Java" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Java-gray?style=for-the-badge&logo=coffeescript" />
                                                                        }
                                                                        {technology == "PHP" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-PHP-gray?style=for-the-badge&logo=coffeescript" />
                                                                        }
                                                                        {technology == "NoFrontend" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-No_Frontend-cad4b4?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                    </>
                                                                ))}
                                                            </div>


                                                            <i className="fa fa-angle-right  mb-3"></i>  Backend Development -

                                                            <div className='ms-5'>
                                                                {project.technologies.map((technology) => (
                                                                    <>

                                                                        {technology == "Express" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-ExpressJs-gray?style=for-the-badge&logo=express" />
                                                                        }
                                                                        {technology == "Node" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-NodeJs-gray?style=for-the-badge&logo=nodedotjs" />
                                                                        }

                                                                        {technology == "Java" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Java-gray?style=for-the-badge&logo=coffeescript" />
                                                                        }
                                                                        {technology == "NoBackend" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-No_Backend-cad4b4?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                        {technology == ".NET" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-.NET-cad4b4?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                        {technology == "C#" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-C_Sharp-cad4b4?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                        {technology == "Django" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Django-cad4b4?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                        {technology == "PHP" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-PHP-gray?style=for-the-badge&logo=coffeescript" />
                                                                        }
                                                                        {technology == "SpringBoot" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Spring_Boot-gray?style=for-the-badge&logo=coffeescript" />
                                                                        }
                                                                        {technology == "JsonServer" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Json_Server-gray?style=for-the-badge&logo=coffeescript" />
                                                                        }
                                                                    </>
                                                                ))}
                                                            </div>


                                                            <i className="fa fa-angle-right  mb-3"></i>  Database -

                                                            <div className='ms-5'>
                                                                {project.technologies.map((technology) => (
                                                                    <>
                                                                        {technology == "MongoDB" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-mongo_db-gray?style=for-the-badge&logo=mongodb" />
                                                                        }
                                                                        {technology == "MySQL" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-MySQL-ded3d3?style=for-the-badge&logo=mysql" />
                                                                        }
                                                                        {technology == "Firebase" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Firebase-gray?style=for-the-badge&logo=firebase" />
                                                                        }
                                                                        {technology == "NoDatabase" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-No_Database-cad4b4?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                        {technology == "Postgres" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Postgres-cad4b4?style=for-the-badge&logo=ghostery" />
                                                                        }
                                                                    </>
                                                                ))}
                                                            </div>


                                                            <i className="fa fa-angle-right  mb-3"></i>   Version Control -

                                                            <div className='ms-5'>
                                                                {project.technologies.map((technology) => (
                                                                    <>
                                                                        {technology == "Github" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Git_Hub-gray?style=for-the-badge&logo=github" />
                                                                        }
                                                                    </>
                                                                ))}
                                                            </div>


                                                            <i className="fa fa-angle-right mb-3"></i>  Code Editor -

                                                            <div className='ms-5'>
                                                                {project.technologies.map((technology) => (
                                                                    <>
                                                                        {technology == "VsCode" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-VS_Code-gray?style=for-the-badge&logo=visualstudiocode" />
                                                                        }
                                                                        {technology == "AndroidStudio" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Android_Studio-gray?style=for-the-badge&logo=androidstudio" />
                                                                        }
                                                                        {technology == "Eclipse" &&
                                                                            <img className='me-3 mb-3' src="https://img.shields.io/badge/-Eclipse_IDE-gray?style=for-the-badge&logo=eclipseide" />
                                                                        }

                                                                    </>
                                                                ))}
                                                            </div>


                                                        </p>
                                                    </div>

                                                    <div className="tab-pane fade shadow rounded bg-white p-5" id={`${project.id}-settings`} role="tabpanel" aria-labelledby={`${project.id}-settings-tab`}>
                                                        <h4 className="font-italic mb-4">Screens</h4>
                                                        <div >
                                                            <div className="row">
                                                                {project.image.map((img) => (
                                                                    <div className="col-md-4 mb-3">
                                                                        <div className="image-container project-image-container">
                                                                            {img.imagename} <img src={img.image} alt="" className="mt-2 img-fluid" style={{ objectFit: 'cover' }} />
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
                    ))
                    }
                </div >
            </div >
        </div >
    )
}

export default MyProjects