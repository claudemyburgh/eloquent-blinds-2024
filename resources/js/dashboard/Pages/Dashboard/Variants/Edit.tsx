import {PageProps} from "@/types";
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import React from "react";
import {ImageDropzone} from "@/dashboard/Components/Upload";
import EditVariantForm from "@/dashboard/Pages/Dashboard/Variants/Partials/EditVariantForm";


export default function Index({auth, variant}: PageProps) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Variant Edit</h2>}
    >
      <Head title="Category Edit"/>
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">
          <div className="panel">
            <h2 className={`panel-heading`}>Variant Edit</h2>
            <ImageDropzone model={variant} namedRoute={"dashboard.variants.upload"}/>
            <EditVariantForm/>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
