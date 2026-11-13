function Contact() {
  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>

      <p className="contact-description">
        Feel free to contact me. I'd love to hear from you!
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:dinushipriyahansani3@gmail.com">
              dinushipriyahansani3@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+94741763530">
              +94 74 176 3530
            </a>
          </p>

          <p>
            <strong>Location:</strong> Sri Lanka
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/HMHansani"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My GitHub
            </a>
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact