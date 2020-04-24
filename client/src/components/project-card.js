import React from 'react';

const ProjectCard = (props) => (
    <div className="card">
        <img src={props.img} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <a href={props.github} className="btn btn-primary">GitHub</a>
                <a href={props.deployed} className="btn btn-primary">Link</a>
            </div>
    </div>
);

export default ProjectCard;