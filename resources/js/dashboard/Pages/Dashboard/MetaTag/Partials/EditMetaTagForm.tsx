import React, { useState } from "react"
import { useForm, usePage } from "@inertiajs/react"
import { CharCounter, InputError, InputLabel, SaveSubmitButton, SelectInput, Textarea, TextInput } from "@/Shared/Components/FormParials"
import { PageProps } from "@/types"
import { slugIt } from "@/lib/helpers"
import toast from "react-hot-toast"

import { ToastItem } from "@/Shared/Components/Alerts"
import MetaCard from "@/dashboard/Pages/Dashboard/MetaTag/Partials/MetaCard"
import { ImageDropzone } from "@/dashboard/Components/Upload"

const EditMetaTagForm = () => {
  const { tag } = usePage<PageProps & any>().props

  const [count, setCount] = useState<any>({
    title: tag.title?.length,
    description: tag.description?.length,
    slug: tag.slug?.length,
  })

  const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
    title: tag.title || "",
    slug: tag.slug || "",
    description: tag.description || "",
    media: tag.media || "/img/meta/eloquent.jpg",
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.meta-tag.update", tag), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Tag successfully updated`} icon={`check`} />)
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
    <>
      <MetaCard data={data} showButtons={true} />
      <div className="panel">
        <ImageDropzone model={tag} namedRoute={"dashboard.meta-tag.upload"} />
        <form className={`mt-6 space-y-6`} onSubmit={handleFormSubmit}>
          <div>
            <InputLabel htmlFor="title" value="Title" />
            <TextInput id="title" name="title" value={data.title} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
            <InputError message={errors.title} className="mt-2" />
          </div>
          <div>
            <InputLabel htmlFor="slug" value="Slug" />
            <TextInput id="slug" name="slug" value={slugIt(data.slug)} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
            <CharCounter count={count.slug} max={100} />
            <InputError message={errors.slug} className="mt-4" />
          </div>

          <div>
            <InputLabel htmlFor="description" value="Excerpt" />
            <Textarea id="description" name="description" value={data.description} onChange={handleFormInput} className="mt-1 block min-h-[100px] w-full" />
            <CharCounter count={count.description || 0} max={500} />
            <InputError message={errors.description} className="mt-4" />
          </div>
          <div className={`flex items-center justify-between`}>
            <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful} />
          </div>
        </form>
      </div>
    </>
  )
}

export default EditMetaTagForm
