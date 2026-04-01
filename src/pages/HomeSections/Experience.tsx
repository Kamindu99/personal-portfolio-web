import React from 'react'

function Experience() {
    return (
        <div className="container-fluid py-3 experience" id="qualification">
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center mb-4">
                    <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>
                        Experience
                    </h1>
                    <h1 className="position-absolute text-uppercase text-primary">Education & Experience</h1>
                </div>
                <div className="row align-items-center rowcustom">
                    <div className="col-lg-6">
                        <h3 className="mb-4">My Education</h3>
                        <div className="border-left border-primary pt-2 pl-4 ml-2">
                            <div className="position-relative ex-me mb-4">
                                <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-35px', fontSize: '22px' }}></i>
                                <h5 className="font-weight-bold mb-1">B.Sc. in Software Engineering</h5>
                                <p className="mb-2">
                                    <strong>SLIIT</strong> | <small>2020 - 2024</small>
                                </p>
                                <p className='me-0 me-md-5'>
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
                                <p className='me-0 me-md-5'>
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
                                <p className='me-0 me-md-5'>
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
    )
}

export default Experience