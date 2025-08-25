document.querySelectorAll("input.number-green").forEach(el => {
    const parentTd = el.closest("td");
    if (parentTd) {
        // TODO: Ajouter un bouton "Copier le projet"
        // TODO: Ajouter un bouton "Remplir la semaine"
        parentTd.style.backgroundColor = "red"; // test action
    }
});
