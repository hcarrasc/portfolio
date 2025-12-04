declare global {
    interface Window {
        gtag: (
            command: string,
            eventName: string,
            params?: Record<string, string | number | boolean>,
        ) => void;
    }
}

export function sendGaEvent(eventName: string, params = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
}
