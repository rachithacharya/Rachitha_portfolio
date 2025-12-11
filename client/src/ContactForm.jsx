import React, { useRef, useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');

    // Get form data
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      // Send to Node.js backend
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Message sent successfully! 🎉');
        form.current.reset();
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus(result.message || 'Failed to send message. Please try again. ❌');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        setStatus('Cannot connect to server. Please make sure the backend server is running on port 3001. ❌');
      } else {
        setStatus('Failed to send message. Please try again. ❌');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h2>Get In Touch</h2>
          <p>Fill out the form below and I'll get back to you soon!</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">
              <i className="fas fa-user"></i> Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">
              <i className="fas fa-envelope"></i> Your Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              <i className="fas fa-tag"></i> Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your message"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <i className="fas fa-comment-dots"></i> Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or question..."
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Send Message
              </>
            )}
          </button>
          {status && (
            <div className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
