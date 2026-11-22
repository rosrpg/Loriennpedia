document.addEventListener("DOMContentLoaded", function() {

    const wiki = document.querySelector(".wiki-lorienn");
    const toggle = document.querySelector("#wiki-theme-toggle");
    const themeText = document.querySelector(".theme-switch-text");

    if (!wiki || !toggle) return;

    // Recuperar el tema guardado
    const savedTheme = localStorage.getItem("wiki-lorienn-theme");

    if (savedTheme === "dark") {
        wiki.setAttribute("data-theme", "dark");
        toggle.checked = true;
        themeText.textContent = "Modo oscuro";
    } else {
        wiki.setAttribute("data-theme", "light");
        toggle.checked = false;
        themeText.textContent = "Modo claro";
    }

    // Cambiar el tema
    toggle.addEventListener("change", function() {

        if (toggle.checked) {

            wiki.setAttribute("data-theme", "dark");
            localStorage.setItem("wiki-lorienn-theme", "dark");
            themeText.textContent = "Modo oscuro";

        } else {

            wiki.setAttribute("data-theme", "light");
            localStorage.setItem("wiki-lorienn-theme", "light");
            themeText.textContent = "Modo claro";

        }

    });

});
