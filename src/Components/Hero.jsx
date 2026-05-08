import myPhoto from '../assets/myPhoto.png';

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Hi, I'm Tatiana Mccray</h1>
        <p>I'm a passionate web developer specializing in React and Node.js. I love creating beautiful and functional websites.</p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
      <div>
        <img src={myPhoto} alt="Tatiana Mccray" />
      </div>
    </section>
  );
}

export default Hero;