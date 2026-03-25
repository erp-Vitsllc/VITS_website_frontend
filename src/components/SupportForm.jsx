import React, { useState } from 'react';

const SupportForm = () => {
    const [activeTab, setActiveTab] = useState('SUPPORT');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        acceptedTerms: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
    };

    const linePattern = "/assets/Lines-3.webp";

    return (
        <section className="support-form-section">
            <div className="leadership-bg-pattern">
                <img src={linePattern} alt="" />
            </div>

            <div className="support-form-container">
                <div className="support-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'SUPPORT' ? 'active' : ''}`}
                        onClick={() => setActiveTab('SUPPORT')}
                    >
                        SUPPORT
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'NEW ENQUIRY' ? 'active' : ''}`}
                        onClick={() => setActiveTab('NEW ENQUIRY')}
                    >
                        NEW ENQUIRY
                    </button>
                </div>

                <div className="support-content-body">
                    <h2 className="support-main-heading">
                        PLEASE SUBMIT YOUR {activeTab} REQUEST HERE.
                    </h2>
                    <p className="support-subtext">
                        {activeTab === 'SUPPORT' 
                            ? "Please enter your Name, Phone Number, and Email, along with the Subject and a detailed description of your issue. You may also attach reference images (up to 5MB). Our support team will get in touch with you shortly."
                            : "How can we assist you? Please share your requirements, and our sales team will reach out to you as soon as possible. We look forward to serving you."
                        }
                    </p>

                    <form className="vits-contact-form" onSubmit={handleSubmit}>
                        <div className="form-group full-width">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name:" 
                                value={formData.name}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone:" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email:" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder={activeTab === 'SUPPORT' ? "Issue:" : "Your Requirement:"} 
                                value={formData.subject}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div className="form-group full-width">
                            <textarea 
                                name="message" 
                                rows="6" 
                                placeholder={activeTab === 'SUPPORT' ? "Describe your Issue:" : "Describe your Requirement:"}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>

                        {activeTab === 'SUPPORT' && (
                            <div className="form-group full-width">
                                <input type="file" className="file-input" />
                            </div>
                        )}

                        <div className="terms-checkbox">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                name="acceptedTerms"
                                checked={formData.acceptedTerms}
                                onChange={handleInputChange}
                                required 
                            />
                            <label htmlFor="terms">
                                YES, I ACCEPT TO RECEIVE PRODUCT NEWS AND OTHER UPDATES FROM VITS VIA EMAIL. BY CHECKING THIS BOX, I CONFIRM THAT I HAVE READ AND AGREED TO THE PRIVACY POLICY.
                            </label>
                        </div>

                        <button type="submit" className="vits-submit-btn">
                            SUBMIT FORM
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SupportForm;
