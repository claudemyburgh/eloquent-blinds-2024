import React from "react"
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import { PageProps } from "@/types"
import EditMetaTagForm from "@/dashboard/Pages/Dashboard/MetaTag/Partials/EditMetaTagForm"

const Edit = ({ auth, tag }: PageProps<any>) => {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}>
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="mx-auto w-[524px] space-y-6 ">
          <EditMetaTagForm />
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Edit
