import "./About.css"; // Import CSS file

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">Hello! I'm a Software Developer</h2>
        <h3 className="about-subtitle">Welcome to my portfolio 👋</h3>

        <p className="about-intro">
          I'm a developer who loves building full-stack applications.<br />
          Skilled in <strong>React, Node.js, Express, and MongoDB</strong>.<br />
          I enjoy solving <strong>DSA problems</strong> using C/C++.<br />
          Also know a bit of Python and Java.<br />
          Always eager to learn and explore new technologies. 🚀
        </p>

        <div className="about-section">
          <h3>🎓 Education</h3>
          <ul>
            <li>
              <h4>B.Tech in Information Technology</h4>
              <p>
                Currently pursuing 4th year at JSS Academy of Technical
                Education, Noida.
              </p>
            </li>
            <li>
              <h4>Intermediate</h4>
              <p>
                Completed 10th & 12th at Apeejay School, Noida with 84% and 74%
                respectively.
              </p>
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h3>📜 Certificates</h3>
          <ul className="cert-list">
            <li>Python Programming Fundamentals – Duke University</li>
            <li>Full Stack Web Development – Pregrad</li>
            <li>Web Dev Bootcamp – Dr. Angela Yu</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
