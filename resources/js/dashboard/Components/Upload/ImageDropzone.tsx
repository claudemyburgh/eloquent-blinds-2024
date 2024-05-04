import React, { useState } from "react"
import { ImageProps, ProgressProps } from "@/types/datatable"
import { UploadCard } from "@/dashboard/Components/Upload/index"
import { router } from "@inertiajs/react"
import uuid from "lodash/uniqueId"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"

function ImageDropzone({ model, namedRoute }: ImageProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [imageFiles, setImageFiles] = useState<File[] | null>(null)
  const [progress, setProgress] = useState<ProgressProps>({
    loaded: 0,
    total: 0,
    progress: 0,
    bytes: 0,
    rate: 0,
    estimate: 0,
    event: {
      isTrusted: true,
    },
    upload: false,
    percentage: 0,
  })

  const files: any[] = []

  function handleDrag(e: any) {
    e.preventDefault()
    setIsDragOver(true)
  }

  function handleDragEnter(e: any) {
    e.preventDefault()
    setIsDragOver(true)
  }

  function handleDragOver(e: any) {
    e.preventDefault()
    setIsDragOver(true)
  }

  function handleDragLeave(e: any) {
    e.preventDefault()
    setIsDragOver(false)
  }

  function generateFileObject(file: any) {
    let fileObjectIndex =
      files.push({
        id: uuid(),
        file,
        progress: 0,
        failed: false,
        loadedBytes: 0,
        totalBytes: 0,
        timeStarted: new Date().getTime(),
        secondsRemaining: 0,
        finished: false,
        cancelled: false,
        xhr: null,
      }) - 1
    return files[fileObjectIndex]
  }

  function handleDrop(e: any) {
    e.preventDefault()
    setIsDragOver(false)
    setImageFiles(e.dataTransfer.files)
    addFiles(e.dataTransfer.files)
  }

  function handleChange(e: any) {
    setImageFiles(e.target.files)
    addFiles(e.target.files)
  }

  function addFiles(files: any) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      upload(file)
    }
  }

  function upload(file: any) {
    const fileObject = generateFileObject(file)
    const form = new FormData()
    form.append("id", model.id)
    form.append("image", fileObject.file)

    router.post(route(namedRoute, model), form, {
      forceFormData: false,
      preserveState: true,
      headers: {
        "content-type": "multipart/form-data",
      },
      onProgress: (process: any) => {
        setProgress({
          ...progress,
          ...process,
        })
      },
      onSuccess: () => {
        setTimeout(() => {
          setProgress({
            loaded: 0,
            total: 0,
            progress: 0,
            bytes: 0,
            rate: 0,
            estimate: 0,
            event: {
              isTrusted: true,
            },
            upload: false,
            percentage: 0,
          })
        }, 1000)
      },
    })
  }

  return (
    <>
      <div>
        <div
          className={`relative my-6 min-h-[160px] rounded-lg border border-dashed border-gray-500 transition dark:border-gray-200
                  ${isDragOver ? "cursor-grabbing opacity-100 shadow-lg shadow-gray-500/10" : "border-gray-500 opacity-70 dark:border-gray-200"}
                  `}
          onDrag={handleDrag}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnter={handleDragEnter}
        >
          <label
            htmlFor={`image`}
            className={`absolute inset-0 flex flex-col items-center justify-center space-y-2 rounded-lg tracking-wide
                        ${isDragOver ? " cursor-grabbing" : "cursor-pointer"}
                    `}
          >
            <span>
              <CloudArrowUpIcon className={"size-12"} />
            </span>
            <span>
              <strong>Drop file to upload</strong> or <u>click to select</u>
            </span>
          </label>
          <input onChange={handleChange} className={`sr-only`} type="file" multiple name="image[]" id="image" />
        </div>

        {progress.percentage > 0 && (
          <div className={`flex items-center justify-center pb-4`}>
            <div className="loader"></div>
          </div>
        )}

        {model?.media && (
          <div className={`@container`}>
            <div className={`grid grid-cols-1 gap-4  @lg:grid-cols-2 @lg:gap-6 @xl:grid-cols-3 @xl:gap-8 `}>
              {model.media.map((image: any) => (
                <UploadCard key={image.uuid} file={image} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ImageDropzone
