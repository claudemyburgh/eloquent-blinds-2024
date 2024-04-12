import {useForm, usePage} from "@inertiajs/react";
import {InputError, InputLabel, SaveSubmitButton, SelectInput, TextInput} from "@/dashboard/Components/FormPartials"
import {PageProps} from "@/types"

import toast from "react-hot-toast"
import {ToastItem} from "@/dashboard/Components/Alerts"
import {CategoriesAllProps, GalleryProps, ProductProps} from "@/types/datatable";
import VariantProps from "@/types/datatable/variant-props";
import React from "react";


const EditVariantForm = () => {
  const {variant, products_all} = usePage<VariantProps & CategoriesAllProps & GalleryProps & PageProps & any>().props


  const {data, setData, put, errors, processing, recentlySuccessful} = useForm({
    name: variant.name || "",
    code: variant.code || "",
    product_id: variant.product_id || "",
    live: variant.live,
    popular: variant.popular,
  })


  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.variants.update", variant), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Variant successfully updated`} icon={`check`}/>)
      },
      onError: () => {
        toast.custom((t) => <ToastItem t={t} type={`error`} title={`Error`} message={`Something went wrong`} icon={`cross`}/>)
      },
    })
  }


  function handleFormInput(e: any) {
    e.preventDefault()
    setData({
      ...data,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <form className={`mt-6 space-y-6`} onSubmit={handleFormSubmit}>

      <div>
        <InputLabel htmlFor="name" value="Name"/>
        <TextInput id="name" value={data.name} onChange={handleFormInput} type="text" className="mt-1 block w-full"/>
        <InputError message={errors.name} className="mt-2"/>
      </div>

      <div>
        <InputLabel htmlFor="code" value="Code"/>
        <TextInput id="code" value={data.code} onChange={handleFormInput} type="text" className="mt-1 block w-full"/>
        <InputError message={errors.code} className="mt-2"/>
      </div>

      <div>
        <InputLabel htmlFor="product_id" value="Product"/>
        <SelectInput id="product_id" defaultValue={data.product_id} onChange={handleFormInput} className="mt-1 block w-full">
          <option value="">None</option>
          {products_all &&
            (products_all as unknown as any[]).map((product: { id: number; title: string }) => (
              <option key={product.id} value={product.id}>
                {product.title}
              </option>
            ))}
        </SelectInput>
        <InputError message={errors.product_id} className="mt-2"/>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputLabel htmlFor="live" value="Live"/>
          <SelectInput id={`live`} name={`live`} className={`w-full mt-1`} value={data.live} onChange={handleFormInput}>
            <option value="1">Live</option>
            <option value="0">Not Live</option>
          </SelectInput>
          <InputError message={errors.live} className="mt-2"/>
        </div>
        <div>
          <InputLabel htmlFor="popular" value="Popular"/>
          <SelectInput id={`popular`} name={`popular`} className={`w-full mt-1`} value={data.popular} onChange={handleFormInput}>
            <option value="1">Popular</option>
            <option value="0">Not Popular</option>
          </SelectInput>
          <InputError message={errors.popular} className="mt-2"/>
        </div>
      </div>
      <div className={`flex items-center justify-between`}>
        <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful}/>
      </div>
    </form>
  )
}

export default EditVariantForm
