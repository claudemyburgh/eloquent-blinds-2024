import React, { FC, useState } from "react"
import { Link, usePage } from "@inertiajs/react"
import { cleanUrl } from "@/lib/helpers"
import { CheckIcon, EyeIcon, PencilSquareIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid"
import toast from "react-hot-toast"
import { ToastItem } from "@/Shared/Components/Alerts"

const DatatableAction: FC<{ id: any; deletion: boolean; name: string; editing: boolean }> = ({ id, deletion, name, editing }) => {
  const { url } = usePage()

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={`relative flex items-center space-x-5`}>
      {!open ? (
        <>
          {deletion && (
            <button type={`button`} onClick={(e) => setOpen(!open)}>
              <TrashIcon className={`h-5 w-5 text-rose-500`} />
            </button>
          )}
          {name === "messages" ? (
            <Link className={`flex items-center space-x-2 rounded bg-primary-600 px-2 py-1 text-xs text-white`} type={`button`} href={`${cleanUrl(url)}/${id}`}>
              <span>View</span>
              <EyeIcon className={`h-5 w-5 text-gray-400`} />
            </Link>
          ) : (
            <>
              {editing && (
                <Link type={`button`} href={`${cleanUrl(url)}/${id}/edit`}>
                  <PencilSquareIcon className={`h-5 w-5 text-gray-400`} />
                </Link>
              )}
            </>
          )}
        </>
      ) : (
        <div className="flex space-x-1">
          <Link
            preserveScroll={true}
            preserveState={false}
            method={`delete`}
            onSuccess={() => {
              toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Deleted successfully`} icon={`check`} />)
            }}
            href={`${cleanUrl(url)}/${id}`}
            as={`button`}
            className={`rounded bg-gray-900/75 p-1 text-green-500`}
          >
            <CheckIcon className={`h-5 w-5`} />
          </Link>

          <button className={`rounded bg-gray-900/75 p-1 text-red-500`} type={`button`} onClick={(e) => setOpen(!open)}>
            <XMarkIcon className={`h-5 w-5`} />
          </button>
        </div>
      )}
    </div>
  )
}

export default DatatableAction
