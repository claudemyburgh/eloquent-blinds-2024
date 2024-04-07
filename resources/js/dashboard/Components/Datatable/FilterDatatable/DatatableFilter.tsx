import React from "react"
import {BackendSearch, LimitRecords} from "@/dashboard/Components/Datatable/FilterDatatable"
import {useDatatable} from "@/dashboard/Components/Datatable"
import {InputLabel, TextInput} from "@/dashboard/Components/FormPartials"
import {usePage} from "@inertiajs/react"

const DatatableFilter = () => {
  const {url} = usePage()
  const {quickSearch, setQuickSearch} = useDatatable()
  const handleSearchInput = (e: any) => {
    e.preventDefault()
    setQuickSearch(e.target.value)
  }

  return (
    <div className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-200 p-4 rounded my-4 md:my-6 space-y-4">
      <BackendSearch/>
      <div className={`grid grid-cols-12 gap-4 md:gap-x-6 lg:gap-x-8`}>
        <div className="col-span-12 md:col-span-8 lg:col-span-10">
          <InputLabel className={`mb-1`} htmlFor={`quick-search`}>
            Quick Search
          </InputLabel>
          <TextInput type={`search`} id={`quick-search`} className={`w-full max-w-full`} onChange={handleSearchInput} value={quickSearch}/>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-2">
          <LimitRecords/>
        </div>
      </div>
    </div>
  )
}

export default DatatableFilter
