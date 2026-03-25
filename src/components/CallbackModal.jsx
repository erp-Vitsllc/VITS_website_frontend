import React from 'react';
import { X } from 'lucide-react';

const CallbackModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Callback Request Submitted');
        onClose();
    };

    return (
        <div className="callback-modal-overlay" onClick={onClose}>
            <div className="callback-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <X size={24} />
                </button>
                
                <h2 className="modal-title">REQUEST A CALLBACK</h2>
                
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-row full-width">
                        <input type="text" placeholder="Name" required className="modal-input" />
                    </div>
                    
                    <div className="form-row split">
                        <input type="text" placeholder="Designation" required className="modal-input" />
                        <input type="text" placeholder="Company" required className="modal-input" />
                    </div>
                    
                    <div className="form-row split">
                        <input type="tel" placeholder="Phone" required className="modal-input" />
                        <input type="email" placeholder="Email" required className="modal-input" />
                    </div>
                    
                    <div className="form-row full-width">
                        <textarea placeholder="Message" className="modal-textarea" rows="4"></textarea>
                    </div>
                    
                    <button type="submit" className="modal-submit-btn">
                        SUBMIT REQUEST
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CallbackModal;
