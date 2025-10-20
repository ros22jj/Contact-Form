import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const validateEmail = (email) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, subject, message } = formData;

    if (!fullName || !email || !subject || !message) {
      setStatusMsg('Please fill all fields!');
      return;
    }
    if (!validateEmail(email)) {
      setStatusMsg('Please enter a valid email!');
      return;
    }

    setStatusMsg('Message sent successfully!');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  }

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <motion.div whileFocus={{ scale: 1.02 }} className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            placeholder="Your Name"
            required
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="you@example.com"
            required
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="form-group">
          <label>Subject</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            placeholder="Subject"
            required
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="form-group">
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Write your message..."
            required
          ></textarea>
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="submit-btn" 
          type="submit"
        >
          Send Message
        </motion.button>

        <p className="status-msg">{statusMsg}</p>
      </form>
    </motion.div>
  );
}

export default ContactForm;
