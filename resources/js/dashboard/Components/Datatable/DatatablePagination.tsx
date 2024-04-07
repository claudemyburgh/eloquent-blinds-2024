import {Link, usePage} from "@inertiajs/react"
import {twMerge} from "tailwind-merge"
import {Key} from "react";
import {UsePageDatatableProps} from "@/types/datatable";
import {useDatatable} from "@/dashboard/Components/Datatable";

const DatatablePagination = () => {
  const {
    data: {records},
  } = usePage<UsePageDatatableProps<any>>().props

  const {limit} = useDatatable()

  return (
    <>
      {records.links.length > 3 && (
        <nav className="relative z-0 my-4 md:my-6 flex shadow-sm space-x-1" aria-label="Pagination">
          {records?.links.map((link, index: { toString: () => Key | null | undefined; }) => (
            <Link
              key={index.toString()}
              preserveScroll={false}
              method={`get`}
              href={link.url || ""}
              disabled={link.active || !link.url}
              as={`button`}
              data={{limit}}
              className={twMerge(
                `z-10 relative inline-flex items-center px-4 py-2 hover:bg-primary-500 text-sm font-medium disabled:cursor-not-allowed rounded mb-5`,
                link.active ? " bg-primary-500" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100"
              )}
              dangerouslySetInnerHTML={{__html: link.label}}
            />
          ))}
        </nav>
      )}
    </>
  )
}

export default DatatablePagination
