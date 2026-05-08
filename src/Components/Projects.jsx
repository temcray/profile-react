import peaceful from '../assets/peaceful.png';
import stillwater from '../assets/stillwater.png';
import jimmys from '../assets/jimmys.png';

function Projects() {
    return (
        <section>
            <h2>My Projects</h2>

        <div className="project-grid">
            <div className="project-card">
                <img src={peaceful} alt="Peaceful" />
                <h3>Peaceful Streams</h3>
                <p>A React wellness app with sign-in gating, 
                   videos, dark mode, and EmailJS contact support.
                </p>
                <a href="your_live_link">Live Demo</a>
                <a href="you_github_link">gitHub</a>
            </div>
            <div className="project-card">
                <img src={stillwater} alt="Stillwater" />
                <h3>Stillwater</h3>
                <p>A React and Node.js restaurant reservation app with user authentication, 
                   real-time updates, and a responsive design.
                </p>
            </div>
            <div className="project-card">
                <img src={jimmys} alt="Jimmy's" />
                <h3>Jimmy's</h3>
                <p>A React and Node.js restaurant reservation app with user authentication, 
                   real-time updates, and a responsive design.
                </p>
            </div>
        </div>
        </section>
    );
}

export default Projects;