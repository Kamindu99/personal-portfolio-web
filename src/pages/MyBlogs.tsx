import React from 'react'

function MyBlogs() {

    const myblogs = [
        {
            id: 1,
            readingTime: '5 min read',
            addedDate: "Sep 16, 2023",
            category: 'AngularJS',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "AngularJS for Beginners - Building Your First AngularJS Web App",
            description: "AngularJS is an open-source JavaScript framework developed by Google for building dynamic web applications.",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
        {
            id: 2,
            readingTime: '3 min read',
            addedDate: "Aug 22, 2023",
            category: 'Spring Boot',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Building a CRUD API with Spring Boot: A Step-by-Step Guide",
            description: "Spring Boot has revolutionized Java application development by providing a powerful and streamlined framework for building robust and scalable applications. ",
            link: "https://medium.com/@kamindugayantha/building-a-crud-application-with-spring-boot-a-step-by-step-guide-9926a2e1349"
        },
        {
            id: 3,
            readingTime: '4 min read',
            addedDate: "Jul 5, 2023",
            category: 'TypeScript',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Getting Started with TypeScript in React: A Comprehensive Guide",
            description: "Introduction In the world of modern web development, React has become one of the most popular JavaScript libraries for building user",
            link: "https://medium.com/@kamindugayantha/getting-started-with-typescript-in-react-a-comprehensive-guide-650e73a4d84a"
        },
        {
            id: 4,
            readingTime: '6 min read',
            addedDate: "May 15, 2022",
            category: 'OOP Principles',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Become a Successful Full Stack Developer through the OOP Principles and Practices",
            description: "Application Frameworks An application framework is a software library that provides the basic structure to assist in the development",
            link: "https://medium.com/@kamindugayantha/become-a-successful-full-stack-developer-through-the-oop-principles-and-practices-39057c13c0b4"
        },
        {
            id: 5,
            readingTime: '5 min read',
            addedDate: "May 15, 2022",
            category: 'JavaScript',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "JavaScript concepts you need to know as a JavaScript programmer!",
            description: "JavaScript (Js) is a programming language that integrates HTML and CSS with one of the basic technologies in the World Wide Web. More",
            link: "https://medium.com/@kamindugayantha/javascript-concepts-you-need-to-know-as-a-javascript-programmer-1b2dc74cd1f3"
        },
        {
            id: 6,
            readingTime: '4 min read',
            addedDate: "May 15, 2022",
            category: 'ReactJS',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "ReactJS for Frontend Development",
            description: "What is ReactJS React is a JavaScript based UI development library designed to facilitate the development of visual interfaces. It is run by Facebook and the open source developer community. Although React is",
            link: "https://medium.com/@kamindugayantha/reactjs-for-the-frontend-development-ea7cfa59110f"
        },
        {
            id: 7,
            readingTime: '4 min read',
            addedDate: "May 15, 2022",
            category: 'NodeJS',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Node JS for Beginners",
            description: "What is NODEJS Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. Many people are confused and understand that it is a framework or",
            link: "https://medium.com/@kamindugayantha/node-js-for-beginners-39fc34e6468"
        },
        {
            id: 8,
            readingTime: '4 min read',
            addedDate: "May 15, 2022",
            category: 'KoaJS',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "What is KoaJS Framework",
            description: "When it comes to web development, there are times when you need to choose a framework to enable and activate your backend API. …",
            link: "https://medium.com/@kamindugayantha/what-is-koajs-framework-fb28876c7509"
        }
    ]

    return (
        <div className='myblogs'>
            <br />
            <div className="container bootstrap snippets bootdeys">
                <div className="row" style={{ height: '100%' }}>
                    {myblogs.map((blog) => (
                        <div className="col-md-4 col-sm-6 content-card mb-4" style={{ display: 'flex' }}>
                            <div className="medium-card" style={{ height: '100%', width: '100%', cursor: 'pointer' }} onClick={() => { window.open(`${blog?.link}`) }}>
                                <div className="medium-card-header">
                                    <h2 className="medium-card-title">{blog?.title}</h2>
                                    <p className="medium-card-date">{blog?.addedDate}</p>
                                </div>
                                <div className="medium-card-content">
                                    <p className="medium-card-excerpt">{blog?.description}</p>
                                </div>
                                <div className="medium-card-footer">
                                    <div className="medium-card-chip">
                                        <p className="medium-card-category">{blog?.category}</p>
                                    </div>
                                    <p className="medium-card-read-time">{blog?.readingTime}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div >
    )
}

export default MyBlogs