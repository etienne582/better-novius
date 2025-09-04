// All resources to inject
const resources = {
    js: [chrome.runtime.getURL("timesheet/timesheet.js")],
    css: [chrome.runtime.getURL("timesheet/timesheet.css")]
};

// Observe iframes being added dynamically
const observer = new MutationObserver(() => window.injector.injectIntoIframes(resources));
observer.observe(document.body, { childList: true, subtree: true });
