//@ts-expect-error
let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

function updateTheme(savedTheme: string | undefined) {
  let theme = "system"
  if (savedTheme === "dark") {
    theme = "dark"
    document.documentElement.classList.add("dark")
  } else if (savedTheme === "light") {
    theme = "light"
    document.documentElement.classList.remove("dark")
  } else if (mediaQuery.matches) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
  return theme
}

// @ts-ignore
function updateThemeWithoutTransitions(savedTheme: string | undefined) {
  updateTheme(savedTheme)
  document.documentElement.classList.add("[&_*]:!transition-none")
  window.setTimeout(() => {
    document.documentElement.classList.remove("[&_*]:!transition-none")
  }, 0)
}

//@ts-expect-error
document.documentElement.setAttribute("data-theme", updateTheme())

new MutationObserver(([{ oldValue }]) => {
  let newValue = document.documentElement.getAttribute("data-theme")
  if (newValue && newValue !== oldValue) {
    try {
      localStorage.setItem("theme", newValue)
    } catch (error) {}
    updateThemeWithoutTransitions(newValue)
  }
}).observe(document.documentElement, { attributeFilter: ["data-theme"], attributeOldValue: true })

//@ts-expect-error
mediaQuery.addEventListener("change", updateThemeWithoutTransitions)
//@ts-expect-error
window.addEventListener("storage", updateThemeWithoutTransitions)
