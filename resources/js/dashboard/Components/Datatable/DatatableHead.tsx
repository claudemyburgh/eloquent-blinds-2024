import React, { FC } from "react"
import { usePage } from "@inertiajs/react"
import { UsePageDatatableProps } from "@/types/datatable/datatable"
import { ArrowIndicator, useDatatable } from "@/dashboard/Components/Datatable"
import { unSlug } from "@/lib/helpers"
import { Checkbox } from "@/Shared/Components/FormParials"

const DatatableHead: FC = () => {
  const { data } = usePage<UsePageDatatableProps<any>>().props
  const { order, selected, handleToggleSelectedAll, handleColumnOrder } = useDatatable()
  return (
    <thead className={`border-b border-gray-200 bg-gray-200 text-gray-700 dark:border-gray-900 dark:bg-gray-950/20 dark:text-gray-200`}>
      <tr>
        {data.meta.allow.deletions && (
          <th className={`w-5 p-3.5`}>
            <Checkbox checked={selected.length > 0} onChange={(item) => handleToggleSelectedAll(item, data.records.data)} />
          </th>
        )}
        {data.columns.displayable?.map((column) => (
          <th key={column} className={`p-3.5 text-left text-sm font-semibold uppercase text-gray-900 dark:text-gray-200 ${column === "id" && "w-[70px]"}`} scope="col">
            <button type={`button`} className={`flex items-center justify-between space-x-2 uppercase`} onClick={() => handleColumnOrder(column)}>
              <span>{unSlug(column)}</span>
              {order.key === column && <ArrowIndicator order={order.order} />}
            </button>
          </th>
        ))}

        <th className={`w-[70px] p-3.5 text-right`}>
          <span className="sr-only">Edit or delete</span>
        </th>
      </tr>
    </thead>
  )
}

export default DatatableHead
