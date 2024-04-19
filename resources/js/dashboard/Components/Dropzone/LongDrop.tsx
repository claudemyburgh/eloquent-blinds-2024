import React, { useEffect, useState } from "react"
import { router } from "@inertiajs/react"

function convertedImage(
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

function LongDrop({ model, namedRoute }: any) {
  const [files, setFiles] = useState(model.media)

  const handleDelete = (file: any) => {
    const data = router.delete(route("dashboard.media.delete", file.uuid))
    files.filter((f: any) => f.id === file.id)
    console.log(data)
  }

  const thumbs = files.map((file: any) => (
    <div className={`relative p-2`} key={file.name}>
      <img
        alt={`preview`}
        src={convertedImage(file.original_url, "small")}
        className={`inline-flex aspect-square size-full rounded border border-primary-500 p-2`}
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
      <button onClick={() => handleDelete(file)} className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-red-500 font-bold text-white">
        &#x2715;
      </button>
    </div>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <div>
      <div className="grid grid-cols-8 gap-6">{thumbs}</div>

      <pre>{JSON.stringify(files, null, 4)}</pre>
    </div>
  )
}

export default LongDrop
