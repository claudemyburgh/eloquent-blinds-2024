import slugify from "slugify"

export function unSlug(value: string) {
    return value.replace(/[_-]/g, " ")
}

export function cleanUrl(url: string) {
    return url.replace(/\?.+/, "")
}

export function slugIt(value: string) {
    if (value?.charAt(value?.length - 1) == " ") return value
    return slugify(value, {lower: true})
}

export function fullUrl(url: string): string {
    return `${import.meta.env.APP_URL}/${url}`
}

export function bytesFormat(value: number): string {
    let units: string[] = ["B", "KB", "MB", "GB", "TB"]
    let bytes: number = value
    let i: number

    for (i = 0; bytes >= 1024 && i < 4; i++) {
        bytes /= 1024
    }
    return bytes.toFixed(2) + units[i]
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export function convertedImage(
    url: string,
    type?: "tiny" | "thumb" | "small" | "medium" | "large" | "tail" | "card" | "screen",
    extension: string = "webp",
    fallbackImageUrl: string = "/img/placeholder.webp"
) {
    const regex = /([^/]+)\.[^.]+$/
    const hasImage = regex.test(url)

    if (hasImage) {
        return url.replace(regex, `conversions/$1-${type}.${extension}`)
    } else {
        return fallbackImageUrl
    }
}
