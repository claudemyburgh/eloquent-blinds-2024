import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import {DatatableProps} from "@/types/datatable/datatable";
import "@/lib/prototypes"
import {DatatableMainComponent} from "@/dashboard/Components/Datatable";
import React from "react";

const Dashboard = ({auth, data}: PageProps & DatatableProps<any>) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{data.meta.name.capitalize()}</h2>}
    >
      <Head title={`Dashboard ${data?.meta?.name.capitalize()}`}/>
      <div className="py-12">
        <div className="container mx-auto">
          <DatatableMainComponent data={data}/>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Dashboard
