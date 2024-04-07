import React, {PropsWithChildren, ReactNode} from 'react';
import {User} from '@/types';
import Navigation from "@/dashboard/Layouts/Partials/Navigation";

export default function Authenticated({user, header, children}: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navigation user={user}/>
            <div className="ml-64 min-h-screen ">
                {header && (
                    <header className="bg-white dark:bg-gray-900 shadow shadow-primary-500/20">
                        <div className="container mx-auto px-6 py-7">{header}</div>
                    </header>
                )}
                <main>{children}</main>
            </div>
        </div>
    );
}
