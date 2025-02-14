import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ContactUs.css';
import '../styles/global.css';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="hero-contact">
          <h1>CONNECT WITH US</h1>
          <p>We’re here to assist you—reach out for reservations, inquiries, or feedback.</p>
        </section>

        <section className="contact-details-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions? Want to book a table? Let’s talk!</p>
            <div className="info-box">
              <p><b>📍 Address:</b> #456, Blue Street, Bangalore - 560001, Karnataka, India</p>
              <p><b>📞 Phone:</b> +91 9876543210</p>
              <p><b>✉️ Email:</b> azurebites@gmail.com</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea placeholder="Your Message" className="form-textarea"></textarea>
              <button type="submit" className="form-button">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;