/**
 * URLs for POST /api/contact.
 * When the site is opened on localhost, always use same-origin /api/contact so Vite's proxy
 * talks to the backend — avoids browser CORS when VITE_API_URL points at :5005.
 */
export function getContactPostUrls() {
    if (typeof window !== 'undefined') {
        const h = window.location.hostname;
        if (
            h === 'localhost' ||
            h === '127.0.0.1' ||
            h === '[::1]' ||
            h === '::1'
        ) {
            return ['/api/contact'];
        }
    }

    const base = import.meta.env.VITE_API_URL;
    if (base) {
        return [`${String(base).replace(/\/$/, '')}/api/contact`];
    }

    return ['/api/contact'];
}
