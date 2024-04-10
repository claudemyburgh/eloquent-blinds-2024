import {PageProps} from "@/types";
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import States from "@/dashboard/Layouts/Partials/States";
import React from "react";


export default function Index({auth, categories_all}: PageProps) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard"/>
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">

          <States/>
          <div className="bg-white dark:bg-primary-500 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100 ">Dashboard</div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
