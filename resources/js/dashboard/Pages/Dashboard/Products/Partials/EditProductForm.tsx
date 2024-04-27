import React, { useState } from "react"
import { useForm, usePage } from "@inertiajs/react"
import { CharCounter, InputError, InputLabel, SaveSubmitButton, SelectInput, Textarea, TextInput } from "@/Shared/Components/FormParials"
import { PageProps } from "@/types"
import { slugIt } from "@/lib/helpers"
import toast from "react-hot-toast"
import { CategoriesListProps, CounterProps, GalleryProps, GalleryType, ProductProps } from "@/types/datatable"
import SelectStepCategory from "@/dashboard/Components/FormPartials/SelectStepCategory"
import { ToastItem } from "@/Shared/Components/Alerts"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

const EditProductForm = () => {
  const { product, categories_list, galleries, guarantees, suppliers } = usePage<ProductProps & CategoriesListProps & GalleryProps & PageProps & any>().props

  const [count, setCount] = useState<CounterProps>({
    body: product.body?.length,
    slug: product.slug?.length,
    excerpt: product.excerpt?.length,
  })

  const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
    title: product.title || "",
    slug: product.slug || "",
    category_id: product.category_id || "",
    body: product.body || "",
    excerpt: product.excerpt || "",
    live: product.live,
    popular: product.popular,
    guarantee: product.guarantee || "",
    gallery: product["galleries"][0]?.id || "",
    product_range: product.product_range || "",
    supplier: product.supplier || "",
    supplier_code: product.supplier_code || "",
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.products.update", product), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Product successfully updated`} icon={`check`} />)
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
        <TextInput id="title" value={data.title} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <InputError message={errors.title} className="mt-2" />
      </div>
      <div>
        <InputLabel htmlFor="slug" value="Slug" />
        <TextInput id="slug" value={slugIt(data.slug)} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <CharCounter count={count.slug} max={100} />
        <InputError message={errors.slug} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="product_range" value="Product Range" />
        <TextInput id="product_range" value={data.product_range} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <InputError message={errors.product_range} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="category_id" value="Category" />
        <SelectStepCategory id="category_id" categories={categories_list} defaultValue={data.category_id} onChange={handleFormInput} />
        <InputError message={errors.category_id} className="mt-2" />
      </div>
      <div>
        <InputLabel htmlFor="excerpt" value="Excerpt" />
        <Textarea id="excerpt" value={data.excerpt} onChange={handleFormInput} className="mt-1 block min-h-[100px] w-full" />
        <CharCounter count={count.excerpt || 0} max={500} />
        <InputError message={errors.excerpt} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="body" value="Body" />
        <Textarea id="body" value={data.body} onChange={handleFormInput} className="mt-1 block min-h-[200px] w-full" />
        <CharCounter count={count.body || 0} max={2500} />
        <InputError message={errors.body} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="gallery" value="Gallery" />
        <SelectInput showValue={true} id={`gallery`} name={`gallery`} className={`mt-1 w-full`} value={data.gallery as any} onChange={handleFormInput}>
          <option value="">Select a gallery</option>
          {(galleries as unknown as GalleryType[]).map((gal: any) => (
            <option key={gal.id} value={gal.id}>
              {gal.title}
            </option>
          ))}
        </SelectInput>
        <InputError message={errors.gallery} className="mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputLabel htmlFor="guarantee" value="Guarantee" />
          <SelectInput showValue={true} id={`guarantee`} name={`guarantee`} className={`mt-1 w-full`} value={data.guarantee as any} onChange={handleFormInput}>
            <option value="">Select a guarantee date</option>
            {(Object.values(guarantees) as unknown as any).map((guarantee: any, index: number) => (
              <option key={guarantee.slug} value={guarantee.slug}>
                {guarantee.title}
              </option>
            ))}
          </SelectInput>
          <InputError message={errors.gallery} className="mt-2" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputLabel htmlFor="live" value="Live" />
          <SelectInput id={`live`} name={`live`} className={`mt-1 w-full`} value={data.live} onChange={handleFormInput}>
            <option value="1">Live</option>
            <option value="0">Not Live</option>
          </SelectInput>
          <InputError message={errors.live} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="popular" value="Popular" />
          <SelectInput id={`popular`} name={`popular`} className={`mt-1 w-full`} value={data.popular} onChange={handleFormInput}>
            <option value="1">Popular</option>
            <option value="0">Not Popular</option>
          </SelectInput>
          <InputError message={errors.popular} className="mt-2" />
        </div>
      </div>
      <Disclosure>
        <div className={" space-y-4 rounded-md border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-900"}>
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800">
            Supplier Details{" "}
            <span>
              <ChevronDownIcon className={`-mr-2 ml-2 size-4`} />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <InputLabel htmlFor="supplier" value="Supplier" />
              <SelectInput showValue={true} id={`supplier`} name={`supplier`} className={`mt-1 w-full`} value={data.supplier as any} onChange={handleFormInput}>
                <option value="">Select a supplier</option>
                {(Object.values(suppliers) as unknown as any).map((supplier: any, index: number) => (
                  <option key={supplier.slug} value={supplier.slug}>
                    {supplier.name}
                  </option>
                ))}
              </SelectInput>
              <InputError message={errors.supplier} className="mt-2" />
            </div>
            <div>
              <InputLabel htmlFor="supplier_code" value="Supplier Code" />
              <TextInput id="supplier_code" name="supplier_code" value={slugIt(data.supplier_code)} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
              <InputError message={errors.supplier_code} className="mt-2" />
            </div>
          </Disclosure.Panel>
        </div>
      </Disclosure>

      <div className={`flex items-center justify-between`}>
        <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful} />
      </div>
    </form>
  )
}

export default EditProductForm
