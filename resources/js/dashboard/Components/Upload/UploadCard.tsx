import React, { FC } from "react"
import "@/lib/prototypes"
import { Link } from "@inertiajs/react"
import { bytesFormat } from "@/lib/helpers"

interface FileProps {
  file: {
    id?: number
    model_type?: string
    model_id?: number
    uuid?: number
    collection_name?: string
    name: string
    file_name?: string
    mime_type?: string
    disk?: string
    conversions_disk?: string
    size: number
    order_column?: number
    original_url?: string
    preview_url?: string
    created_at?: string
    updated_at?: string
  }
}

const UploadCard: FC<FileProps> = ({ file, ...props }) => {
  return (
    <div {...props} className={`rounded-xl border border-gray-300 bg-gray-100 p-2 text-gray-800 dark:border-gray-800  dark:bg-gray-900 dark:text-gray-100`}>
      <div className="flex space-x-2.5">
        <div className={`h-14 w-14 flex-shrink-0 rounded bg-black `}>
          <img className={`aspect-square rounded`} src={file.original_url} alt={file.name} />
        </div>
        <div className="flex flex-shrink flex-col items-start justify-center text-xs">
          <div>{file.name}</div>
          {/*<div>Size: {bytesFormat(file.size)}</div>*/}
          <div>Size: {file.size.formatBytes()}</div>

          <Link as={`button`} method={`delete`} className={`text-primary-500 underline hover:text-primary-700`} href={route("dashboard.media.delete", file.uuid)}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UploadCard
