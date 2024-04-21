import React from "react"
import { useForm, usePage } from "@inertiajs/react"
import { UsePageDatatableProps } from "@/types/datatable/datatable"
import { InputLabel, SelectInput, TextInput } from "@/Shared/Components/FormParials"
import { PrimaryButton } from "@/dashboard/Components/Buttons"
import { unSlug } from "@/lib/helpers"
import { useDatatable } from "@/dashboard/Components/Datatable"

const BackendSearch = () => {
  const { url } = usePage()
  const {
    data: { columns },
  } = usePage<UsePageDatatableProps<any>>().props

  const { limit } = useDatatable()

  const { data, setData, get, errors } = useForm({
    column: "id",
    operator: "equals",
    limit,
    value: "",
  })

  const handlerInputChange = (e: any) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    })
  }

  const handleSearchFormSubmit = (event: any): void => {
    event.preventDefault()
    get(`${url}`, {
      preserveState: false,
    })
  }

  return (
    <form className={`grid grid-cols-12 gap-4 md:gap-x-6 lg:gap-x-8`} onSubmit={handleSearchFormSubmit}>
      <div className="col-span-12 md:col-span-6 lg:col-span-2">
        <InputLabel className={`mb-1`} htmlFor={`column`}>
          Filter column
        </InputLabel>

        <SelectInput id={`column`} className={`w-full max-w-full`} value={data.column} onChange={handlerInputChange}>
          {columns.updatable.map((column) => (
            <option key={column} value={column}>
              {unSlug(column)}
            </option>
          ))}
        </SelectInput>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-2">
        <InputLabel className={`mb-1`} htmlFor={`operator`}>
          Operator
        </InputLabel>
        <SelectInput id={`operator`} className={`w-full max-w-full`} value={data.operator} onChange={handlerInputChange}>
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="starts_with">Starts with</option>
          <option value="ends_with">Ends with</option>
          <option value="greater_than">Greater than</option>
          <option value="greater_or_equal_than">Greater or equal than</option>
          <option value="less_than">Less than</option>
          <option value="less_or_equal_than">Less or equal than</option>
        </SelectInput>
      </div>
      <div className="col-span-12 flex flex-grow-0 md:col-span-8">
        <div className={`flex-1`}>
          <InputLabel className={`mb-1`} htmlFor={`value`}>
            Full Search
          </InputLabel>
          <TextInput type={`search`} id={`value`} className={`w-full max-w-full rounded-r-none`} value={data.value} onChange={handlerInputChange} />
        </div>
        <div className={`flex items-end`}>
          <PrimaryButton type={`submit`} className={`min-h-[42px] rounded-l-none`}>
            Search
          </PrimaryButton>
        </div>
      </div>
    </form>
  )
}

export default BackendSearch
