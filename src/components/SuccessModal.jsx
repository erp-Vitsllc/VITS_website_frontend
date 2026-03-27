import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose, recipientEmail }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay">
                    <motion.div 
                        className="shadcn-modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={20} />
                        </button>

                        <div className="modal-content-center">
                            <div className="status-icon-wrapper">
                                <CheckCircle2 size={48} className="success-icon" />
                            </div>
                            
                            <h2 className="modal-title">THANK YOU FOR REACHING OUT</h2>
                            <p className="modal-message">
                                Our team will review your inquiry and get back to you shortly.
                            </p>
                            <p className="modal-message">
                                This message was sent to {recipientEmail}.
                            </p>

                            <button className="modal-action-btn" onClick={onClose}>
                                CONTINUE
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
