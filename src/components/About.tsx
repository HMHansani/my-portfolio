
function About() {
  return (
    <section id="about" className="about">
      <h1>About Me</h1>

      <div className="about-container">
        <div className="about-image">
          <img src="/Profile.jpeg" alt="My Profile" />
        </div>

        <div className="about-content">
          <h2>Hello, I'm Dinushi!</h2>

          <p>
            I'm a passionate Software Developer interested
            in creating modern websites and applications.
          </p>

          <p>
            I enjoy learning new technologies, solving
            problems, and developing creative solutions.
          </p>

          <h3>My Interests</h3>

          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Problem Solving</li>
          </ul>

        <a
            href="/Dinushi_CV.pdf"
            download="Dinushi_Hansani_CV.pdf"
            className="download-cv-btn"
        >
            Download CV
        </a>
        </div>
      </div>
    </section>
  )
}

export default About
