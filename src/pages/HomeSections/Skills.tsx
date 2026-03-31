import React from 'react'
import skills from '../../data/skills';

function Skills() {
    return (
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
    )
}

export default Skills