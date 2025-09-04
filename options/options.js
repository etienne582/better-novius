const ext = typeof browser !== "undefined" ? browser : chrome;

const emailInput = document.getElementById("email");
const saveButton = document.getElementById("save");

// Save email when clicking save
saveButton.addEventListener("click", () => {
    const userEmail = emailInput.value.trim();
    ext.storage.sync.set({ userEmail });
});

// Load saved email on page load
ext.storage.sync.get("userEmail").then(data => {
    if (data.userEmail) {
        emailInput.value = data.userEmail;
    }
});
