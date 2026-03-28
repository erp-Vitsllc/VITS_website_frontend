import React, { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { getContactPostUrls } from '../utils/contactApi';

const PATH_LABELS = {
    '/': 'Homepage',
    '/about-us': 'About Us',
    '/leadership': 'Leadership',
    '/our-journey': 'Our Journey',
    '/blog': 'Blog',
    '/support': 'Support',
    '/terms': 'Terms of Service',
    '/contact': 'Contact',
    '/subsidiaries': 'Subsidiaries',
    '/iot': 'IoT',
    '/robotics': 'Robotics',
    '/software': 'Software',
    '/elv': 'ELV',
    '/infrastructure': 'Infrastructure',
    '/retail': 'Retail',
    '/real-estate': 'Real Estate',
    '/mining': 'Mining',
    '/manufacturing': 'Manufacturing'
};

function labelFromPath(pathname) {
    if (PATH_LABELS[pathname]) return PATH_LABELS[pathname];
    if (pathname.startsWith('/blog/')) return 'Blog';
    const base = pathname.replace(/^\//, '').split('/')[0];
    if (!base) return 'Website';
    return base
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

/** Same backend mail path as other sales enquiries (plain text). Still delivered to sales@vegadigital.ae. */
function buildEnquiryMessageForCallback(source, rawMessage) {
    const header = `Request a callback from the Vega Digital website.\n\nSource / page: ${source}\n`;
    const trimmed = String(rawMessage || '').trim();
    let body;
    if (trimmed.length >= 10) {
        body = `\nMessage from visitor:\n${trimmed}`;
    } else if (trimmed.length > 0) {
        body = `\nVisitor note: ${trimmed}\n(Please treat this as a callback request.)`;
    } else {
        body = '\nNo additional message — please call back using the contact details in this email.';
    }
    let out = header + body;
    if (out.length < 10) out = out.padEnd(10, '.');
    return out.slice(0, 4000);
}

const CallbackModal = ({ isOpen, onClose, sourceContext: sourceContextProp }) => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        company: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const effectiveSource = useMemo(() => {
        const fromProp = String(sourceContextProp || '').trim();
        if (fromProp) return fromProp.slice(0, 240);
        return labelFromPath(location.pathname);
    }, [sourceContextProp, location.pathname]);

    useEffect(() => {
        if (!isOpen) return;
        setFormData({
            name: '',
            designation: '',
            company: '',
            phone: '',
            email: '',
            message: ''
        });
    }, [isOpen, effectiveSource]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            inquiryType: 'enquiry',
            subject: `Request a callback | ${effectiveSource}`.slice(0, 250),
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            company: formData.company.trim(),
            designation: formData.designation.trim(),
            message: buildEnquiryMessageForCallback(effectiveSource, formData.message)
        };

        const candidateUrls = getContactPostUrls();

        const parseResponsePayload = (text) => {
            if (!text || !text.trim()) return {};
            try {
                return JSON.parse(text);
            } catch {
                return {};
            }
        };

        const messageFromFailedResponse = (response, text) => {
            const data = parseResponsePayload(text);
            if (data.message && String(data.message).trim()) return String(data.message).trim();
            const raw = String(text || '').trim();
            if (raw.startsWith('<')) {
                const m = raw.match(/<title[^>]*>([^<]*)<\/title>/i);
                if (m && m[1]) return `${m[1].trim()} (${response.status}). If this is a proxy error, start the backend on port 5005 or set VITE_DEV_PROXY_TARGET.`;
                return `Non-JSON response (${response.status}). Start the API (backend, default port 5005) or check VITE_DEV_PROXY_TARGET in frontend .env.`;
            }
            const snippet = raw.replace(/\s+/g, ' ').slice(0, 180);
            if (snippet) return snippet;
            return `Server error (${response.status}). Check the browser Network tab and backend terminal logs.`;
        };

        try {
            let lastFetchError;
            let lastHttpMessage = '';

            for (const url of candidateUrls) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    lastFetchError = undefined;

                    const text = await response.text();
                    const data = parseResponsePayload(text);

                    if (response.ok && data.success === true) {
                        if (data.dryRun) {
                            toast.success('Request recorded (dev mode)', {
                                description:
                                    'Backend CONTACT_DRY_RUN is on — no email was sent. Turn it off after SMTP is fixed.'
                            });
                        } else {
                            toast.success('Request sent', {
                                description: 'Our sales team will contact you shortly.'
                            });
                        }
                        onClose();
                        return;
                    }

                    lastHttpMessage =
                        (data && data.message && String(data.message).trim()) ||
                        messageFromFailedResponse(response, text);
                } catch (err) {
                    lastFetchError = err;
                }
            }

            throw lastFetchError || new Error(lastHttpMessage || 'Request failed');
        } catch (error) {
            console.error('Callback submit:', error);
            const msg = error?.message?.trim();
            if (msg && msg !== 'Failed to fetch') {
                toast.error('Could not send request', { description: msg });
            } else {
                toast.error('Backend is not reachable', {
                    description:
                        'Start the API with npm in backend, or set VITE_API_URL in frontend .env'
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="callback-modal-overlay" onClick={onClose}>
            <div className="callback-modal-content" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="modal-close-btn" onClick={onClose}>
                    <X size={24} />
                </button>

                <h2 className="modal-title">REQUEST A CALLBACK</h2>
                <p className="modal-source-hint">{effectiveSource}</p>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-row full-width">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="modal-input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row split">
                        <input
                            type="text"
                            name="designation"
                            placeholder="Designation"
                            required
                            className="modal-input"
                            value={formData.designation}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            required
                            className="modal-input"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row split">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            required
                            className="modal-input"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="modal-input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row full-width">
                        <textarea
                            name="message"
                            placeholder="Message (optional, min. 10 characters if provided)"
                            className="modal-textarea"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="modal-submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'SENDING…' : 'SUBMIT REQUEST'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CallbackModal;
