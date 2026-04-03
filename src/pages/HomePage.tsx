import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";
import Experience from './HomeSections/Experience';
import Skills from './HomeSections/Skills';
import Volunteer from './HomeSections/Volunteer';
import Contact from './HomeSections/Contact';
import RecentProjects from './HomeSections/RecentProjects';

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

      <div className="intro spotlight-container" id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <h1 className="animate">Hi, It's me Kamindu</h1>
        <p >I am a Software Engineer in Sri Lanka.</p>
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

      <div className="container-fluid" id="about" >
        <div className="container" >
          <div className="position-relative d-flex align-items-center justify-content-center" >
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>About</h1>
            <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
          </div>
          <div className="row align-items-center" >
            <div className="col-lg-5 pb-4 pb-lg-0" >
              <img className="img-fluid rounded about-me-image" src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1687031468/myprof_t8slio.png" alt="" />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4 text-center text-md-start">Software Engineer & Web Developer</h3>
              <p style={{ textAlign: 'justify' }} className='me-0 me-md-5'>
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
                {/* NEW FIELDS */}
                <div className="col-sm-6 py-2">
                  <h6>
                    <i className="fab fa-linkedin me-2"></i>   LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/kamindugayantha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary"
                    >
                      View Profile
                    </a>
                  </h6>
                </div>

                <div className="col-sm-6 py-2">
                  <h6>
                    <i className="fab fa-github me-2"></i>   GitHub:{" "}
                    <a
                      href="https://github.com/Kamindu99/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary"
                    >
                      View Projects
                    </a>
                  </h6>
                </div>
              </div>
              <div className="d-flex justify-content-between ">
                <a className="btn btn-outline-secondary me-2 w-50" onClick={handleCVClick}>
                  View My CV
                </a>
                <a className="btn btn-outline-secondary w-50" onClick={handleDownload}>
                  Download My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Skills />

      <Experience />

      <RecentProjects />

      <Volunteer />

      <Contact />

    </div>

  )
}

export default HomePage
