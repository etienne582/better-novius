// Get Email from chrome extension panel
const myEmail = "email@from";

function fillAndSubmitLogin() {
    const form = document.querySelector("#loginForm");

    const emailInput = document.querySelector("#login");
    emailInput.value = myEmail;

    // Trigger the existing onsubmit handler
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
}
fillAndSubmitLogin();
// Wait until DOM is ready
document.addEventListener("load", fillAndSubmitLogin);
