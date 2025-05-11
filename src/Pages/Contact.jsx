import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_z3670o5',
        'template_ywazm7m',
        formData,
        'eEDWITz4RsqkbfE_Q'
      )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-wrapper">
      {/* Left side - Image + Description */}
      <div className="contact-info fade-in-left">
      <h2>Contact Us</h2>
        {/* <img
          src="https://source.unsplash.com/400x300/?teamwork,communication"
          alt="Contact visual"
        /> */}
        <p>
          Have an idea or a project? Let’s bring it to life! We typically reply within a few hours.
        </p>
      </div>

      {/* Right side - Contact Form */}
      <div className="contact-form-container fade-in-right">
        
        <p>We'd love to hear what you need. Just drop your details below.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">What services do you need?</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
