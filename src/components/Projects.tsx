
function Projects() {
  const projects = [
    {
      title: "CleanSync",
      description:
        "A smart garbage collection management system with mobile app features.",
      technologies: "React Native, JavaScript, Node.js, Express.js, PostgreSQL"
    },
    {
      title: "Expense Tracker",
      description:
        "A simple, responsive expense tracker built with vanilla JavaScript, Chart.js, and localStorage.",
      technologies: "Vanilla JavaScript, Chart.js, HTML, CSS"
    },
    {
      title: "Weather App",
      description:
        "A simple weather app that shows current conditions and a 7-day forecast for any city.",
      technologies: "JavaScript, HTML, CSS, OpenWeatherMap API"
    }
  ]

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>

      <p className="projects-description">
        Here are some projects I have worked on.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <h4>Technologies Used</h4>
            <span>{project.technologies}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
