import {UsePageDatatableProps} from "@/types/datatable";
import {usePage} from "@inertiajs/react";
import {DatatableAction, useDatatable} from "@/dashboard/Components/Datatable";
import {twMerge} from "tailwind-merge";
import {Checkbox} from "@/dashboard/Components/FormPartials";

interface Row {
  id: number
  name: string
}


const DatatableBody = () => {
  const {
    data: {columns, meta},
  } = usePage<UsePageDatatableProps<any>>().props

  const {filteredData, handleSelected, selected} = useDatatable()
  return (
    <tbody className={`divide-y divide-gray-300 dark:divide-gray-900`}>
    {filteredData &&
      filteredData.map((row: any, index: number) => (
        <tr key={`row-${index}`} className={`odd:bg-gray-100 odd:dark:bg-gray-800`}>
          {meta.allow.deletions && (
            <td className={`p-3.5 w-5`}>
              <Checkbox id={row.id} onChange={handleSelected} value={row.id} checked={selected.includes(row.id)}/>
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
                      `inline-block px-3 py-0.5 text-xs rounded-full`,
                      row[column] !== null
                        ? "bg-green-100 text-green-600 border-green-600 border dark:bg-green-800 dark:text-green-200 dark:border-green-900"
                        : "bg-rose-100 text-rose-600 border-rose-600 border dark:bg-rose-800 dark:text-rose-200 dark:border-rose-900"
                    )}
                  >
                    {row[column] !== null ? row[column] : "Unread"}
                  </div>
                )}
              </div>
            </td>
          ))}
          <th className={`w-[70px] text-right px-3.5 py-4 text-sm`}>
            <DatatableAction id={row["id"]} deletion={meta.allow.deletions} name={meta.name}/>
          </th>
        </tr>
      ))}
    </tbody>
  )

}


export default DatatableBody
