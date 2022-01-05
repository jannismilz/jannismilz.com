export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', `'G-${process.env.google_analytics}'`, {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}