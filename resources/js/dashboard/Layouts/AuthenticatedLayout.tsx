import React, { PropsWithChildren, ReactNode } from "react"
import { User } from "@/types"
import Navigation from "@/dashboard/Layouts/Partials/Navigation"
import { Toaster } from "react-hot-toast"
import { ThemeSelector } from "@/dashboard/Components/Theme/ThemeSelector"

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation user={user} />
      <div className="relative ml-64 min-h-screen">
        {header && (
          <header className="sticky top-0 z-50 flex h-16 items-center  border-b border-primary-500/10 bg-gray-100/80 px-4 backdrop-blur dark:bg-gray-900/80">
            <div className="container mx-auto flex items-center justify-between">
              <div>{header}</div>
              <ThemeSelector className="relative z-10" />
            </div>
          </header>
        )}
        <main>{children}</main>
      </div>
      <Toaster
        position={`top-right`}
        toastOptions={{
          duration: 2200,
        }}
      />
    </div>
  )
}
