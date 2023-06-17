import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div>


            <section className="bgimage" id="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                            <h2 className="hero_title">Hi, it's me Kamindu</h2>
                            <p className="hero_desc">I am a professional freelancer in Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="container mt-4 pt-4">
                    <h1 className="text-center">About Me</h1>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <img src="https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg" className="imageAboutPage" alt="" />
                        </div>

                        <div className="col-lg-8">
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged

                            </p>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <ul>
                                        <li>Name: David Parker</li>
                                        <li>Age: 28</li>
                                        <li>Occupation: Web Developer</li>

                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li>Name: David Parker</li>
                                        <li>Age: 28</li>
                                        <li>Occupation: Web Developer</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container mt-3 contactContent">
                    <h1 className="text-center">Contact Me</h1>

                    <div className="row mt-4">
                        <div className="col-lg-6">



                            <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '500px', height: '500px' }}>
                                <div id="g-mapdisplay" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                    <iframe
                                        style={{ height: '100%', width: '100%', border: '0' }}
                                        frameBorder="0"
                                        src="https://www.google.com/maps/embed/v1/place?q=KKD+Boarding+House,+Vihara+Mawatha,+Malabe,+Sri+Lanka&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                    ></iframe>
                                </div>
                                <a className="the-googlemap-enabler" href="https://www.bootstrapskins.com/themes" id="enable-maps-data">
                                    premium bootstrap themes
                                </a>
                                <style>{`#g-mapdisplay img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}`}</style>
                            </div>



                        </div>

                        <div className="col-lg-6">
                            <form>
                                <input type="text" className="form-control form-control-lg" placeholder="Name" />
                                <input type="email" className="form-control mt-3" placeholder="Email" />
                                <input type="text" className="form-control mt-3" placeholder="Subject" />
                                <div className="mb-3 mt-3">
                                    <textarea className="form-control" rows={5} id="comment" name="text" placeholder="Project Details"></textarea>
                                </div>
                            </form>
                            <button type="button" className="btn btn-success mt-3">Contact Me</button>

                        </div>

                    </div>
                </div>
            </section>



            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>About</h1>
                        <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid rounded w-100" src="https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg" alt="" />
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4">UI/UX Designer & Web Developer</h3>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Kate Winslet</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">1 April 1990</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Master</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">10 Years</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+012 345 6789</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">info@example.com</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">123 Street, New York, USA</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                            </div>
                            <a href="" className="btn blue btn-outline-primary mr-4">Hire Me</a>
                            <a href="" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid py-5" id="skill">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Skills</h1>
                        <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">HTML</h6>
                                    <h6 className="font-weight-bold">95%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">CSS</h6>
                                    <h6 className="font-weight-bold">85%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">PHP</h6>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Javascript</h6>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Angular JS</h6>
                                    <h6 className="font-weight-bold">95%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Wordpress</h6>
                                    <h6 className="font-weight-bold">85%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5" id="qualification">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
            Quality
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">Education & Experience</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="mb-4">My Education</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              <div className="position-relative ex-me mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                <h5 className="font-weight-bold mb-1">Bachelor of Science</h5>
                <p className="mb-2">
                  <strong>Cambridge University</strong> | <small>2005 - 2009</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                  Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
                </p>
              </div>
              <div className="position-relative ex-me mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                <p className="mb-2">
                  <strong>Cambridge University</strong> | <small>2009 - 2011</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                  Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
                </p>
              </div>
              <div className="position-relative ex-me mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                <h5 className="font-weight-bold mb-1">IIT Kharagpur</h5>
                <p className="mb-2">
                  <strong>Cambridge University</strong> | <small>2011 - 2015</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                  Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4">My Experience</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              <div className="position-relative ex-me mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                <h5 className="font-weight-bold mb-1">Web Designer</h5>
                <p className="mb-2">
                  <strong>Soft Company</strong> | <small>Excellent</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                  Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
                </p>
              </div>
              <div className="position-relative ex-me mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                <h5 className="font-weight-bold mb-1">Artificial Intelligence</h5>
                <p className="mb-2">
                  <strong>Soft Company</strong> | <small>Good</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                  Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
                </p>
              </div>
              <div className="position-relative ex-me mb-4">
                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                <h5 className="font-weight-bold mb-1">Web Development</h5>
                <p className="mb-2">
                  <strong>Soft Company</strong> | <small>Excellent</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                  Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My teams</h2>
        <div className="carousel owl-carousel">

        <div className="row align-items-center">
          <div className="col-lg-6">
          <div className="card">
            <div className="box">
              <img src="https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg" alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </div>
          <div className="col-lg-6">
          <div className="card">
            <div className="box">
              <img src="https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg" alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
            </div>
            <div className="col-lg-6">
          <div className="card">
            <div className="box">
              <img src="https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg" alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
            </div>
            <div className="col-lg-6">
          <div className="card">
            <div className="box">
              <img src="https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg" alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
            </div>
            <div className="col-lg-6">
          <div className="card">
            <div className="box">
              <img src="https://miro.medium.com/v2/resize:fit:2400/1*Atv7s1TO3VSEfNpq_2nc1A.jpeg" alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>

        </div>



    )
}

export default HomePage