const cssFile = chrome.runtime.getURL("timesheet/timesheet.css");

function injectCSS(doc) {
    const link = doc.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssFile;
    doc.head.appendChild(link);
}

// Inject into all iframes after they load
function injectIntoIframes() {
    document.querySelectorAll("iframe").forEach(iframe => {
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (doc && !doc.querySelector(`link[href="${cssFile}"]`)) {
                injectCSS(doc);
            }
        } catch (e) {
            // Cross-origin iframe → can't access
        }
    });
}

// Run once DOM is ready (voir si on a vraiment besoin vu que y'a des iframe partout ...)
document.addEventListener("load", injectIntoIframes);

// Also observe future iframes being added dynamically
const observer = new MutationObserver(injectIntoIframes);
observer.observe(document.body, { childList: true, subtree: true });
