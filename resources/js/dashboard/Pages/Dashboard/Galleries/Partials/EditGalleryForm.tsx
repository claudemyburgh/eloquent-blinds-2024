import React, { useState } from "react"
import { useForm, usePage } from "@inertiajs/react"
import { CharCounter, InputError, InputLabel, SaveSubmitButton, SelectInput, Textarea, TextInput } from "@/Shared/Components/FormParials"
import { PageProps } from "@/types"
import { slugIt } from "@/lib/helpers"
import toast from "react-hot-toast"
import { CounterProps, GalleryType } from "@/types/datatable"
import { ToastItem } from "@/Shared/Components/Alerts"

const EditGalleryForm = () => {
  const { gallery } = usePage<GalleryType & PageProps>().props

  const [count, setCount] = useState<CounterProps>({
    body: gallery.body?.length,
    slug: gallery.slug?.length,
    description: gallery.description?.length,
  })

  const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
    title: gallery.title || "",
    slug: gallery.slug || "",
    body: gallery.body || "",
    description: gallery.description || "",
    live: gallery.live,
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.galleries.update", gallery), {
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
        <InputLabel htmlFor="description" value="Description" />
        <Textarea id="description" value={data.description} onChange={handleFormInput} className="mt-1 block min-h-[100px] w-full" />
        <CharCounter count={count.description || 0} max={500} />
        <InputError message={errors.description} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="body" value="Body" />
        <Textarea id="body" value={data.body} onChange={handleFormInput} className="mt-1 block min-h-[200px] w-full" />
        <CharCounter count={count.body || 0} max={2500} />
        <InputError message={errors.body} className="mt-4" />
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-8">
        <div>
          <InputLabel htmlFor="live" value="Live" />
          <SelectInput id={`live`} name={`live`} className={`mt-1 w-full`} value={data.live} onChange={handleFormInput}>
            <option value="1">Live</option>
            <option value="0">Not Live</option>
          </SelectInput>
          <InputError message={errors.live} className="mt-2" />
        </div>
      </div>
      <div className={`flex items-center justify-between`}>
        <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful} />
      </div>
    </form>
  )
}

export default EditGalleryForm
