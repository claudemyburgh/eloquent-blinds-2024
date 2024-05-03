import { PageProps } from "@/types"
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import React from "react"

import { ImageDropzone } from "@/dashboard/Components/Upload/"
import EditAdForm from "@/dashboard/Pages/Dashboard/Ads/Partials/EditAdForm"
import { convertedImage } from "@/lib/helpers"
import AdProps from "@/types/datatable/AdProps"

export default function Index({ auth, ad }: PageProps & AdProps) {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Ad Edit</h2>}>
      <Head title="Ad Edit" />
      <div className="py-12">
        <div className="container mx-auto space-y-6">
          <div className=" grid grid-cols-3 gap-6 ">
            <div className="panel col-span-2">
              <h2 className={`panel-heading`}>Ad Edit</h2>
              <ImageDropzone model={ad} namedRoute={"dashboard.ads.upload"} />
              <EditAdForm />
            </div>
            <div>
              <div className={"panel"}>
                <img src={convertedImage(ad?.media[0]?.original_url, "ads", "webp", "https://fakeimg.pl/600x400")} alt="test" />
                <div>
                  <h3>{ad.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: ad.description }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
