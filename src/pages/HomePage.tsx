import { useState } from 'react';
//@ts-ignore
import emailjs from 'emailjs-com';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";
import skills from '../data/skills';
import volunteer from '../data/volunteer';

const FaCodeIcon = FaCode as React.ElementType;
const FaLaptopCodeIcon = FaLaptopCode as React.ElementType;
const FaUsersIcon = FaUsers as React.ElementType;

const HomePage = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/MyCv/KaminduGayanthaCV.pdf"
    link.download = 'KaminduGayantha.pdf';
    link.click();
  };

  const cvUrl = 'https://www.canva.com/design/DAFmfC25NFc/VfBl8eTREGx9ZMDKGmjTCQ/view?utm_content=DAFmfC25NFc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd9ab21c5a6';

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
        e.target.elements.name.value = ''
        e.target.elements.email.value = ''
        e.target.elements.subject.value = ''
        e.target.elements.message.value = ''
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setSpotlightVisible(true);
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setSpotlightVisible(false);
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

      <div className="intro spotlight-container" id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <h1 className="animate">Hi, It's me Kamindu</h1>
        <p style={{ position: 'absolute', marginTop: '150px' }}>I am a Software Engineer in Sri Lanka.</p>
        {/* <button>Learn More</button> */}
        <img
          className="spotlight-image"
          src="https://sb.kaleidousercontent.com/67418/1047x597/a13a77a922/developers-6.png"
          style={{
            clipPath: spotlightVisible
              ? `circle(15% at ${cursorPosition.x}px ${cursorPosition.y}px)`
              : 'circle(0% at 0 0)', // Use 0% to hide the image initially
          }}
          alt="Spotlight Image"
        />
      </div>

      <div className="achievements">

        <div className="work-card">
          <FaCodeIcon className="work-icon" />
          <p className="work-heading">Projects</p>
          <p className="work-text">
            Built and delivered multiple full-stack applications using React, Node.js, and Spring Boot with a focus on scalability and performance.
          </p>
        </div>

        <div className="work-card">
          <FaLaptopCodeIcon className="work-icon" />
          <p className="work-heading">Skills</p>
          <p className="work-text">
            Strong experience in modern web development including frontend, backend, and cloud technologies with clean and maintainable code.
          </p>
        </div>

        <div className="work-card">
          <FaUsersIcon className="work-icon" />
          <p className="work-heading">Collaboration</p>
          <p className="work-text">
            Worked in Agile teams, contributing to code reviews, system design, and delivering high-quality software solutions.
          </p>
        </div>

      </div>

      <div className="container-fluid py-3" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>About</h1>
            <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid rounded " style={{ height: '500px', marginTop: '-16%', marginLeft: '20%' }} src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687031468/myprof_t8slio.png" alt="" />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Software Engineer & Web Developer</h3>
              <p style={{ textAlign: 'justify' }} className='me-5'>
                I am Kamindu Gayantha Wanigasinghe, a 26 year old graduate in Software Engineering from the Sri Lanka Institute of
                Information Technology. My academic journey has equipped me with a solid foundation in programming languages,
                algorithms, and software development methodologies. I am deeply passionate about leveraging my technical expertise
                to develop innovative software solutions that positively impact people's lives. I am eager to contribute my skills
                and knowledge to challenging projects and make meaningful contributions to the tech industry.
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Kamindu Gayantha</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">7 December 1999</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Graduated from SLIIT</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">4 Years +</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">071 527 3881</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">kamindu.gw@gmail.com</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Colombo, Sri Lanka</span></h6></div>
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


      <div className="container py-5" id="skill">
        <div className="text-center mb-5">
          <h1 className="text-uppercase text-primary">My Skills</h1>
          <p className="text-muted">Technologies I work with</p>
        </div>

        <div className="row">
          {skills.map((skill, index) => {
            const Icon = skill?.icon as React.ElementType;
            return (
              <div className="col-6 col-md-1 mb-4" key={index}>
                <div className="skill-card text-center  pb-2 pt-2" data-aos="zoom-in">
                  <div
                    className="skill-icon mb-3"
                    style={{ color: skill.color }}
                  >
                    <Icon className="skill-icon mb-3"
                      style={{ color: skill.color }} />
                  </div>
                  <h6>{skill.name}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container-fluid py-3" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
              Experience
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">Education & Experience</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">B.Sc. in Software Engineering</h5>
                  <p className="mb-2">
                    <strong>SLIIT</strong> | <small>2020 - 2024</small>
                  </p>
                  <p className='me-5'>
                    I am a graduate of the B.Sc. Software Engineering program at SLIIT (Sri Lanka Institute of Information Technology),
                    where I developed the skills and versatility to excel as a software engineer.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Advanced  Level</h5>
                  <p className="mb-2">
                    <strong>St. Aloysius College</strong> | <small>2016 - 2018</small>
                  </p>
                  <p className='me-5'>
                    I am pleased to share that I have successfully passed the AL exam at St. Aloysius, attaining three
                    commendable C grades. This achievement represents a significant milestone in my academic journey and reflects
                    my commitment to learning.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Ordinary Level</h5>
                  <p className="mb-2">
                    <strong>St. Aloysius College</strong> | <small>2009 - 2015</small>
                  </p>
                  <p className='me-5'>
                    I am delighted to share with you my exceptional performance in the Ordinary Level exam at St. Aloysius, where I
                    achieved remarkable success with 6 A's and 3 B's. These outstanding grades reflect my dedication and
                    academic excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <h3 className="mb-4">My Experience</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Software Engineer</h5>
                  <p className="mb-2">
                    <strong>OLAK Technologies</strong> | <small>2024 JAN-Present</small>
                  </p>
                  <p>
                    Designed and developed scalable web applications using modern technologies including React.js, Node.js, and Spring Boot.
                    Led the implementation of key features, optimized performance, and ensured high code quality through best
                    practices and code reviews.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Associate Software Engineer</h5>
                  <p className="mb-2">
                    <strong>OLAK Technologies</strong> | <small>2023 MAY-2023 DEC</small>
                  </p>
                  <p>
                    Worked closely with cross-functional teams to design and implement new features,
                    improve application performance, and ensure code quality. Actively participated in code reviews, debugging, and
                    Agile development to deliver quality software solutions.
                  </p>
                </div>
                <div className="position-relative ex-me mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                  <h5 className="font-weight-bold mb-1">Trainee Software Engineer</h5>
                  <p className="mb-2">
                    <strong>OLAK Technologies</strong> | <small>2022 OCT-2023 APR</small>
                  </p>
                  <p>
                    Gained hands-on experience in full-stack development by working on real-world projects under senior guidance. Assisted
                    in building frontend interfaces using React and backend APIs using Node.js and Spring Boot. Learned best practices in coding and
                    version control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='volunteer' id='voluteering'>
        <div className="volunteer-section">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
              Volunteering
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">ME AS A VOLUNTEER</h1>
          </div>
          <div className="volunteer-grid mt-5">
            {volunteer.map((item) => (
              <div key={item.id} className="card">
                <div className="logo">
                  <img src={item.img} alt={item.role} />
                </div>
                <h3>{item.role}</h3>
                <p className="org">{item.org}</p>
                <p className="date">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="contact">
        <div className="container contactContent mt-5">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
              Contact
            </h1>
            <h1 className="position-absolute text-uppercase text-primary"> Contact Me</h1>
          </div>

          <div className="row mt-4 mb-4">
            <div className="col-lg-6">
              <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '500px', height: '500px' }}>
                <div id="g-mapdisplay" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                  <iframe
                    style={{ height: '100%', width: '100%', border: '0' }}
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.7051143299054!2d80.44636617669012!3d6.644893532946532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c13f05a868a5%3A0xe3d8cdc3ac4c6c92!2sWanigasinghe&#39;s%20Place!5e1!3m2!1sen!2sus!4v1687534963017!5m2!1sen!2sus"
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
                If you have any questions or would like to contact me, please fill out the form below and I will get back to you as soon as possible.
                {/* Form fields */}<br /><br />
                <input type="text" className="form-control form-control" name="name" placeholder="Name" />
                <input type="email" className="form-control mt-3" name="email" placeholder="Email" />
                <input type="text" className="form-control mt-3" name="subject" placeholder="Subject" />
                <div className="mb-3 mt-3">
                  <textarea className="form-control" rows={5} id="comment" name="message" placeholder="Message"></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-success mt-3" style={{ width: '100%' }}>Send Mail</button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>

  )
}

export default HomePage
