import React, {FC, Fragment} from "react"

import {Transition} from "@headlessui/react"
import toast, {Toast} from "react-hot-toast"
import {CheckBadgeIcon, InformationCircleIcon, XCircleIcon} from "@heroicons/react/24/outline"

type Props = {
  t: Toast
  type?: "default" | "success" | "error" | "info"
  title?: string
  message?: string
  icon: "check" | "cross" | "info"
}

const ToastItem: FC<Props> = ({t, type = "default", title, message, icon}) => {
  const iconSet = {
    check: <CheckBadgeIcon className={`h-6 w-6 text-emerald-600`}/>,
    cross: <XCircleIcon className={`h-6 w-6 text-red-500`}/>,
    info: <InformationCircleIcon className={`h-6 w-6 text-primary-500`}/>,
  }

  const styleType: {
    default: string
    success: string
    error: string
    info: string
  } = {
    default: "text-gray-900",
    success: "text-emerald-600",
    error: "text-red-500",
    info: "text-primary-500",
  }

  return (
    <Transition
      show={t.visible}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-4 opacity-0 sm:translate-y-0 sm:translate-x-4"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="max-w-sm w-full bg-gray-100 dark:bg-gray-950 z-50 shadow-xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-1">{iconSet[icon]}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              {title && <p className={`text-lg font-bold ${styleType[type]}`}>{title}</p>}
              {message && <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">{message}</p>}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="bg-gray-200 dark:bg-gray-900 rounded-md inline-flex text-gray-400 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={() => {
                  toast.dismiss(t.id)
                }}
              >
                <span className="sr-only">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default ToastItem
