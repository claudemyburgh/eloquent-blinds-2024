import React from "react"
import { Panel } from "@/dashboard/Components/Panel"
import { formatDistanceToNow } from "date-fns"
import { Link } from "@inertiajs/react"

const ClientList = ({ clients }: any) => {
  return (
    <Panel>
      <Panel.Header heading={`Clients`} />
      <div className={`space-y-2`}>
        {clients.data.map((client: any) => (
          <div key={client.id} className={`flex items-center space-x-2 rounded-global p-2 transition-colors duration-75 hover:bg-gray-900/50`}>
            <img className={`rounded-md bg-gray-900`} width={38} height={38} src={client.avatar} alt={client.fullName} />
            <div className="flex flex-1 flex-row justify-between">
              <div className={`flex flex-col`}>
                <span className={`font-semibold`}>{client.fullName}</span>
                <span className={`text-xs text-gray-400`}>{client.email}</span>
              </div>
              <div className={`mx-4 flex-1 -translate-y-1 border-b border-dashed border-gray-400/20 `}></div>
              <div className={"flex self-end text-xs italic text-gray-400"}>{formatDistanceToNow(client.created_at, { addSuffix: true })}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between p-2">
        {clients.prev_page_url && (
          <Link className={`rounded-md bg-primary-500 p-4 py-1 hover:bg-primary-600 focus:bg-primary-600 disabled:bg-gray-200`} preserveScroll={true} href={clients.prev_page_url}>
            Previous
          </Link>
        )}
        <span aria-hidden></span>
        {clients.next_page_url && (
          <Link className={`rounded-md bg-primary-500 p-4 py-1 hover:bg-primary-600 focus:bg-primary-600 disabled:bg-gray-200`} preserveScroll={true} href={clients.next_page_url}>
            NEXT
          </Link>
        )}
      </div>
    </Panel>
  )
}

export default ClientList
