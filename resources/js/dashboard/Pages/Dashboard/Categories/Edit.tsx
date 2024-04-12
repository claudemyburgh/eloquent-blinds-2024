import {PageProps} from "@/types";
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import React from "react";
import EditCategoryForm from "@/dashboard/Pages/Dashboard/Categories/Partials/EditCategoryForm";
import {ImageDropzone} from "@/dashboard/Components/Upload/";


export default function Index({auth, category}: PageProps) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Category Edit</h2>}
    >
      <Head title="Category Edit"/>
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">
          <div className="panel">
            <h2 className={`panel-heading`}>Category Edit</h2>
            <ImageDropzone model={category} namedRoute={"dashboard.categories.upload"}/>
            <EditCategoryForm/>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
