import React from 'react';
import {Link} from "@inertiajs/react";
import {twMerge} from "tailwind-merge";
import {ChartBarIcon, HomeIcon, RectangleStackIcon, SwatchIcon} from '@heroicons/react/24/solid'


const linkClasses = 'flex items-center space-x-2 hover:bg-primary-500 focus:bg-primary-500 hover:text-primary-950 focus:text-primary-950 p-2 rounded'
const activeLinkClass = 'bg-primary-500 bg-primary-500 text-primary-950 text-primary-950'

function Navigation({user}: any) {
  return (
    <nav className={`bg-gray-900/20 w-64 border-r border-gray-950/50 fixed inset-y-0  flex flex-col justify-between`}>
      <div className={`w-full p-6`}>
        <Link className={`text-2xl font-bold`} href={route('dashboard.index')}>Eloquent <span className={`text-primary-500`}>Blinds</span></Link>
        <div className="space-y-4 my-6 pt-6 border-t border-primary-500/10 font-semibold">
          <Link className={twMerge(linkClasses, route().current('dashboard.index') && activeLinkClass)} href={route('dashboard.index')}>
            <HomeIcon className="size-4"/>
            <span>Dashboard</span>
          </Link>
          <Link className={twMerge(linkClasses, route().current('dashboard.categories.index') && activeLinkClass)} href={route('dashboard.categories.index')}>
            <RectangleStackIcon className="size-4"/>
            <span>Categories</span>
          </Link>
          <Link className={twMerge(linkClasses)} href={route('dashboard.index')}>
            <ChartBarIcon className="size-4"/>
            <span>Charts</span>
          </Link>
          <Link className={twMerge(linkClasses)} href={route('dashboard.index')}>
            <SwatchIcon className="size-4"/>
            <span>Styles</span>
          </Link>
        </div>
      </div>
      <div className={`bg-gray-950/10 border-t border-b border-gray-950 text-primary-500 font-semibold px-6 py-3 flex items-center`}>
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
