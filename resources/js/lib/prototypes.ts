export {}

declare global {
    interface Number {
        formatBytes(): string
    }

    interface String {
        cleanUrl(): string

        unSlug(): string

        capitalize(): string
    }
}

/**
 * Formats the number in bytes to a human-readable string representation with appropriate units.
 *
 * @return {string} The formatted bytes with units.
 */
Number.prototype.formatBytes = function (this: number): string {
    let units: string[] = ["B", "KB", "MB", "GB", "TB"]
    let bytes: number = this
    let i: number

    for (i = 0; bytes >= 1024 && i < 4; i++) {
        bytes /= 1024
    }
    return bytes.toFixed(2) + units[i]
}

/**
 * Removes any query parameters from the URL string.
 *
 * @return {string} The URL string without query parameters.
 */
String.prototype.cleanUrl = function (this: string): string {
    return this.replace(/\?.+/, "")
}

/**
 * Replaces underscores and hyphens in a string with spaces.
 *
 * @return {string} The modified string with spaces instead of underscores and hyphens.
 */
String.prototype.unSlug = function (this: string): string {
    return this.replace(/[_-]/g, " ")
}

/**
 * Capitalizes the first letter of the string.
 *
 * @return {string} The string with the first letter capitalized.
 */
String.prototype.capitalize = function (this: string): string {
    return this.toLowerCase().replace(/\w/, (first) => first.toUpperCase())
}

interface Array<T> {
    shuffle(): T[]
}

/**
 * Shuffle the elements of the array in place.
 *
 * @template T
 * @returns {T[]} A new array with the elements shuffled.
 */
//@ts-expect-error
Array.prototype.shuffle = function <T>(): T[] {
    // Create a new array based on the current array
    const newArray = [...this as T[]]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) // Generate a random index within the remaining unshuffled elements
            // Swap elements at indices i and j
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i] as T]
    }
    return newArray
}
