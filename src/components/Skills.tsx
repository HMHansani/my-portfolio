
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Java",
    "Python",
    "MySQL",
    "PostgreSQL",
    "Git & GitHub"
  ]

  return (
    <section className="skills" id="skills">
      <h1>My Skills</h1>

      <p className="skills-description">
        These are the technologies and tools I use
        to develop websites and applications.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
