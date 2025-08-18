import img1 from '../assets/img1.svg';

function Hero() {
  return (
    <section className="hero">
        <div className="hero-left">
            <img src={img1} alt="Your Name" />
        </div>
        <div className="hero-right">
            <h2>Hello, I'm <span>Mukund Madhav Sharma</span></h2>
            <p>A passionate MERN Stack Developer 🚀</p>
            <a href="#projects" className="btn">View My Work</a>
            </div>
      
    </section>
  )
}

export default Hero
