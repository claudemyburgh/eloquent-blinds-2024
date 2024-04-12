let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

function updateTheme(savedTheme?: string): string {
  let theme = "system"
  try {
    if (typeof window !== "undefined" && !savedTheme) {
      savedTheme = window.localStorage.theme
    }
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
  } catch (error) {
    theme = "light"
    document.documentElement.classList.remove("dark")
  }
  return theme
}


function updateThemeWithoutTransitions(savedTheme?: string) {
  updateTheme(savedTheme)
  document.documentElement.classList.add("[&_*]:!transition-none")
  window.setTimeout(() => {
    document.documentElement.classList.remove("[&_*]:!transition-none")
  }, 0)
}

document.documentElement.setAttribute("data-theme", updateTheme())

new MutationObserver(([{oldValue}]) => {
  let newValue: string | null = document.documentElement.getAttribute("data-theme")
  if (newValue && newValue !== oldValue) {
    try {
      window.localStorage.setItem("theme", newValue)
    } catch (error) {
    }
    updateThemeWithoutTransitions(newValue)
  }
}).observe(document.documentElement, {attributeFilter: ["data-theme"], attributeOldValue: true})

// @ts-expect-error
mediaQuery.addEventListener("change", updateThemeWithoutTransitions)
// @ts-expect-error
window.addEventListener("storage", updateThemeWithoutTransitions)
