import { PageProps } from "@/types"
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import React from "react"
import ClientList from "@/dashboard/Layouts/Partials/ClientList"

export default function Index({ auth, clients, tags }: PageProps<any>) {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}>
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <ClientList clients={clients} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
