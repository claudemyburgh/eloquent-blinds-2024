import React, {FC, useState} from "react"
import {Link, usePage} from "@inertiajs/react"
import {cleanUrl} from "@/lib/helpers"
import {CheckIcon, EyeIcon, PencilSquareIcon, TrashIcon, XMarkIcon} from "@heroicons/react/24/solid";

const DatatableAction: FC<{ id: any; deletion: boolean; name: string }> = ({id, deletion, name}) => {
  const {url} = usePage()

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={`flex space-x-5 relative items-center`}>
      {!open ? (
        <>
          {deletion && (
            <button type={`button`} onClick={(e) => setOpen(!open)}>
              <TrashIcon className={`w-5 h-5 text-rose-500`}/>
            </button>
          )}
          {name === "messages" ? (
            <Link className={`flex items-center text-xs space-x-2 bg-primary-600 text-white px-2 py-1 rounded`} type={`button`} href={`${cleanUrl(url)}/${id}`}>
              <span>View</span>
              <EyeIcon className={`w-5 h-5 text-gray-400`}/>
            </Link>
          ) : (
            <Link type={`button`} href={`${cleanUrl(url)}/${id}/edit`}>
              <PencilSquareIcon className={`w-5 h-5 text-gray-400`}/>
            </Link>
          )}
        </>
      ) : (
        <div className="flex space-x-1">
          <Link
            preserveScroll={true}
            preserveState={false}
            method={`delete`}
            onSuccess={() => {

              // toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Deleted successfully`} icon={`check`}/>)
            }}
            href={`${cleanUrl(url)}/${id}`}
            as={`button`}
            className={`text-green-500 bg-gray-900/75 p-1 rounded`}
          >
            <CheckIcon className={`w-5 h-5`}/>
          </Link>
          <button className={`text-red-500 bg-gray-900/75 p-1 rounded`} type={`button`} onClick={(e) => setOpen(!open)}>
            <XMarkIcon className={`w-5 h-5`}/>
          </button>
        </div>
      )}
    </div>
  )
}

export default DatatableAction
