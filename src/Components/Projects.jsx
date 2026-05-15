import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>

            <div className="project-list">
                <ProjectCard
                    title="Stillwater Shelter"
                    description="A react resource app helping users find shelter,
                    emergency help, and support services."
                    tech="React, JavaScript, HTML, CSS"
                    liveUrl="https://stillwatershelter.netlify.app/"
                    imageUrl="https://via.placeholder.com/300"
                    
                />
                <ProjectCard
                    title="Peaceful Streams"
                    description=" A calming video app with sign-in access, 
                    light/dark mode, and contact from functionality."
                    tech="React, JavaScript, HTML, CSS, video API, EmailJS"
                    liveUrl="https://peacefulstreams.netlify.app/"
                    imageUrl="https://via.placeholder.com/300"
                    
                />
                <ProjectCard
                    title="Stillwater Shelter - Landing Page"
                    description="Description of project 3."
                    tech="React, JavaScript, HTML, CSS"
                    imageUrl="https://via.placeholder.com/300"
                    
                />
                <ProjectCard
                    title="Jimmy's Top Shelf"
                    description="Description of project 4."
                    tech="React, JavaScript, HTML, CSS"
                    imageUrl="https://via.placeholder.com/300"
                    
                />
            </div>

        </section>
    );
}

export default Projects;