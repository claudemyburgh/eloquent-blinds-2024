import React from "react"
import { InputLabel, SelectInput } from "@/Shared/Components/FormParials"
import { router, usePage } from "@inertiajs/react"
import { useDatatable } from "@/dashboard/Components/Datatable"

const LimitRecords = () => {
  const { url } = usePage()

  const { limit, setLimit } = useDatatable()

  const handleLimitChanges = (e: any) => {
    setLimit(e.target.value)

    router.get(`${url}`, { limit: e.target.value }, { preserveState: false })
  }

  return (
    <>
      <InputLabel className={`mb-1`} htmlFor={`display-limit`}>
        Display Limit
      </InputLabel>

      <SelectInput onChange={handleLimitChanges} id={`display-limit`} name={`limit`} className={`w-full max-w-full`} value={limit}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="250">250</option>
      </SelectInput>
    </>
  )
}

export default LimitRecords
