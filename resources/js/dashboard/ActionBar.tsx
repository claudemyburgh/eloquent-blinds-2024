import React from "react"
import { Menu } from "@headlessui/react"
import { WrenchIcon, XCircleIcon, TableCellsIcon, PhoneIcon } from "@heroicons/react/16/solid"
import { Link } from "@inertiajs/react"
import { PhotoIcon } from "@heroicons/react/24/solid"

const ActionBar = () => {
  return (
    <Menu as="div" className={`relative`}>
      <Menu.Button
        className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-500 text-gray-600 hover:scale-105 dark:bg-gray-900/20 dark:text-gray-200 md:h-9 md:w-9`}
      >
        <WrenchIcon className={`size-4`} />
      </Menu.Button>
      <Menu.Items
        className={`absolute left-1/2 top-full mt-3 w-40 -translate-x-1/2 space-y-4 rounded-lg  bg-gray-200/95 p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 backdrop-blur-lg dark:bg-gray-900/95 dark:ring-white/5`}
      >
        <Menu.Item as="div" className={`w-full `}>
          <Link className={`flex w-full items-center space-x-2 hover:text-primary-400`} href={route("dashboard.action.cache_clear")} method="post" as={`button`} type={`button`}>
            <>
              <div className="flex size-6 items-center justify-center rounded-md bg-white shadow ring-1 ring-gray-900/5 hover:bg-gray-50 dark:bg-gray-700 dark:ring-inset dark:ring-white/5 hover:dark:bg-gray-800">
                <XCircleIcon className={`size-4`} />
              </div>
              <span>Clear Cache</span>
            </>
          </Link>
        </Menu.Item>
        <Menu.Item as="div" className={`w-full `}>
          <Link className={`flex w-full items-center space-x-2 hover:text-primary-400`} href={route("dashboard.action.view_clear")} method="post" as={`button`} type={`button`}>
            <>
              <div className="flex size-6 items-center justify-center rounded-md bg-white shadow ring-1 ring-gray-900/5 hover:bg-gray-50 dark:bg-gray-700 dark:ring-inset dark:ring-white/5 hover:dark:bg-gray-800">
                <XCircleIcon className={`size-4`} />
              </div>
              <span>Clear View</span>
            </>
          </Link>
        </Menu.Item>
        <Menu.Item as="div" className={`w-full `}>
          <Link className={`flex w-full items-center space-x-2 hover:text-primary-400`} href={route("dashboard.action.view_clear")} method="post" as={`button`} type={`button`}>
            <>
              <div className="flex size-6 items-center justify-center rounded-md bg-white shadow ring-1 ring-gray-900/5 hover:bg-gray-50 dark:bg-gray-700 dark:ring-inset dark:ring-white/5 hover:dark:bg-gray-800">
                <PhotoIcon className={`size-4`} />
              </div>
              <span>Clean Images</span>
            </>
          </Link>
        </Menu.Item>
        <Menu.Item as="div" className={`w-full `}>
          <Link className={`flex w-full items-center space-x-2 hover:text-primary-400`} href={route("dashboard.action.sitemap")} method="post" as={`button`} type={`button`}>
            <>
              <div className="flex size-6 items-center justify-center rounded-md bg-white shadow ring-1 ring-gray-900/5 hover:bg-gray-50 dark:bg-gray-700 dark:ring-inset dark:ring-white/5 hover:dark:bg-gray-800">
                <TableCellsIcon className={`size-4`} />
              </div>
              <span>Create Sitemap</span>
            </>
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default ActionBar
