function injectCSS(doc, url) {
    if (!doc.querySelector(`link[href="${url}"]`)) {
        const link = doc.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        doc.head.appendChild(link);
    }
}

function injectJS(doc, url) {
    if (!doc.querySelector(`script[src="${url}"]`)) {
        const script = doc.createElement("script");
        script.src = url;
        script.type = "text/javascript";
        doc.head.appendChild(script);
    }
}

function injectResources(doc, resources = { css: [], js: [] }) {
    resources.js.forEach(url => injectJS(doc, url));
    resources.css.forEach(url => injectCSS(doc, url));
}

// Inject into all iframes after they load
function injectIntoIframes(resources = { css: [], js: [] }) {
    document.querySelectorAll("iframe").forEach(iframe => {
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (doc) {
                injectResources(doc, resources);
            }
        } catch (e) {
            // Cross-origin iframe → can't access
        }
    });
}

window.injector = { injectIntoIframes };
