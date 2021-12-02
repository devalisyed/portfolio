const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

let theme = "light";

themeToggle.addEventListener("click", () => {
    if (theme === "light") {
        body.style.background = `var(--color-tertioray)`;
        body.style.transition = `all .5s linear`;
        body.style.color = `var(--color-white)`;
        themeIcon.src = `./icons/theme-light.png`;
        document.documentElement.style.setProperty("--color-primary", "white");
        document.documentElement.style.setProperty("--svg-fill", "white");
        theme = "dark";
    } else {
        body.style.background = `var(--color-white)`;
        body.style.transition = `all .5s linear`;
        body.style.color = `var(--color-tertioray)`;
        themeIcon.src = `./icons/theme-dark.png`;
        document.documentElement.style.setProperty(
            "--color-primary",
            "rgba(25, 25, 25, 0.8)"
        );
        document.documentElement.style.setProperty(
            "--svg-fill",
            "--color-tertioray"
        );
        theme = "light";
    }
});