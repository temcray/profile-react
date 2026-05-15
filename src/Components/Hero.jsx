import profileImg from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
      <img src={profileImg} alt="Tatiana McCray" className="profile-img" />
      <h1>Hi, I'm Tatiana McCray</h1>
      <h2>Front-End Web Developer</h2>
      
      <p>I build clean, responsive websites and React Application with a focus on
        usability, accessibility, and real-world user needs.
      </p>
      </div>

      <button>View Projects</button>
      <button>Contact Me</button>
    </section>
  );
}

export default Hero;