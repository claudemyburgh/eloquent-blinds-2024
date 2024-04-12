import React from 'react';
import {Link} from "@inertiajs/react";
import {twMerge} from "tailwind-merge";
import {ChartBarIcon, HomeIcon, RectangleStackIcon, SwatchIcon, PhotoIcon, UserIcon} from '@heroicons/react/24/solid'
import lightLogo from "../../../../img/brand/light-long-logo.svg"
import darkLogo from "../../../../img/brand/dark-long-logo.svg"
import {ThemeSelector} from "@/dashboard/Components/Theme/ThemeSelector";

const linkClasses = 'flex items-center space-x-2 hover:bg-primary-500 focus:bg-primary-500 hover:text-primary-950 focus:text-primary-950 p-2 rounded'
const activeLinkClass = 'bg-primary-500 bg-primary-500 text-primary-950 text-primary-950'

function Navigation({user}: any) {
  return (
    <nav className={`bg-gray-100 dark:bg-gray-900 w-64 border-r border-primary-500/10 fixed inset-y-0  flex flex-col justify-between`}>
      <div className={`w-full`}>
        <div className={`border-b border-primary-500/10 h-16 px-4 flex justify-center`}>
          <Link className={`flex items-center`} href={route('dashboard.index')}>
            <span className={`sr-only`}>Eloquent Blinds</span>
            <img className={`w-full h-10 block dark:hidden`} aria-hidden src={darkLogo} alt="Eloquent Blinds"/>
            <img className={`w-full h-10 hidden dark:block`} aria-hidden src={lightLogo} alt="Eloquent Blinds"/>
          </Link>
        </div>
        <div className="space-y-4 my-6 px-4 font-semibold">
          <Link className={twMerge(linkClasses, route().current('dashboard.index') && activeLinkClass)} href={route('dashboard.index')}>
            <HomeIcon className="size-4"/>
            <span>Dashboard</span>
          </Link>


          <Link className={twMerge(linkClasses, route().current('dashboard.clients.index') && activeLinkClass)} href={route('dashboard.clients.index')}>
            <UserIcon className="size-4"/>
            <span>Clients</span>
          </Link>

          <div className={`border-t border-primary-500/10 my-4`}></div>

          <Link className={twMerge(linkClasses, route().current('dashboard.categories.index') && activeLinkClass)} href={route('dashboard.categories.index')}>
            <RectangleStackIcon className="size-4"/>
            <span>Categories</span>
          </Link>
          <Link className={twMerge(linkClasses, route().current('dashboard.products.index') && activeLinkClass)} href={route('dashboard.products.index')}>
            <RectangleStackIcon className="size-4"/>
            <span>Products</span>
          </Link>
          <Link className={twMerge(linkClasses, route().current('dashboard.galleries.index') && activeLinkClass)} href={route('dashboard.galleries.index')}>
            <PhotoIcon className="size-4"/>
            <span>Galleries</span>
          </Link>

          <Link className={twMerge(linkClasses, route().current('dashboard.variants.index') && activeLinkClass)} href={route('dashboard.variants.index')}>
            <SwatchIcon className="size-4"/>
            <span>Variants</span>
          </Link>
          <Link className={twMerge(linkClasses)} href={route('dashboard.index')}>
            <ChartBarIcon className="size-4"/>
            <span>Charts</span>
          </Link>

        </div>
      </div>

      <div className={`bg-gray-200 dark:bg-gray-900 border-t border-b border-primary-500/10 text-primary-500 font-semibold px-6 py-3 flex items-center`}>
        <img
          className="inline-block size-10 rounded-md mr-2"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className={`truncate flex`}>
           {user?.name}
        </span>
      </div>

    </nav>
  );
}

export default Navigation;
