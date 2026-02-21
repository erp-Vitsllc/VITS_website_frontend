import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = ({ config }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-form-container">
            <div className="contact-grid">
                <div className="contact-info-side">
                    <h3 className="contact-info-title">Global Presence</h3>
                    <p className="contact-info-text">
                        Connect with our global offices to explore how we can help your business thrive in the digital age.
                    </p>

                    <div className="contact-details-list">
                        <div className="contact-detail-item">
                            <div className="detail-icon"><MapPin size={20} /></div>
                            <div className="detail-text">
                                <strong>Headquarters</strong>
                                <p>Office 1205, Aspect Tower, Business Bay, Dubai, UAE</p>
                            </div>
                        </div>

                        <div className="contact-detail-item">
                            <div className="detail-icon"><Phone size={20} /></div>
                            <div className="detail-text">
                                <strong>Phone</strong>
                                <p>{config.contact.phone1}</p>
                                <p>{config.contact.phone2}</p>
                            </div>
                        </div>

                        <div className="contact-detail-item">
                            <div className="detail-icon"><Mail size={20} /></div>
                            <div className="detail-text">
                                <strong>Email</strong>
                                <p>{config.contact.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-side">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="YOUR NAME"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="YOUR EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="SUBJECT"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="YOUR MESSAGE"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="contact-submit-btn">
                            SEND MESSAGE <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
