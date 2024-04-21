import { SelectInput } from "@/Shared/Components/FormParials"
import { Fragment, Key } from "react"

interface Props {
  categories: string
}

const SelectStepCategory = ({ categories, ...resProps }: Props & any) => {
  return (
    <SelectInput {...resProps} className="mt-1 block w-full text-gray-600">
      <option value="">Select Category</option>
      {categories &&
        (categories as unknown as any[]).map((cat, index) => (
          <Fragment key={index}>
            {cat.children.length ? (
              <optgroup key={cat.uuid + "-top"} label={cat.title}>
                {cat.children.map((child: any, cIndex: Key | null | undefined) => (
                  <option key={cIndex} value={child.id}>
                    {child.title}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option key={cat.uuid + "-opt"} value={cat.id}>
                {cat.title}
              </option>
            )}
          </Fragment>
        ))}
    </SelectInput>
  )
}
export default SelectStepCategory
