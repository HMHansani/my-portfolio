
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    setIsSending(true)
    setStatus('')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('Message sent successfully!')
      form.current.reset()
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('Failed to send message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

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
            <strong>Email:</strong>{' '}
            <a href="mailto:dinushipriyahansani3@gmail.com">
              dinushipriyahansani3@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+94741763530">
              +94 74 176 3530
            </a>
          </p>

          <p>
            <strong>Location:</strong> Sri Lanka
          </p>

          <p>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/HMHansani"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My GitHub
            </a>
          </p>
        </div>

        <form
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />

          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
