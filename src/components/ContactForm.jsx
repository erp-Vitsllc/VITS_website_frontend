import React, { useState } from 'react';
import { Headset, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { getContactPostUrls } from '../utils/contactApi';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        designation: '',
        company: '',
        message: '',
        acceptTerms: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = {
                inquiryType: 'contact',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                designation: formData.designation,
                message: formData.message
            };

            const candidateUrls = getContactPostUrls();

            let response;
            let lastError;
            let backendMessage = '';

            for (const url of candidateUrls) {
                try {
                    response = await fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload)
                    });

                    if (response.ok) {
                        break;
                    }

                    // Backend is reachable; capture its response message.
                    const errorBody = await response.json().catch(() => null);
                    if (errorBody?.message) {
                        backendMessage = errorBody.message;
                    }
                } catch (err) {
                    lastError = err;
                }
            }

            if (!response || !response.ok) {
                throw lastError || new Error(backendMessage || "Backend setup required");
            }

            const result = await response.json();

            if (result.success === true) {
                toast.success('Form submitted successfully', {
                    description: 'Your request has been received. Our team will contact you shortly.'
                });
                setFormData({
                    name: '', phone: '', email: '', designation: '', 
                    company: '', message: '', acceptTerms: false
                });
            } else {
                throw new Error("Backend setup required");
            }
        } catch (error) {
            console.error("Linkage Error:", error);
            const msg = error?.message?.trim();
            if (msg && msg !== 'Failed to fetch') {
                toast.error('Request failed', {
                    description: msg
                });
            } else {
                toast.error('Backend is not reachable', {
                    description: 'Start it with "npm run dev" in backend, or set VITE_API_URL in frontend .env'
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form-container">
            <div className="contact-grid">
                <div className="contact-info-side">
                    <h2 className="contact-section-title">GET IN TOUCH</h2>

                    <div className="offices-grid">
                        <div className="office-item full-width">
                            <h3>CORPORATE OFFICE</h3>
                            <p>Office 406, Al-Mansour Building</p>
                            <p>Damascus Street, Qusais Ind 2</p>
                            <p>Dubai, UAE</p>
                            <div className="office-contact">
                                <span><Headset size={14} /> +971 4 340 9988</span>
                                <span className="separator">|</span>
                                <span><Mail size={14} /> hello@vegadigital.ae</span>
                            </div>
                        </div>

                        <div className="office-item">
                            <h3>INDIA, BANGALORE</h3>
                            <p>TF01, Golden Square</p>
                            <p>Esteem Mall, Hebbal</p>
                            <p>Bangalore 560092</p>
                            <p>Karnataka, India</p>
                        </div>

                        <div className="office-item">
                            <h3>INDIA, KOCHI</h3>
                            <p>41/1013A, Pullepady Cross Road</p>
                            <p>North Kaloor, Kochi 682035,</p>
                            <p>Kerala, India</p>
                        </div>

                        <div className="office-item">
                            <h3>REPUBLIC OF GUINEA</h3>
                            <p>#606, Feela Residence</p>
                            <p>Commune de Dixin</p>
                            <p>Camayane, Conakry</p>
                            <p>Guinea</p>
                        </div>

                        <div className="office-item">
                            <h3>USA</h3>
                            <p>#633, Unit 1001</p>
                            <p>E Fernhurst, Katy</p>
                            <p>Texas 77450</p>
                            <p>USA</p>
                        </div>

                        <div className="office-item full-width">
                            <h3>ABU DHABI</h3>
                            <p>1st Floor, Office No. 122,</p>
                            <p>Plot No. 22, Sector M 39,</p>
                            <p>Musaffah, Abu Dhabi, UAE</p>
                        </div>
                    </div>
                </div>

                <div className="form-side">
                    <h2 className="contact-section-title">CONNECT WITH US</h2>
                    <form className="vits-contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group full-width">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="designation"
                                    placeholder="Designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group full-width">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div className="terms-checkbox">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="acceptTerms">
                                YES, I ACCEPT TO RECEIVE PRODUCT NEWS AND OTHER UPDATES FROM VITS VIA EMAIL. BY CHECKING THIS BOX, I CONFIRM THAT I HAVE READ AND AGREED TO THE PRIVACY POLICY. *
                            </label>
                        </div>

                        <button type="submit" className="vits-submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default ContactForm;

