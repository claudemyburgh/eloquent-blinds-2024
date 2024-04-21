import React, { useState } from "react"
import { useForm, usePage } from "@inertiajs/react"
import { CharCounter, InputError, InputLabel, SaveSubmitButton, SelectInput, Textarea, TextInput } from "@/Shared/Components/FormParials"
import { PageProps } from "@/types"
import { slugIt } from "@/lib/helpers"
import toast from "react-hot-toast"

import { CategoriesListProps, CategoryProps, CounterProps, GalleryProps } from "@/types/datatable"
import filterObjectsById from "@/lib/filter-object"
import { ToastItem } from "@/Shared/Components/Alerts"

const EditCategoryForm = () => {
  const { category, categories_list, galleries } = usePage<CategoryProps & CategoriesListProps & GalleryProps & PageProps>().props

  const [count, setCount] = useState<CounterProps>({
    body: category.body?.length,
    slug: category.slug?.length,
    excerpt: category.excerpt?.length,
  })

  const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
    title: category.title || "",
    slug: category.slug || "",
    parent_id: category.parent_id || "",
    body: category.body || "",
    excerpt: category.excerpt || "",
    live: category.live,
    popular: category.popular,
    //@ts-expect-error
    gallery: category["galleries"][0]?.id || "",
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.categories.update", category), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Category successfully updated`} icon={`check`} />)
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
        <InputLabel htmlFor="parent_id" value="Parent Id" />
        <SelectInput id="parent_id" defaultValue={data.parent_id} onChange={handleFormInput} className="mt-1 block w-full">
          <option value="">None</option>
          {categories_list &&
            (filterObjectsById(categories_list, category.id) as unknown as any[]).map((cat) => (
              <option key={cat.uuid} value={cat.id}>
                {cat.title}
              </option>
            ))}
        </SelectInput>
        <InputError message={errors.parent_id} className="mt-2" />
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
        <SelectInput showValue={true} id={`gallery`} name={`gallery`} className={`mt-1 w-full`} value={data.gallery} onChange={handleFormInput}>
          <option value="">Select a gallery</option>
          {(galleries as unknown as any).map((gal: any) => (
            <option key={gal.id} value={gal.id}>
              {gal.title}
            </option>
          ))}
        </SelectInput>
        <InputError message={errors.gallery} className="mt-2" />
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
      <div className={`flex items-center justify-between`}>
        <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful} />
      </div>
    </form>
  )
}

export default EditCategoryForm
