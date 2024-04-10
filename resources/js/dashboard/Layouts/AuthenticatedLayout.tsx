import React, {PropsWithChildren, ReactNode} from 'react';
import {User} from '@/types';
import Navigation from "@/dashboard/Layouts/Partials/Navigation";
import {Toaster} from "react-hot-toast";

export default function Authenticated({user, header, children}: PropsWithChildren<{ user: User, header?: ReactNode }>) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navigation user={user}/>
      <div className="ml-64 min-h-screen relative">
        {header && (
          <header className="border-b sticky top-0 z-50 border-primary-500/10 bg-gray-900/80 backdrop-blur  h-16 px-4 flex items-center">
            <div className="container mx-auto flex ">{header}</div>
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
  );
}
