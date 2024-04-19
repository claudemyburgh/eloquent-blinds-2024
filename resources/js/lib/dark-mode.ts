//@ts-expect-error
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function changeTheme(value: "system" | "dark" | "light" = localStorage.theme): string {
  if (value === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else if (value === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else if (mediaQuery.matches) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
  return localStorage.theme;
}

document.documentElement.setAttribute("data-theme", changeTheme());

//@ts-expect-error
function updateThemeWithoutTransitions(theme?: string) {
  updateTheme(theme);
  document.documentElement.classList.add("[&_*]:!transition-none");
  document.documentElement.addEventListener("transitionend", () => {
    document.documentElement.classList.remove("[&_*]:!transition-none");
  }, {once: true});
}

document.querySelectorAll("[data-theme-value]")?.forEach((button: any) => {
  button.addEventListener("click", () => {
    changeTheme(button.dataset.themeValue);
  });
});
