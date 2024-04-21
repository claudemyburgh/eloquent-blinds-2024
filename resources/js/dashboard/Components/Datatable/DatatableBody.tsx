import { UsePageDatatableProps } from "@/types/datatable/datatable"
import { usePage } from "@inertiajs/react"
import { DatatableAction, useDatatable } from "@/dashboard/Components/Datatable"
import { twMerge } from "tailwind-merge"
import { Checkbox } from "@/Shared/Components/FormParials"

interface Row {
  id: number
  name: string
}

const DatatableBody = () => {
  const {
    data: { columns, meta },
  } = usePage<UsePageDatatableProps<any>>().props

  const { filteredData, handleSelected, selected } = useDatatable()
  return (
    <tbody className={`divide-y divide-gray-300 dark:divide-gray-900`}>
      {filteredData &&
        filteredData.map((row: any, index: number) => (
          <tr key={`row-${index}`} className={`odd:bg-gray-50 odd:dark:bg-gray-800`}>
            {meta.allow.deletions && (
              <td className={`w-5 p-3.5`}>
                <Checkbox id={row.id} onChange={handleSelected} value={row.id} checked={selected.includes(row.id)} />
              </td>
            )}
            {columns.displayable.map((column: string) => (
              <td key={`${column}-${index}`} className={`max-w-[200px] px-3.5 py-4 text-sm text-gray-700 dark:text-gray-300`}>
                <div className="line-clamp-2">
                  {column !== "read_at" ? (
                    row[column]
                  ) : (
                    <div
                      className={twMerge(
                        `inline-block rounded-full px-3 py-0.5 text-xs`,
                        row[column] !== null
                          ? "border border-green-600 bg-green-100 text-green-600 dark:border-green-900 dark:bg-green-800 dark:text-green-200"
                          : "border border-rose-600 bg-rose-100 text-rose-600 dark:border-rose-900 dark:bg-rose-800 dark:text-rose-200"
                      )}
                    >
                      {row[column] !== null ? row[column] : "Unread"}
                    </div>
                  )}
                </div>
              </td>
            ))}
            <th className={`w-[70px] px-3.5 py-4 text-right text-sm`}>
              <DatatableAction id={row["id"]} editing={meta.allow.editing} deletion={meta.allow.deletions} name={meta.name} />
            </th>
          </tr>
        ))}
    </tbody>
  )
}

export default DatatableBody
