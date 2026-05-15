function ProjectCard({ title, description, tech, liveLink, githubLink, imageUrl }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech:</strong> {tech}</p>

            <div className="project-links">
                <a href={liveLink} target="_blank" 
                rel="noopener noreferrer">Live Site</a>
                <a href={githubLink} target="_blank" 
                rel="noopener noreferrer">GitHub</a>
            </div>

        </div>
    );
}

export default ProjectCard;