import { useForm, usePage } from "@inertiajs/react"
import { UsePageDatatableProps } from "@/types/datatable/datatable"
import React, { useState } from "react"
import { slugIt, unSlug } from "@/lib/helpers"
import PrimaryButton from "@/dashboard/Components/Buttons/PrimaryButton"
import slugify from "slugify"
import { InputError, InputLabel, SelectCategory, SelectInput, TextInput } from "@/dashboard/Components/FormPartials"
import Modal from "@/dashboard/Components/Modal"
import { Panel } from "@/dashboard/Components/Panel"
import SelectStepCategory from "@/dashboard/Components/FormPartials/SelectStepCategory"
import { ProductProps } from "@/types/datatable"

const DatatableCreateActionBar = ({ categories }: any) => {
  const {
    data: {
      meta: { name_singular, name, allow },
      columns,
      database,
    },
    products_list,
  } = usePage<UsePageDatatableProps<any>>().props

  const { url } = usePage()

  const [isOpen, setIsOpen] = useState(false)

  const arr: string[] = columns.quick_create

  const obj: { [key: string]: string } = {}

  arr.forEach((key: string) => {
    obj[key] = ""
  })

  const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
    ...obj,
  })

  function closeModal() {
    setIsOpen(false)
    reset()
    clearErrors()
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleFormInput = (e: any): void => {
    e.preventDefault()
    setData({
      ...data,
      [e.target.name]: e.target.name === "slug" ? slugIt(e.target.value) : e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    clearErrors()
    post(`${url}`, {
      onSuccess: () => {
        closeModal()
        reset()
      },
      onError: () => {},
      preserveState: true,
    })
  }

  return (
    <>
      <Modal show={isOpen} onClose={closeModal} maxWidth={`lg`} closeable={true}>
        <Panel>
          <Panel.Header heading={`Create a new ${name_singular}`} />
          <form onSubmit={handleSubmit} className="mt-4 space-y-6">
            {columns.quick_create.map((column) => (
              <div key={slugify(column)}>
                <InputLabel htmlFor={column} value={unSlug(column)} className={`capitalize`} />

                {column === "category_id" ? (
                  <SelectStepCategory id="category_id" name={column} categories={categories} defaultValue={data.category_id} onChange={handleFormInput} />
                ) : column === "product_id" ? (
                  <SelectInput className={"w-full"} id="product_id" name={column} defaultValue={data.product_id} onChange={handleFormInput}>
                    <option>Select Product</option>
                    {products_list.map((product: ProductProps) => (
                      <option key={product.id} value={product.id}>
                        {product.title}
                      </option>
                    ))}
                  </SelectInput>
                ) : (
                  <TextInput id={column} name={column} className="mt-1 block w-full" onChange={handleFormInput} value={data[column]} />
                )}

                <InputError className="mt-2" message={errors[column]} />
              </div>
            ))}
            <div>
              <PrimaryButton type={`submit`}>Create</PrimaryButton>
            </div>
          </form>
        </Panel>
      </Modal>

      <div className={`panel`}>
        <div className="flex justify-between">
          <h1 className={`text-2xl font-semibold capitalize`}>{name}</h1>
          {allow.creation && (
            <PrimaryButton type={`button`} onClick={openModal}>
              Create new {name_singular}
            </PrimaryButton>
          )}
        </div>
      </div>
    </>
  )
}

export default DatatableCreateActionBar
