import { PageProps } from "@/types"
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import React from "react"
import EditGalleryForm from "@/dashboard/Pages/Dashboard/Galleries/Partials/EditGalleryForm"
import { ImageDropzone } from "@/dashboard/Components/Upload"

export default function Index({ auth, gallery }: PageProps & any) {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Gallery Edit</h2>}>
      <Head title="Category Edit" />
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">
          <div className="panel">
            <h2 className={`panel-heading`}>Gallery {gallery.title}</h2>
            <ImageDropzone model={gallery} namedRoute={"dashboard.galleries.upload"} />
            <EditGalleryForm />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
