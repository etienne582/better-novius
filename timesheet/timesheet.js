/**
 * Create and append an <i> icon to a given element.
 * @param {HTMLElement} target - The element to append the icon to.
 * @param {string} faIcon - FontAwesome icon class (e.g. "fa-comment", "fa-car-side").
 * @param {string} title - Tooltip text for the icon.
 * @param {Function} onclick - A callback function or JS code string.
 */
function addIcon(target, faIcon, title, onclick) {
    const icon = document.createElement("i");
    icon.className = `icsTis fa ${faIcon} fa-fw fa-gray`;
    icon.title = title;
    icon.addEventListener("click", onclick);
    target.appendChild(icon);
}

/**
 * Append a button container to parent td of the yellow input
 * @param {HTMLElement} target - The element to add the style to.
 */
function addButtonContainer(target) {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.marginTop = "10px";
    target.appendChild(container);
    return container;
}

/**
 * Function called when clicking on the copy button
 * @param {HTMLElement} parentTd - Parent of the custom buttons
 */
function callbackCopyButton(parentTd) {
    const tr = parentTd.closest("tr");
    // Find the project input inside the same row
    const input = tr.querySelector('input[id^="comboprj_"]');
    // Copy the value to clipboard
    navigator.clipboard.writeText(input.value);
}

/**
 * Function called when clicking on the fill week button
 * @param {HTMLElement} parentTd
 */
function callbackFillWeekButton(parentTd) {
    const tr = parentTd.closest("tr");
    // Find the project input inside the same row
    const input = tr.querySelector('input[id^="comboprj_"]');
    // Line index is the last character of the input id
    const lineIndex = input.id.slice(-1);
    // Select all working days of week
    const selectsOfWeek = document.querySelectorAll(
        `select[name^="plt_"][name$="_${lineIndex}"]:not(.number-grey-small)`
    );
    // 8.0 On all working days
    selectsOfWeek.forEach(select => (select.value = "8.0"));
    // Click the update button
    const updateButton = document.querySelector('.x-panel-footer button[type="button"]');
    updateButton.click();
}

/**
 * Add custom buttons to each line
 */
document.querySelectorAll('input[name^="total_days_" i]').forEach(el => {
    const parentTd = el.closest("td");
    if (parentTd) {
        const iconContainer = addButtonContainer(parentTd);
        addIcon(iconContainer, "fa-copy", "Copier le code du projet", () => callbackCopyButton(parentTd));
        addIcon(iconContainer, "fa-calendar-check", "Remplir la semaine", () => callbackFillWeekButton(parentTd));
    }
});
