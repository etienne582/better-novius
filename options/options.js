const emailInput = document.getElementById("email");
const saveButton = document.getElementById("save");

// Load saved email on page load
chrome.storage.sync.get("userEmail", data => {
    if (data.userEmail) {
        emailInput.value = data.userEmail;
    }
});

// Save email when clicking save
saveButton.addEventListener("click", () => {
    const userEmail = emailInput.value.trim();
    chrome.storage.sync.set({ userEmail });
});
