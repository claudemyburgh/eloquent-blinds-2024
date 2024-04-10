import React, {useState} from "react"
import uuid from "lodash/uniqueId"
import {router} from "@inertiajs/react"
import {ProgressBar, UploadCard} from "@/dashboard/Components/Upload"

interface ImageProps {
  model: any
  namedRoute: string
}

interface ProgressProps {
  loaded: number
  total: number
  progress: number
  bytes: number
  rate: number
  estimate: number
  event: {
    isTrusted: boolean
  }
  upload: boolean
  percentage: number
}

const ImageUpload = ({model, namedRoute}: ImageProps) => {
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
    let i, file
    for (i = 0; i < files.length; i++) {
      file = files[i]
      upload(file)
    }
  }

  function upload(file: any) {
    let fileObject = generateFileObject(file)
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
          className={`relative transition my-6 border border-dashed border-gray-500 dark:border-gray-200 min-h-[160px] rounded-lg text-gray-700 dark:text-gray-200
                ${isDragOver ? "opacity-100 border-primary-700 shadow-lg shadow-primary-700/10 cursor-grabbing" : "opacity-70 border-gray-500 dark:border-gray-200"}
                `}
          onDrag={handleDrag}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnter={handleDragEnter}
        >
          <label
            htmlFor={`image`}
            className={`absolute inset-0 flex items-center justify-center rounded-lg flex-col space-y-2 tracking-wide
                        ${isDragOver ? " cursor-grabbing" : "cursor-pointer"}
                    `}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
                <path
                  fillRule="evenodd"
                  d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <strong>Drop file to upload</strong> or <u>click to select</u>
            </span>
          </label>
          <input onChange={handleChange} className={`sr-only`} type="file" multiple name="image[]" id="image"/>
        </div>
        <ProgressBar percentage={progress.percentage}/>

        {model?.media && (
          <div className={`grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 `}>
            {model.media.map((image: any) => (
              <UploadCard key={image.uuid} file={image}/>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ImageUpload
