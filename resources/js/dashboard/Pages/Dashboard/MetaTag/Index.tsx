import AuthenticatedLayout from "@/dashboard/Layouts/AuthenticatedLayout"
import React, { useState } from "react"
import { Head, Link, useForm } from "@inertiajs/react"
import { PageProps } from "@/types"

import DatatableAction from "../../../Components/Datatable/Partial/DatatableAction"
import MetaCard from "@/dashboard/Pages/Dashboard/MetaTag/Partials/MetaCard"
import Modal from "@/dashboard/Components/Modal"
import PrimaryButton from "../../../Components/Buttons/PrimaryButton"
import { slugIt } from "@/lib/helpers"
import { InputError, InputLabel, SaveSubmitButton, Textarea, TextInput } from "@/Shared/Components/FormParials"
import { MetaTags } from "@/types/datatable/meta-tags-props"
import { Panel } from "@/dashboard/Components/Panel"

export default function Index({ auth, meta_tag }: PageProps<any>) {
  const { data, setData, post, processing, errors, clearErrors, reset } = useForm<any>({
    title: "",
    slug: "",
    description: "",
    image: "",
  })

  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    reset()
    clearErrors()
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
    post(route("dashboard.meta-tag.store"), {
      onSuccess: () => {
        closeModal()
        reset()
      },
      onError: () => {},
      preserveState: true,
    })
  }

  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}>
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="container mx-auto space-y-6 ">
          <Modal show={isOpen} onClose={closeModal} maxWidth={`lg`} closeable={true}>
            <Panel>
              <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                <div>
                  <InputLabel htmlFor="title" value="Title" />
                  <TextInput id="title" name="title" value={data.title} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
                  <InputError message={errors.title} className="mt-2" />
                </div>
                <div>
                  <InputLabel htmlFor="slug" value="Slug" />
                  <TextInput id="slug" name="slug" value={slugIt(data.slug)} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
                  <InputError message={errors.slug} className="mt-4" />
                </div>

                <div>
                  <InputLabel htmlFor="description" value="Description" />
                  <Textarea id="description" name="description" value={data.description} onChange={handleFormInput} className="mt-1 block min-h-[100px] w-full" />

                  <InputError message={errors.description} className="mt-4" />
                </div>
                <div className={`flex items-center justify-between`}>
                  <PrimaryButton type={`submit`}>Create</PrimaryButton>
                </div>
              </form>
            </Panel>
          </Modal>

          <PrimaryButton type={`button`} onClick={openModal}>
            Create new Meta Tag
          </PrimaryButton>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {meta_tag &&
              meta_tag.map((tag: any) => (
                <div className={`space-y-2 rounded bg-gray-900 p-4`} key={tag.uuid}>
                  <Link href={route("dashboard.meta-tag.edit", tag)}>
                    <MetaCard data={{ title: tag.title, description: tag.description, media: tag.media }} showButtons={false} />
                  </Link>
                  <div className="space-x-0">
                    <DatatableAction deletion editing id={tag.id} name={"test"} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
