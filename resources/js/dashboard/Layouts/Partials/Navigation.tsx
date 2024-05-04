import React from "react"
import { Link } from "@inertiajs/react"
import { twMerge } from "tailwind-merge"
import { ChartBarIcon, HomeIcon, RectangleStackIcon, SwatchIcon, PhotoIcon, UserIcon } from "@heroicons/react/24/solid"
import lightLogo from "../../../../img/brand/light-long-logo.svg"
import darkLogo from "../../../../img/brand/dark-long-logo.svg"

const linkClasses = "flex items-center space-x-2 hover:bg-primary-500 focus:bg-primary-500 hover:text-primary-950 focus:text-primary-950 p-2 rounded"
const activeLinkClass = "bg-primary-500 bg-primary-500 text-primary-950 text-primary-950"

function Navigation({ user }: any) {
  return (
    <nav className={`fixed inset-y-0 flex w-64 flex-col justify-between border-r  border-primary-500/10 bg-gray-100 dark:bg-gray-900`}>
      <div className={`w-full`}>
        <div className={`flex h-16 justify-center border-b border-primary-500/10 px-4`}>
          <Link className={`flex items-center`} href={route("dashboard.index")}>
            <span className={`sr-only`}>Eloquent Blinds</span>
            <img className={`block h-10 w-full dark:hidden`} aria-hidden src={darkLogo} alt="Eloquent Blinds" />
            <img className={`hidden h-10 w-full dark:block`} aria-hidden src={lightLogo} alt="Eloquent Blinds" />
          </Link>
        </div>
        <div className="my-6 space-y-4 px-4 font-semibold">
          <Link className={twMerge(linkClasses, route().current("dashboard.index") && activeLinkClass)} href={route("dashboard.index")}>
            <HomeIcon className="size-4" />
            <span>Dashboard</span>
          </Link>

          <Link className={twMerge(linkClasses, route().current("dashboard.clients.index") && activeLinkClass)} href={route("dashboard.clients.index")}>
            <UserIcon className="size-4" />
            <span>Clients</span>
          </Link>

          <div className={`my-4 border-t border-primary-500/10`}></div>

          <Link className={twMerge(linkClasses, route().current("dashboard.categories.index") && activeLinkClass)} href={route("dashboard.categories.index")}>
            <RectangleStackIcon className="size-4" />
            <span>Categories</span>
          </Link>
          <Link className={twMerge(linkClasses, route().current("dashboard.products.index") && activeLinkClass)} href={route("dashboard.products.index")}>
            <RectangleStackIcon className="size-4" />
            <span>Products</span>
          </Link>
          <Link className={twMerge(linkClasses, route().current("dashboard.galleries.index") && activeLinkClass)} href={route("dashboard.galleries.index")}>
            <PhotoIcon className="size-4" />
            <span>Galleries</span>
          </Link>

          <Link className={twMerge(linkClasses, route().current("dashboard.variants.index") && activeLinkClass)} href={route("dashboard.variants.index")}>
            <SwatchIcon className="size-4" />
            <span>Variants</span>
          </Link>
          <Link className={twMerge(linkClasses)} href={route("dashboard.ads.index")}>
            <ChartBarIcon className="size-4" />
            <span>Ads</span>
          </Link>
          <Link className={twMerge(linkClasses)} href={route("dashboard.meta-tag.index")}>
            <ChartBarIcon className="size-4" />
            <span>Meta Tags</span>
          </Link>
        </div>
      </div>

      <div className={`flex items-center border-b border-t border-primary-500/10 bg-gray-200 px-6 py-3 font-semibold text-primary-500 dark:bg-gray-900`}>
        <img className="mr-2 inline-block size-10 rounded-md" src={user.gravatar} alt="" />
        <span className={`flex truncate`}>{user?.name}</span>
      </div>
    </nav>
  )
}

export default Navigation
