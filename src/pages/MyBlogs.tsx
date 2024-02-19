import React from 'react'

function MyBlogs() {

    const myblogs = [
        {
            id: 1,
            topTitle: '5 min read · Sep 16, 2023',
            title: "AngularJS for Beginners - Building Your First AngularJS Web App",
            description: "AngularJS is an open-source JavaScript framework developed by Google for building dynamic web applications.",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
        {
            id: 2,
            topTitle: '3 min read · Aug 22, 2023',
            title: "Building a CRUD API with Spring Boot: A Step-by-Step Guide",
            description: "Spring Boot has revolutionized Java application development by providing a powerful and streamlined framework for building robust and scalable applications. ",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
        {
            id: 1,
            topTitle: '5 min read · Sep 16, 2023',
            title: "AngularJS for Beginners - Building Your First AngularJS Web App",
            description: "AngularJS is an open-source JavaScript framework developed by Google for building dynamic web applications.",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
        {
            id: 2,
            topTitle: '3 min read · Aug 22, 2023',
            title: "Building a CRUD API with Spring Boot: A Step-by-Step Guide",
            description: "Spring Boot has revolutionized Java application development by providing a powerful and streamlined framework for building robust and scalable applications. ",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        }, {
            id: 1,
            topTitle: '5 min read · Sep 16, 2023',
            title: "AngularJS for Beginners - Building Your First AngularJS Web App",
            description: "AngularJS is an open-source JavaScript framework developed by Google for building dynamic web applications.",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
        {
            id: 2,
            topTitle: '3 min read · Aug 22, 2023',
            title: "Building a CRUD API with Spring Boot: A Step-by-Step Guide",
            description: "Spring Boot has revolutionized Java application development by providing a powerful and streamlined framework for building robust and scalable applications. ",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        }, {
            id: 1,
            topTitle: '5 min read · Sep 16, 2023',
            title: "AngularJS for Beginners - Building Your First AngularJS Web App",
            description: "AngularJS is an open-source JavaScript framework developed by Google for building dynamic web applications.",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
        {
            id: 2,
            topTitle: '3 min read · Aug 22, 2023',
            title: "Building a CRUD API with Spring Boot: A Step-by-Step Guide",
            description: "Spring Boot has revolutionized Java application development by providing a powerful and streamlined framework for building robust and scalable applications. ",
            link: "https://medium.com/@kamindugayantha/angularjs-for-beginners-building-your-first-angularjs-web-app-55115a5f4404"
        },
    ]

    return (
        <div className='myblogs '>
            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    {myblogs.map((blog) => (
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">{blog?.topTitle}</h6>
                                        <h4 className="title"><a href={blog?.link}>{blog?.title}</a></h4>
                                        <p className="description">{blog?.description} </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default MyBlogs