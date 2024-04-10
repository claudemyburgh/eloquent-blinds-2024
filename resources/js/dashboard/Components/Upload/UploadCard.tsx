import React, {FC} from "react"
import "@/lib/prototypes"
import {Link} from "@inertiajs/react"
import {bytesFormat} from "@/lib/helpers"

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

const UploadCard: FC<FileProps> = ({file, ...props}) => {
  return (
    <div {...props} className={`bg-gray-100 dark:bg-gray-900 dark:text-gray-100 text-gray-800 border border-gray-300 dark:border-gray-800  rounded-xl p-2`}>
      <div className="flex space-x-2.5">
        <div className={`h-14 w-14 rounded bg-black flex-shrink-0 `}>
          <img className={`aspect-square rounded`} src={file.original_url} alt={file.name}/>
        </div>
        <div className="flex-shrink flex-col flex items-start justify-center text-xs">
          <div>{file.name}</div>
          {/*<div>Size: {file.size}</div>*/}
          <div>Size: {bytesFormat(file.size)}</div>
          {/*<div>Size: {file.size.formatBytes()}</div>*/}

          <Link as={`button`} method={`delete`} className={`underline hover:text-primary-700 text-primary-500`} href={route("dashboard.media.delete", file.uuid)}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UploadCard
