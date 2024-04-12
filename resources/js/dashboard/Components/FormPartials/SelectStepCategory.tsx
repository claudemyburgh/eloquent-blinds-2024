import SelectInput from "./SelectInput"

interface Props {
  categories: string
}

const SelectStepCategory = ({categories, ...resProps}: Props & any) => {
  return (
    <SelectInput {...resProps} className="mt-1 block w-full text-gray-600">
      <option key={`toplevel`} value="">
        Select Category
      </option>
      {categories &&
        (categories as unknown as any[]).map((cat) => (
          <>
            {cat.children.length ? (
              <optgroup key={cat.uuid + "-top"} label={cat.title}>
                {cat.children.map((child: any) => (
                  <option key={child.uuid + "-opt"} value={child.id}>
                    {child.title}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option key={cat.uuid + "-option"} value={cat.id}>
                {cat.title}
              </option>
            )}
          </>
        ))}
    </SelectInput>
  )
}

export default SelectStepCategory
