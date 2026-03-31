import React from 'react'
import volunteer from '../../data/volunteer'

function Volunteer() {
    return (
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
                            <h3>{item.org}</h3>
                            <p className="org">{item.role}</p>
                            <p className="date">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Volunteer