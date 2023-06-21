import React from 'react'
//@ts-ignore
import cvFile from './MyCv/KaminduGayanthaCV.pdf';
import emailjs from 'emailjs-com';

type Props = {}

const HomePage = (props: Props) => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'KaminduGayantha.pdf';
    link.click();
  };

  const cvUrl = 'https://www.canva.com/design/DAFmfC25NFc/KpVLh33EqykOB3IPFs2jCA/view?utm_content=DAFmfC25NFc&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel';

  const handleCVClick = () => {
    window.open(cvUrl, '_blank');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_enqwz5g';
    const templateID = 'template_uo5wmtr';
    const userID = '2ZDkcLHfPtIIlKu3V';

    // Replace with the actual email field values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    // Send the email
    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        // Reset the form here if needed
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };


  return (
    <div>


      {/* <section className="bgimage" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <h2 className="hero_title">Hi, It's me Kamindu</h2>
              <p className="hero_desc">I am a Software Engineer in Sri Lanka</p>
            </div>
          </div>
        </div>
      </section> */}


      <div className="intro" id="home">
        <h1 className="animate">Hi, It's me Kamindu</h1>
        <p>I am a web developer in Sri Lanka.</p>
        {/* <button>Learn More</button> */}
      </div>
      <div className="achievements">
        <div className="work">
          <i className="fas fa-atom"></i>
          <p className="work-heading">Projects</p>
          <p className="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
        </div>
        <div className="work">
          <i className="fas fa-skiing"></i>
          <p className="work-heading">Skills</p>
          <p className="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
        </div>
        <div className="work">
          <i className="fas fa-ethernet"></i>
          <p className="work-heading">Network</p>
          <p className="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
        </div>
      </div>

      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>About</h1>
            <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid rounded " style={{ height: '500px', marginTop: '-20%', marginLeft: '20%' }} src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687031468/myprof_t8slio.png" alt="" />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Software Engineer & Web Developer</h3>
              <p>
                I am Kamindu Gayantha Wanigasinghe and 24 years old. I am currently pursuing my degree in Software Engineering in Sri Lanka Institute of Information Technology.
                During my academic life, I obtained a thorough understanding of several programming languages, algorithms, and software development methodologies.
                I am passionate to leverage my technical skills and knowledge to contribute to the creation of innovative software solutions that positively impact people's lives.
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Kamindu Gayantha</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">7 December 1999</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Undergraduate at SLIIT</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">1 Years</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">071 5273881</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">kamidugayantha123@gmail.com</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">2nd mail post, Maudella, Dela</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
              </div>
              <a className="btn blue btn-outline-primary me-4" onClick={handleCVClick}>
                View My CV
              </a>
              <a className="btn blue btn-outline-primary me-4" onClick={handleDownload}>
                Download My CV
              </a>
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
                  <h6 className="font-weight-bold">Javascript</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: `90%` }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">HTML|CSS</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: `95%` }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">PHP</h6>
                  <h6 className="font-weight-bold">70%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `70%` }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Android</h6>
                  <h6 className="font-weight-bold">80%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: `80%` }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Java</h6>
                  <h6 className="font-weight-bold">75%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" role="progressbar" style={{ width: `75%` }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Python</h6>
                  <h6 className="font-weight-bold">65%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: `65%` }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
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
                  <h5 className="font-weight-bold mb-1">Ordinary Level</h5>
                  <p className="mb-2">
                    <strong>St. Aloysius College</strong> | <small>2009 - 2015</small>
                  </p>
                  <p>
                    I am delighted to share with you my exceptional performance in the Ordinary Level exam at St. Aloysius, where I
                    achieved remarkable success with 6 A's and 3 B's. These outstanding grades reflect my dedication, hard work, and
                    academic excellence.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Advanced  Level</h5>
                  <p className="mb-2">
                    <strong>St. Aloysius College</strong> | <small>2016 - 2018</small>
                  </p>
                  <p>
                    I am pleased to share that I have successfully passed the Advanced Level exam at St. Aloysius, attaining three
                    commendable C grades. This achievement represents a significant milestone in my academic journey and reflects
                    my dedication, perseverance, and commitment to learning.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">B.Sc. in Software Engineering</h5>
                  <p className="mb-2">
                    <strong>SLIIT</strong> | <small>2020 - 2024</small>
                  </p>
                  <p>
                    I am currently enrolled in the B.Sc. Software Engineering program at SLIIT (Sri Lanka Institute of Information
                    Technology), where I am passionately studying to become a skilled and versatile software engineer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">My Experience</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Member of Rotaract Club</h5>
                  <p className="mb-2">
                    <strong>SLIIT</strong> | <small>2020-2024</small>
                  </p>
                  <p>
                    Membership in the Rotaract club is a reflection of my commitment to service, social responsibility, and making a
                    positive difference in the world. It demonstrates my dedication to upholding the values of Rotary International.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Member of IEEE</h5>
                  <p className="mb-2">
                    <strong>SLIIT</strong> | <small>2020-2024</small>
                  </p>
                  <p>
                    I am proud to be a member of the Institute of Electrical and Electronics Engineers (IEEE) society, an esteemed
                    global community dedicated to advancing technology and innovation. As an IEEE member, I have the opportunity to
                    connect with like-minded professionals, access valuable resources.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Associate Software Engineer</h5>
                  <p className="mb-2">
                    <strong>OLAK Technologies</strong> | <small>2022-Present</small>
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

            <div className="col-lg-6 d-flex align-items-center">
              <form className="w-100" onSubmit={handleSubmit}>
                {/* Form fields */}
                <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" />
                <input type="email" className="form-control mt-3" name="email" placeholder="Email" />
                <input type="text" className="form-control mt-3" name="subject" placeholder="Subject" />
                <div className="mb-3 mt-3">
                  <textarea className="form-control" rows={5} id="comment" name="message" placeholder="Message"></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-success mt-3">Contact Me</button>
              </form>
            </div>

          </div>
        </div>
      </section>


    </div>



  )
}

export default HomePage