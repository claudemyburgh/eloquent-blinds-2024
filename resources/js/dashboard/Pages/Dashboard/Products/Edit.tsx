import { PageProps } from "@/types"
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import React from "react"
import EditProductForm from "@/dashboard/Pages/Dashboard/Products/Partials/EditProductForm"
import { ImageDropzone } from "@/dashboard/Components/Upload"

export default function Index({ auth, product }: PageProps) {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Product Edit</h2>}>
      <Head title="Category Edit" />
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">
          <div className="panel">
            <h2 className={`panel-heading`}>Product Edit</h2>
            <ImageDropzone model={product} namedRoute={"dashboard.products.upload"} />

            <EditProductForm />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
