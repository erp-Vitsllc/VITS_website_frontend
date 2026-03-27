import os

css_path = r"c:\Users\Vega\Desktop\vits_webpage\src\styles\index.css"
with open(css_path, "a", encoding="utf-8") as f:
    f.write("""
/* Shadcn-inspired Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
}

.shadcn-modal {
    background: white;
    color: #1a1a1a;
    padding: 40px;
    border-radius: 12px;
    width: 90%;
    max-width: 450px;
    position: relative;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.modal-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.modal-close-btn:hover {
    background: #f5f5f5;
    color: #000;
}

.modal-content-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.status-icon-wrapper {
    background: #ecfdf5;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.success-icon {
    color: #10b981;
}

.modal-title {
    font-family: 'Outfit', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;
}

.modal-message {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
}

.modal-footer-msg {
    font-size: 0.85rem;
    color: #9ca3af;
    padding: 15px;
    background: #f9fafb;
    border-radius: 8px;
    margin-top: 10px;
}

.modal-action-btn {
    width: 100%;
    padding: 14px;
    background: #1a1a1a;
    color: white;
    border: none;
    border-radius: 6px;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.modal-action-btn:hover {
    background: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
""")
