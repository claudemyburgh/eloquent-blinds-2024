import React from "react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

type MultiSelectOption = {
  label: string
  value: string
}

type MultiSelectProps = {
  value: MultiSelectOption
  options: MultiSelectOption[]
  onChange: (value: MultiSelectOption | undefined) => void
}
const MultiSelect = ({ value, onChange, options }: MultiSelectProps) => {
  return (
    <div tabIndex={0} className={`form-input relative flex min-h-10 justify-between rounded`}>
      <span></span>
      <div className={`flex space-x-2`}>
        <button className={`flex size-6 items-center justify-center rounded border border-rose-500 bg-rose-400 p-2`}>&times;</button>
        <div aria-hidden={true} className="w-1px border-r border-gray-300"></div>
        <button>
          <ChevronDownIcon className={"size-6"} />
        </button>
      </div>
      <ul className={`absolute left-0 top-full flex max-h-[200px] w-full translate-y-2 flex-col overflow-clip overflow-y-auto rounded border border-gray-300  bg-white`}>
        {options &&
          options.map((item) => (
            <li className={`px-2 py-1 font-semibold hover:bg-primary-500  hover:text-primary-950`} key={item.value}>
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MultiSelect
