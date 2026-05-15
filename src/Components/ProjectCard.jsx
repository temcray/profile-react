function ProjectCard({ title, description, tech }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech:</strong> {tech}</p>

        </div>
    );
}

export default ProjectCard;