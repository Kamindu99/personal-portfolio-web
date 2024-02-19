import React from 'react'

function MyBlogs() {

    const myblogs = [
        {
            id: 1,
            topTitle: '5 min read · Sep 16, 2023',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "AngularJS for Beginners - Building Your First AngularJS Web App",
            description: "AngularJS is an open-source JavaScript framework developed by Google for building dynamic web applications.",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
        {
            id: 2,
            topTitle: '3 min read · Aug 22, 2023',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Building a CRUD API with Spring Boot: A Step-by-Step Guide",
            description: "Spring Boot has revolutionized Java application development by providing a powerful and streamlined framework for building robust and scalable applications. ",
            link: "https://medium.com/@kamindugayantha/building-a-crud-application-with-spring-boot-a-step-by-step-guide-9926a2e1349"
        },
        {
            id: 3,
            topTitle: '4 min read · Jul 5, 2023',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Getting Started with TypeScript in React: A Comprehensive Guide",
            description: "Introduction In the world of modern web development, React has become one of the most popular JavaScript libraries for building user",
            link: "https://medium.com/@kamindugayantha/getting-started-with-typescript-in-react-a-comprehensive-guide-650e73a4d84a"
        },
        {
            id: 4,
            topTitle: '6 min read · May 15, 2022',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Become a Successful Full Stack Developer through the OOP Principles and Practices",
            description: "Application Frameworks An application framework is a software library that provides the basic structure to assist in the development",
            link: "https://medium.com/@kamindugayantha/become-a-successful-full-stack-developer-through-the-oop-principles-and-practices-39057c13c0b4"
        },
        {
            id: 5,
            topTitle: '5 min read · May 15, 2022',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "JavaScript concepts you need to know as a JavaScript programmer!",
            description: "JavaScript (Js) is a programming language that integrates HTML and CSS with one of the basic technologies in the World Wide Web. More",
            link: "https://medium.com/@kamindugayantha/javascript-concepts-you-need-to-know-as-a-javascript-programmer-1b2dc74cd1f3"
        },
        {
            id: 6,
            topTitle: '4 min read · May 15, 2022',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "ReactJS for Frontend Development",
            description: "What is ReactJS React is a JavaScript based UI development library designed to facilitate the development of visual interfaces. It is run by Facebook and the open source developer community. Although React is",
            link: "https://medium.com/@kamindugayantha/reactjs-for-the-frontend-development-ea7cfa59110f"
        },
        {
            id: 7,
            topTitle: '4 min read · May 15, 2022',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "Node JS for Beginners",
            description: "What is NODEJS Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. Many people are confused and understand that it is a framework or",
            link: "https://medium.com/@kamindugayantha/node-js-for-beginners-39fc34e6468"
        },
        {
            id: 8,
            topTitle: '4 min read · May 15, 2022',
            image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*rsdyu4-uIS2JpHDEi3p02w.png",
            title: "What is KoaJS Framework",
            description: "When it comes to web development, there are times when you need to choose a framework to enable and activate your backend API. …",
            link: "https://medium.com/@kamindugayantha/what-is-koajs-framework-fb28876c7509"
        }
    ]

    return (
        <div className='myblogs'>
            <div className="container bootstrap snippets bootdeys">
                <div className="row" style={{ height: '100%' }}>
                    {myblogs.map((blog) => (
                        <div className="col-md-6 col-sm-6 content-card" style={{ display: 'flex' }}>
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none" style={{ cursor: 'pointer', height: '100%' }} onClick={() => { window.open(blog?.link, '_blank'); }}>
                                    <div className="content">
                                        <h4 className="title">{blog?.title}</h4>
                                        <h6 className="category">{blog?.topTitle}</h6>
                                        <p className="description">{blog?.description} </p>
                                    </div>

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