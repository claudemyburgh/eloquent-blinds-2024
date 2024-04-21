import Fuse from "fuse.js"

interface Product {
  title: string
  category: string
  url: string
}

const searchModalButton = document.getElementById("search-modal") as HTMLButtonElement | null
const searchDialog = document.getElementById("search-dialog") as HTMLDialogElement | null
const searchInput = document.getElementById("search-input") as HTMLInputElement | null

const searchResults = document.querySelector("#search-results") as HTMLElement
let focusedIndex = -1

searchDialog?.addEventListener("close", function () {
  focusedIndex = -1
})

searchDialog?.addEventListener("click", function (event: any) {
  if (event.target === searchDialog) {
    searchDialog?.close()
  }
})

document.addEventListener("keydown", (e: KeyboardEvent) => {
  // e.preventDefault()
  if (e.ctrlKey && e.keyCode === 191) {
    if (searchDialog) {
      searchDialog.showModal()
    }
  }
})

searchModalButton?.addEventListener("click", function () {
  if (searchDialog) {
    searchDialog.showModal()
  }
})

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("/api/search")
    if (!res.ok) throw new Error(res.statusText)
    return await res.json()
  } catch (error: any) {
    return error.message
  }
}

//@ts-expect-error
async function retrieveSearchResults(query: string): Promise<Fuse.FuseResult<Product>[]> {
  const posts = await getProducts()
  //@ts-expect-error
  const fuse = new Fuse(posts.data, {
    keys: ["title", "category"],
    includeScore: true,
    shouldSort: true,
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.3,
  })

  return fuse.search(query)
}

//@ts-expect-error
function generatePostHTML(product: Fuse.FuseResult<Product>): string {
  return `
      <a href="${product.item.url}"  role="menuitem" class="border text-gray-700 m-2  border-gray-800 p-2 rounded-md flex flex-col dark:text-white hover:text-white focus:text-white hover:bg-primary-500 focus:bg-primary-500 ">
          <span>${product.item.title}</span>
          <small>
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="h-2.5 w-3 -translate-y-0.5  inline-block mr-1" viewBox="0 0 19 19">
                <path fill="currentColor" d="m18.7 12.7-6 6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l4.3-4.3H.3c-.2 0-.3-.1-.3-.3V1c0-.6.4-1 1-1s1 .4 1 1v9.7c0 .2.1.3.3.3h13.3l-4.3-4.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4z"/>
              </svg>
          in category: ${product.item.category}
          </small>
      </a>
  `
}

searchInput?.addEventListener("input", async (e: Event) => {
  const inputElement = e.target as HTMLInputElement
  const query = inputElement.value

  if (query.length >= 3) {
    const postsToDisplay = await retrieveSearchResults(query)
    searchResults.innerHTML = postsToDisplay.length > 0 ? postsToDisplay.map(generatePostHTML).join("") : `<p class="text-gray-700 dark:text-white p-4">No results found</p>`
    focusedIndex = -1 // Reset focused index
    searchResults.classList.add("pb-2")
  } else {
    searchResults.innerHTML = ""
    searchResults.classList.remove("pb-2")
  }
})

searchInput?.addEventListener("keydown", (e) => {
  if (searchResults.children.length > 0) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      focusedIndex = Math.min(focusedIndex + 1, searchResults.children.length - 1)
      ;(searchResults.children[focusedIndex] as HTMLElement)?.focus()
    }
  }
})
