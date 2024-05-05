import React from "react"
import { Dropdown } from "@/Shared/Components/FormParials"
import { usePage } from "@inertiajs/react"
import { PageProps } from "@/types"

function ProfileMenu() {
  const { auth } = usePage<PageProps>().props
  return (
    <div className="relative ml-3">
      <Dropdown>
        <Dropdown.Trigger>
          <span className="inline-flex rounded-md">
            <button
              type="button"
              className="inline-flex h-8 items-center justify-center rounded-lg border border-gray-500 px-3 text-gray-600 hover:scale-105 dark:bg-gray-900/20 dark:text-gray-200 md:h-9"
            >
              {auth.user.name}
              <svg className="-mr-0.5 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
          <Dropdown.Link href={route("logout")} method="post" as="button">
            Log Out
          </Dropdown.Link>
        </Dropdown.Content>
      </Dropdown>
    </div>
  )
}

export default ProfileMenu
