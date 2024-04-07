import React, {FC} from "react";
import {usePage} from "@inertiajs/react";
import {UsePageDatatableProps} from "@/types/datatable";
import {ArrowIndicator, useDatatable} from "@/dashboard/Components/Datatable";
import {unSlug} from "@/lib/helpers";
import {Checkbox} from "@/dashboard/Components/FormPartials";

const DatatableHead: FC = () => {
  const {data} = usePage<UsePageDatatableProps<any>>().props
  const {order, selected, handleToggleSelectedAll, handleColumnOrder} = useDatatable()
  return (
    <thead className={`bg-gray-200 dark:bg-gray-950/20 border-b border-gray-400/800 dark:border-gray-900 text-gray-700 dark:text-gray-200`}>
    <tr>
      {data.meta.allow.deletions && (
        <th className={`p-3.5 w-5`}>
          <Checkbox checked={selected.length > 0} onChange={(item) => handleToggleSelectedAll(item, data.records.data)}/>
        </th>
      )}
      {data.columns.displayable?.map((column) => (
        <th key={column} className={`p-3.5 text-left text-sm font-semibold dark:text-gray-200 text-gray-900 uppercase ${column === "id" && "w-[70px]"}`} scope="col">
          <button type={`button`} className={`flex space-x-2 justify-between items-center uppercase`} onClick={() => handleColumnOrder(column)}>
            <span>{unSlug(column)}</span>
            {order.key === column && <ArrowIndicator order={order.order}/>}
          </button>
        </th>
      ))}

      <th className={`w-[70px] text-right p-3.5`}>
        <span className="sr-only">Edit or delete</span>
      </th>
    </tr>
    </thead>
  )
}

export default DatatableHead
