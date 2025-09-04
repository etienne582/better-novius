const ext = typeof browser !== "undefined" ? browser : chrome;

/** Récupère l'email de l'utilsateur et clic sur le bouton de login */
function fillAndSubmitLogin() {
    const form = document.querySelector("#loginForm");
    const emailInput = document.querySelector("#login");

    ext.storage.sync.get("userEmail").then(data => {
        if (data.userEmail) {
            emailInput.value = data.userEmail;
            form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
        } else {
            alert("Please set your email in the extension options.");
        }
    });
}
fillAndSubmitLogin();
