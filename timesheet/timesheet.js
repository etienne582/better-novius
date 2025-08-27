/**
 * Create and append an <i> icon to a given element.
 * @param {HTMLElement} target - The element to append the icon to.
 * @param {string} faIcon - FontAwesome icon class (e.g. "fa-comment", "fa-car-side").
 * @param {Function} onclick - A callback function or JS code string.
 */
function addIcon(target, faIcon, onclick) {
    const icon = document.createElement("i");

    icon.className = `icsTis fa ${faIcon} fa-fw fa-gray`;

    icon.addEventListener("click", onclick);

    icon.setAttribute("border", "0"); // mimic original
    target.appendChild(icon);
}

/**
 * Append a button container to parent td of the yellow input
 * @param {HTMLElement} target - The element to add the style to.
 */
function addButtonContainer(target) {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "10px";
    container.style.marginTop = "10px";
    target.appendChild(container);
    return container;
}

document.querySelectorAll('input[name^="total_days_" i]').forEach((el) => {
    const parentTd = el.closest("td");
    // Mettre du flex sur le parent
    if (parentTd) {
        const iconContainer = addButtonContainer(parentTd);
        // Bouton "Copier le projet"
        addIcon(iconContainer, "fa-copy", () => {
            const tr = parentTd.closest("tr");
            // Find the project input inside the same row
            const input = tr.querySelector('input[id^="comboprj_"]');
            const value = input.value;
            navigator.clipboard.writeText(value);
        });
        // TODO: Ajouter un bouton "Remplir la semaine"
    }
});
