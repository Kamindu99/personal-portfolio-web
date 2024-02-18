import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const MyProjects = (props: Props) => {

    const [projects, setProjects] = React.useState([
        {
            id: "headingTwelve",
            target: "collapseTwelve",
            title: "Land Selling Website - (AngularJs , Json-Server & Angular MUI)",
            description: "This is a Land Selling Website developed using AngularJs as the frontend framework, Json-Server as the backend framework. The system provides various features for managing land-related tasks such as land management, land booking, land selling. It also offers a user-friendly interface that ensures seamless navigation and an enjoyable user experience. The system is designed to be responsive and compatible with various devices, ensuring a consistent experience across desktop and mobile platforms.",
            features: [
                "Land Management",
                "Apartment Management",
                "House Selling",
                "Json-Server RestApi",
                "Angular Material UI"
            ],
            technologies: [
                "AngularJs",
                "JsonServer",
                "AngularMUI",
                "Bootstrap",
                "CSS",
                "VsCode",
                "Github",
                "NoDatabase"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1690718293/landsale_ky48wn.jpg",
                    imagename: "1. Lands Page"
                }
            ],
            url: "https://blueskylands.netlify.app/"
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
                "CSS",
                "VsCode",
                "Github"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1685267799/travelwebkamindu_r6xqqh.jpg",
                    imagename: "1. Home Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431551/resturent_g5iqk4.jpg",
                    imagename: "2. Resturents Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431551/flightbook_hu0win.jpg",
                    imagename: "3. Flight Booking Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431551/events_qgpi72.jpg",
                    imagename: "4. Event Booking Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431550/rentacar_mzwqyl.jpg",
                    imagename: "5. Rent a Car Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431550/hotels_wqltsl.jpg",
                    imagename: "6. Hotel Booking Page"
                }
            ],
            url: "https://travelwithkamidu.netlify.app/"
        },
        {
            id: "headingFour",
            target: "collapseFour",
            title: "Agriculture Management System - (ReactJs , NodeJs , ExpressJS & MongoDB)",
            description: "This is an Agriculture Management System developed using React.js as the frontend framework, Node.js with Express.js as the backend framework, and MongoDB as the database. The system provides various features for managing agriculture-related tasks such as seed management, plant management, and fertilizer management. It also offers a user-friendly interface that ensures seamless navigation and an enjoyable user experience. The system is designed to be responsive and compatible with various devices, ensuring a consistent experience across desktop and mobile platforms.",
            features: [
                "Seed Management",
                "Plant Management",
                "Fertilizer Management",
                "Equipments Management",
                "AgroChemicle Management"
            ],
            technologies: [
                "React",
                "Node",
                "Express",
                "MongoDB",
                "Bootstrap",
                "CSS",
                "VsCode",
                "Github"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687672488/agrifrontend_3_ykx4wk.jpg",
                    imagename: "1. Home Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687672488/agrifrontend_2_cecfrr.jpg",
                    imagename: "2. Plants Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687672488/agrifrontend_1_wrivge.jpg",
                    imagename: "3. Seeds Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687779274/agrifrontend_6_mkqjyi.jpg",
                    imagename: "4. Equipments Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687779274/agrifrontend_7_fawdlv.jpg",
                    imagename: "5. Fertilizer Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687779274/agrifrontend_8_ntpbz9.jpg",
                    imagename: "6. AgroChemicles Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687672487/agrifrontend_4_den4ol.jpg",
                    imagename: "7. About Us Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687779274/agrifrontend_5_lmzdcz.jpg",
                    imagename: "8. Services Page"
                },
            ],
            url: "https://greenworldagriculture.netlify.app/"
        },
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
                "CSS",
                "Github",
                "VsCode",
                "NoBackend",
                "NoDatabase"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1688402835/dotcomcomputers_6_k3a4fz.jpg",
                    imagename: "1. Home Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1688402835/dotcomcomputers_5_nnavpt.jpg",
                    imagename: "2. Laptops Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1688402835/dotcomcomputers_4_yzd9ss.jpg",
                    imagename: "3. Desktops Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1688402835/dotcomcomputers_3_yybhvw.jpg",
                    imagename: "4. Accessories Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1688402835/dotcomcomputers_2_kf8dky.jpg",
                    imagename: "5. Softwares Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1688402834/dotcomcomputers_1_honlky.jpg",
                    imagename: "6. Cart Page"
                },
            ],
            url: "https://dotcomcomputers.netlify.app/"
        },
        {
            id: "headingFourteen",
            target: "collapseFourteen",
            title: "Wedding Proposals Webapp - (AngularJs (Bootstrap Template), NodeJs , MongoDB)",
            description: "Wedding Proposals Web is an elegant and feature-rich platform developed using AngularJS and Node.js, designed to assist couples and event organizers in planning their dream weddings. Built upon the Bootstrap template, this project encompasses a range of features including groom and bride profiles, wedding decoration services, wedding hall bookings, and professional wedding photography services.",
            features: [
                "Groom and Bride Profiles",
                "Wedding Decoration Services",
                "Wedding Hall Bookings",
                "Professional Wedding Photography"
            ],
            technologies: [
                "AngularJs",
                "NodeJs",
                "AngularMUI",
                "Bootstrap",
                "CSS",
                "VsCode",
                "Github",
                "MongoDB"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1693411116/jayamangalam_cbftzl.jpg",
                    imagename: "1. Bride Profiles Page"
                }
            ],
            url: "https://jayamangalam.netlify.app/"
        },
        {
            id: "headingThirteen",
            target: "collapseThirteen",
            title: "Inventory Management System - (ReactJs (MUI Matis Template) , NodeJs , ExpressJS & MongoDB)",
            description: "Inventory Management System is a comprehensive solution developed using React.js and Node.js that empowers businesses with streamlined inventory control and management. Built upon the MUI Mantis template, this project provides features like purchase order management, goods receiving notes, stock visualization, and seamless item transfers.",
            features: [
                "Purchase Order",
                "Goods Receiving Notes",
                "Stock View",
                "Item Request",
                "Item Transfers"
            ],
            technologies: [
                "React",
                "Node",
                "Express",
                "MongoDB",
                "MUI",
                "CSS",
                "VsCode",
                "Github"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1693286320/invntry_sfmpmr.jpg",
                    imagename: "1. Purchase Order"
                }
            ],
            url: "https://inventory-system-web.netlify.app/"
        },
        {
            id: "headingFifteen",
            target: "collapseFifteen",
            title: "Audio Book System Landing Page - (ReactJs & TypeScript)",
            description: "I developed a Audio Book System Landing Page using React.js, TypeScript, Bootstrap, and CSS. This dynamic web application serves as a showcase of all details about Audio book sytem research. The Research Details Landing Page, a dedicated space where you can delve into the depths of my research journey. This dynamic web page is powered by cutting-edge technologies, including React.js, TypeScript, CSS, and Bootstrap, to offer you a seamless and visually captivating experience",
            features: [
                "Project Scope",
                "Milestones",
                'Downloads',
                ' About Us',
                "Contact Us",
            ],
            technologies: [
                "React",
                "TypeScript",
                "Bootstrap",
                "CSS",
                "Github",
                "VsCode",
                "NoBackend",
                "NoDatabase"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1694279205/audiobooks_nnku6g.jpg",
                    imagename: "1. Literature Survey"
                }
            ],
            url: "https://listened.netlify.app/"
        },
        {
            id: "headingSeventeen",
            target: "collapseSeventeen",
            title: "Train Ticket Booking System - (ReactJs , .NET , C#, MongoDB)",
            description: "I developed a Train Ticket Booking System using React.js, .NET, C#, and MongoDB. This comprehensive web application is designed to streamline and enhance the management of train ticket booking-related activities and services. The Train Ticket Booking System offers a range of features and functionalities that cater to the needs of both tourists and tourism operators. It provides a user-friendly interface that ensures seamless navigation and an enjoyable user experience. For tourists, the application allows them to explore various destinations, view attractions and activities, and make bookings for accommodations, tours, and transportation. They can access detailed information about each destination, including popular landmarks, local culture, and recommended itineraries. The integrated booking system ensures a convenient and secure reservation process.",
            features: [
                "Train Management",
                "Train Schedule Management",
                "Train Ticket Booking",
                "Train Ticket Cancellation",
                "User Authentication",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "Bootstrap",
                "CSS",
                "Github",
                "VsCode",
                "C#",
                ".NET",
                "MongoDB"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1698775383/traingo_zpzyh7.jpg",
                    imagename: "1. Home Page"
                }
            ],
            url: "https://traingo.netlify.app/"
        },
        {
            id: "headingEighteen",
            target: "collapseEighteen",
            title: "Online Library Management System - (ReactJs , MUI, SpringBoot(Java) , Postgres)",
            description: "I developed a  Library Management System using React.js, SpringBoot(Java), and Postgres. This comprehensive web application is designed to streamline and enhance the management of library-related activities and services. The Library Management System offers a range of features and functionalities that cater to the needs of both students and library operators. It provides a user-friendly interface that ensures seamless navigation and an enjoyable user experience. For students, the application allows them to explore various books, view book details, and make bookings for books. They can access detailed information about each book, including popular authors, book categories, and recommended itineraries. The integrated booking system ensures a convenient and secure reservation process.",
            features: [
                "Book Management",
                "Book Schedule Management",
                "Book Booking",
                "Book Cancellation",
                "User Authentication",
                "Responsive Design"
            ],
            technologies: [
                "React",
                "MUI",
                "CSS",
                "Github",
                "VsCode",
                "SpringBoot",
                "Java",
                "Postgres"
            ],
            image: [

            ],
            url: "https://online-library-webapp.netlify.app/"
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
                "CSS",
                "Github",
                "VsCode",
                "NoBackend",
                "NoDatabase"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/homepageportfolio_bq2nno.jpg",
                    imagename: "1. Home Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/myexpe_dkww9y.jpg",
                    imagename: "2. Education Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/myprojectsportfolio_qk7awy.jpg",
                    imagename: "3. My Projects Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687431498/galleryportfolio_kfb8go.jpg",
                    imagename: "4. Gallery Page"
                }
            ],
            url: "https://kamindugayantha.netlify.app/"
        },
        {
            id: "headingeight",
            target: "collapseEight",
            title: "Online Food Ordering System - (ReactJs , NodeJs , ExpressJS & MongoDB)",
            description: " This is an Online Food Ordering System developed using React.js as the frontend framework, Node.js with Express.js as the backend framework, and MongoDB as the database. The system provides various features for managing food-related tasks such as food management, order management, and delivery management. It also offers a user-friendly interface that ensures seamless navigation and an enjoyable user experience. The system is designed to be responsive and compatible with various devices, ensuring a consistent experience across desktop and mobile platforms.",
            features: [
                "Food Management",
                "Delivery Management",
                "Table Management",
                "User Management",
                "Inquiry Management"
            ],
            technologies: [
                "React",
                "Node",
                "Express",
                "MongoDB",
                "Bootstrap",
                "CSS",
                "VsCode",
                "Github"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687888286/foodorderscreen3_d4ltln.jpg",
                    imagename: "1. Food List Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687888286/foodorderscreen1_ebmdlp.jpg",
                    imagename: "2. Order Food Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687888286/foodorderscreen2_nngypf.jpg",
                    imagename: "3. Sign Up Page"
                }
            ],
            url: "https://slfoodfactory.netlify.app/"
        },
        {
            id: "headingFive",
            target: "collapseFive",
            title: "Travel Management System - (ReactJs , NodeJs , ExpressJS & MongoDB)",
            description: "SLIIT 2nd Year 2nd Semester ITP Project. A web application which provides functions for the user including selceting travel packages, booking room packages, buying equipments,etc. while admin is allowed to add travel packages and manage the whole system. My Role - Travel Package Management Function Technologies - React Js, Node Js, Mongo DB, Express, Git, VS Code",
            features: [
                "Travel Packages Management",
                "Hotel Management",
                "Guide Management",
                "Activity Management",
                "Equipment Management",
                "Admin Management",
                "User Management"
            ],
            technologies: [
                "React",
                "Node",
                "Express",
                "MongoDB",
                "Bootstrap",
                "CSS",
                "VsCode",
                "Github"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687897821/dreamtravelscreen4_ammgzi.jpg",
                    imagename: "1. Home Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687897821/dreamtravelscreen5_lesoij.jpg",
                    imagename: "2. Travel Packages Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687897820/dreamtravelscreen3_fs0abi.jpg",
                    imagename: "3. Travel Package Details Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687897820/dreamtravelscreen2_fl3gpl.jpg",
                    imagename: "4. Booking Travel Packages Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687897820/dreamtravelscreen1_zsbr3u.jpg",
                    imagename: "5. Admin Dashboard Page"
                },
            ],
            url: "https://dreamtravelers.netlify.app/"
        },
        {
            id: "headingSix",
            target: "collapseSix",
            title: "Hospital Management System - (Java & MySQL)",
            description: "This is a Hospital Management System developed using Java as the frontend framework and MySQL as the database. The system provides various features for managing hospital-related tasks such as Login page, signup page. It also offers a user-friendly interface that ensures seamless navigation and an enjoyable user experience. The system is designed to be responsive and compatible with various devices, ensuring a consistent experience across desktop and mobile platforms.",
            features: [
                "Login",
                "Signup"
            ],
            technologies: [
                "Java",
                "MySQL",
                "Bootstrap",
                "CSS",
                "HTML",
                "Github",
                "Eclipse"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687904908/javapscreen1_ouk5er.jpg",
                    imagename: "1. Signup Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687904908/javapscreen2_vitezw.jpg",
                    imagename: "2. Login Page"
                }
            ],
            url: "#"
        },
        {
            id: "headingSeven",
            target: "collapseSeven",
            title: "Food Ordering System - (Android Mobile App)",
            description: "This is a Food Ordering System developed using Java as the frontend framework and Firebase as the database. The system provides various features for managing food-related tasks such as Login page, signup page, food ordering page. It also offers a user-friendly interface that ensures seamless navigation and an enjoyable user experience. The system is designed to be responsive and compatible with various devices, ensuring a consistent experience across Mobile platforms.",
            features: [
                "Food Management",
                "Table Booking",
                "Delivery Management",
                "Inquiry Management"
            ],
            technologies: [
                "Java",
                "Firebase",
                "Javascript",
                "AndroidStudio",
                "Github"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687904883/mdd1_2_ckhfod.jpg",
                    imagename: "1. My Order Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687904882/mdd1_1_qs6c7v.jpg",
                    imagename: "2. Add Delivery Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687904883/mdd1_3_aqv6cw.jpg",
                    imagename: "3. Edit Delivery Page"
                },
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687904883/mdd1_4_gnxwo2.jpg",
                    imagename: "4. Order Status Page"
                },
            ],
            url: "#"
        },
        {
            id: "headingNine",
            target: "collapseNine",
            title: "Student Management System - (PHP, HTML, CSS & MySQL)",
            description: "This is a Student Management System developed using PHP as the frontend framework and MySQL as the database. The system provides various features for managing student-related tasks such as Login page, signup page.",
            features: [
                "Login",
                "Signup",
                "Student Profile",
                "Profile Update",
                "Profile Delete",
            ],
            technologies: [
                "PHP",
                "HTML",
                "CSS",
                "MySQL",
                "Bootstrap",
                "Javascript",
                "VsCode",
                "Github"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1689184513/studentmanagement_frffjk.jpg",
                    imagename: "1. Student Registration Page"
                }

            ],
            url: "https://studentmanagementweb.netlify.app/"
        },
        {
            id: "headingTen",
            target: "collapseTen",
            title: "Unit Converter Website - (HTML, CSS & Javascript)",
            description: "This is a Unit Converter Website developed using HTML, CSS & Javascript. The system provides various features for converting units such as Length, Temperature, Weight, Currency.",
            features: [
                "Length Converter",
                "Temperature Converter",
                "Weight Converter",
                "Currency Converter"
            ],
            technologies: [
                "HTML",
                "CSS",
                "Bootstrap",
                "Javascript",
                "VsCode",
                "Github",
                "NoBackend",
                "NoDatabase"
            ],
            image: [
                {
                    image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1689169883/unitconerter_h7qeup.jpg",
                    imagename: "1. Temperature Converter Page"
                }

            ],
            url: "https://simpleunitconvertapp.netlify.app/"
        },
        {
            id: "headingEleven",
            target: "collapseEleven",
            title: "Employee Management RestApi  - (Spring Boot & MySQL)",
            description: "This is a Employee Management RestApi developed using Spring Boot & MySQL. The system provides various features for managing employee-related tasks such as register employee, update employee, delete employee, get employee details.",
            features: [
                "Register Employee",
                "Update Employee",
                "Delete Employee",
                "Get All Employee",
                "Get Employee Details"
            ],
            technologies: [
                "SpringBoot",
                "MySQL",
                "VsCode",
                "Github",
                "NoFrontend"
            ],
            image: [
                // {
                //     image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1689169883/unitconerter_h7qeup.jpg",
                //     imagename: "1. Temperature Converter Page"
                // }

            ],
            url: "#"
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