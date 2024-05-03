import { useForm, usePage } from "@inertiajs/react"
import { CharCounter, InputError, InputLabel, SaveSubmitButton, SelectInput, Textarea, TextInput } from "@/Shared/Components/FormParials"
import { PageProps } from "@/types"
import toast from "react-hot-toast"
import { ToastItem } from "@/Shared/Components/Alerts"
import React, { useState } from "react"
import AdProps from "@/types/datatable/AdProps"
import { slugIt } from "@/lib/helpers"
import { CounterProps } from "@/types/datatable"

const EditAdForm = () => {
  const { ad, products_list } = usePage<AdProps & PageProps & any>().props

  const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
    title: ad.title || "",
    slug: ad.slug || "",
    description: ad.description || "",
    product_id: ad.product_id || "",
  })

  const [count, setCount] = useState<Partial<CounterProps>>({
    description: ad.description?.length,
    slug: ad.slug.length,
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.ads.update", ad), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Ad successfully updated`} icon={`check`} />)
      },
      onError: () => {
        toast.custom((t) => <ToastItem t={t} type={`error`} title={`Error`} message={`Something went wrong`} icon={`cross`} />)
      },
    })
  }

  function handleFormInput(e: any) {
    e.preventDefault()
    setData({
      ...data,
      [e.target.id]: e.target.value,
    })
    setCount({
      ...count,
      [e.target.id]: e.target.value.length,
    })
  }

  return (
    <form className={`mt-6 space-y-6`} onSubmit={handleFormSubmit}>
      <div>
        <InputLabel htmlFor="title" value="Title" />
        <TextInput id="title" name="title" value={data.title} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <InputError message={errors.title} className="mt-2" />
      </div>

      <div>
        <InputLabel htmlFor="slug" value="Slug" />
        <TextInput id="slug" value={slugIt(data.slug)} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <CharCounter count={count.slug as number} max={100} />
        <InputError message={errors.slug} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="product_id" value="Product" />
        <SelectInput id="product_id" name="product_id" defaultValue={data.product_id} onChange={handleFormInput} className="mt-1 block w-full">
          <option value="">None</option>
          {products_list &&
            (products_list as unknown as any[]).map((product: { id: number; title: string }) => (
              <option key={product.id} value={product.id}>
                {product.title}
              </option>
            ))}
        </SelectInput>
        <InputError message={errors.product_id} className="mt-2" />
      </div>

      <div>
        <InputLabel htmlFor="description" value="Desciption" />
        <Textarea id="description" name="content" value={data.description} onChange={handleFormInput} className="mt-1 block min-h-[200px] w-full" />
        <CharCounter count={count.description || 0} max={2500} />
        <InputError message={errors.description} className="mt-4" />
      </div>

      <div className={`flex items-center justify-between`}>
        <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful} />
      </div>
    </form>
  )
}

export default EditAdForm
