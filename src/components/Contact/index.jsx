
import { useState } from 'react'
import { FaInstagram, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './index.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 3000) // Hide after 3s
  }

  return (
    <div className="contact-section" id="contact">
        {submitted && (
        <div className="alert-banner">
          ✅ Your message has been submitted successfully!
        </div>
      )}
      <h2 className='skills-heading' data-aos="fade-right" data-aos-delay="100">Contact</h2>
      <p className="skills-tagline" data-aos="fade-right" data-aos-delay="400">
        Open to opportunities, collaborations & coffee ☕😉
      </p>
      <div className='form-contact-card'>
        <form className="contact-form" data-aos="fade-up" data-aos-delay="500" onSubmit={handleSubmit}>
            <input value={name} type="text" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} />
            <input value={email} type="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />
            <textarea value={message} placeholder="Your Message" rows="5" required onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit">Send Message</button>
        </form>
        <div className="contact-icons" data-aos="fade-up" data-aos-delay="200">
            <a  target="_blank" rel="noreferrer">
                <div className='icon-card'>
                    <FaEnvelope />
                    <p>rakeshperla1612@gmail.com </p>
                </div>
            </a>
            <a target="_blank" rel="noreferrer">
                <div className='icon-card'>
                    <FaPhone />
                    <p>+91 75699XXXXX </p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/rakeshperla216/" target="_blank" rel="noreferrer">
                <div className='icon-card'>
                    <FaLinkedin />
                    <p>linkedin.com/rakesh perla</p>
                </div>
            </a>
            <a href="https://github.com/Rakesh-Perla" target="_blank" rel="noreferrer">
                <div className='icon-card'>
                    <FaGithub />
                    <p>github.com/rakesh-perla </p>
                </div>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <div className='icon-card'>
                    <FaInstagram />
                    <p>instagram/Mr_Rakesh</p>
                </div>
            </a>
        </div>
    </div>
    <h5 className='copyright'>Rakesh Perla</h5>
    <p className='copyrightp'>© 2025 Rakesh. All rights reserved.</p>
    </div>
  );
};

export default Contact;
