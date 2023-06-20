import React from 'react'

type Props = {}

const MyProjects = (props: Props) => {
    return (
        <div>
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
                    <div className="item">
                        <div className="item-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Collapsible Item #1
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div className="t-p">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Item #2
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <div className="t-p">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Collapsible Item #3
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                            data-parent="#accordionExample">
                            <div className="t-p">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header" id="headingFour">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    Collapsible Item #4
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                            data-parent="#accordionExample">
                            <div className="t-p">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects