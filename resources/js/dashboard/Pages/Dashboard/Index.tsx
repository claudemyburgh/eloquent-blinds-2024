import {PageProps} from "@/types";
import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import States from "@/dashboard/Layouts/Partials/States";
import React from "react";
import {Panel} from "@/dashboard/Components/Panel";


export default function Index({auth, clients}: PageProps<any>) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard"/>
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">
          <States/>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Panel>
              <Panel.Header heading={`Clients`}/>
              <div className={`space-y-2`}>
                {clients.data.map((client: any) => (
                  <div key={client.id} className={`flex items-center space-x-2 p-2 hover:bg-gray-900/50 transition-colors duration-75 rounded-global`}>
                    <img className={`bg-gray-900 rounded-md`} width={38} height={38} src={client.avatar} alt={client.fullName}/>
                    <div className={`flex flex-col`}>
                      <span className={`font-semibold`}>{client.fullName}</span>
                      <span className={`text-xs text-gray-400`}>{client.email}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-2 flex justify-between">
                {clients.prev_page_url && (<Link className={`p-4 py-1 rounded-md bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 disabled:bg-gray-200`} preserveScroll={true} href={clients.prev_page_url}>Previous</Link>)}
                <span aria-hidden></span>
                {clients.next_page_url && (<Link className={`p-4 py-1 rounded-md bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 disabled:bg-gray-200`} preserveScroll={true} href={clients.next_page_url}>NEXT</Link>)}
              </div>
            </Panel>
          </div>

        </div>
      </div>
    </AuthenticatedLayout>
  );
}
