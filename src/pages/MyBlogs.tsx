import myblogs from '../data/blogs'

function MyBlogs() {

    return (
        <div className='myblogs'>
            <br />
            <section id="services">
                <div className="container">
                    <h1 className="text-center">My Blogs</h1>
                </div>
            </section>
            <div className="container bootstrap snippets bootdeys mt-4">
                <div className="row" style={{ height: '100%' }}>
                    {myblogs.map((blog) => (
                        <div className="col-md-6 col-sm-6 content-card mb-4 " style={{ display: 'flex' }}>
                            <div className="medium-card" style={{ height: '100%', width: '100%', cursor: 'pointer' }} onClick={() => { window.open(`${blog?.link}`) }}>
                                <div className='row'>
                                    <div className='col-9'>
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
                                    <div className='col-3'>
                                        <img src={blog?.image} alt="blog" className='mt-3' style={{ width: '100%', height: '130px', objectFit: 'cover' }} />
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