import { ChildrenProps } from "@/types"
import { FC, useEffect, useState } from "react"
import { QuoteFromProps } from "@/types/forms"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { ToastItem } from "@/Shared/Components/Alerts"
import confetti from "canvas-confetti"
import { createPortal } from "react-dom"
import { twMerge } from "tailwind-merge"
import { Panel } from "@/dashboard/Components/Panel"
import { InputError, InputLabel, Textarea, TextInput } from "@/Shared/Components/FormParials"
import { PrimaryButton } from "@/dashboard/Components/Buttons"

interface Props extends ChildrenProps {
  product?: string
}

const QuoteForm: FC<Props> = ({ className }) => {
  const [product, setProduct] = useState<string>("")

  const formData: QuoteFromProps = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  }

  const formDataErrors: QuoteFromProps = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  }

  useEffect(() => {
    const rootElement: HTMLElement | null = document.getElementById("quote-form")
    //@ts-expect-error
    if (rootElement.hasAttribute("data-product")) {
      const productItem = rootElement?.getAttribute("data-product")
      setProduct(productItem!)
      formData.subject = "Please give me a quote for " + productItem
    }
  }, [])

  const [loading, setLoading] = useState<boolean>(false)

  const [data, setData] = useState<QuoteFromProps>(formData)

  const [errors, setErrors] = useState<QuoteFromProps>(formDataErrors)

  function handleInput(e: any) {
    e.preventDefault()
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })

    setErrors({
      ...errors,
      [e.target.name]: "",
    })
  }

  async function handleSubmitForm(e: any) {
    e.preventDefault()
    setLoading(true)
    setErrors(formDataErrors)
    try {
      await axios.post("/api/send-quote", { ...data })
      toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Message successfully send`} icon={`check`} />)
      confetti({
        particleCount: 200,
        spread: 220,
        origin: { y: 0.4 },
        gravity: 2,
        colors: ["#5eead4", "#2dd4bf", "#0284c7", "#22d3ee"],
      })
      setData(formData)
    } catch (e: any) {
      setErrors({
        ...e.response.data.errors,
      })
      toast.custom((t) => <ToastItem t={t} type={`error`} title={`Error`} message={`Something went wrong!`} icon={`cross`} />)
    }
    setLoading(false)
  }

  return (
    <>
      {createPortal(
        <Toaster
          position={`top-right`}
          toastOptions={{
            duration: 2200,
          }}
        />,
        //@ts-expect-error
        document.getElementById("portal")
      )}

      <Panel className={twMerge(`my-4 space-y-4 md:my-6 lg:my-8`, className)}>
        <Panel.Header heading={`Get Quote`} />
        <form onSubmit={handleSubmitForm} noValidate method={`POST`} className={"space-y-2"}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
            <div className={`col-span-2 md:col-span-1`}>
              <InputLabel htmlFor={`first_name`} value={`First Name`} />
              <TextInput name={`first_name`} id={`first_name`} value={data.first_name} onChange={handleInput} className={`mt-2 w-full`} />
              <InputError className={`mt-2`} message={errors.first_name} />
            </div>
            <div className={`col-span-2 md:col-span-1`}>
              <InputLabel htmlFor={`last_name`} value={`Last Name`} />
              <TextInput name={`last_name`} id={`last_name`} value={data.last_name} onChange={handleInput} className={`mt-2 w-full`} />
              <InputError className={`mt-2`} message={errors.last_name} />
            </div>
            <div className={`col-span-2 md:col-span-1`}>
              <InputLabel htmlFor={`email`} value={`Email`} />
              <TextInput name={`email`} id={`email`} type={`email`} value={data.email} onChange={handleInput} className={`mt-2 w-full`} />
              <InputError className={`mt-2`} message={errors.email} />
            </div>
            <div className={`col-span-2 md:col-span-1`}>
              <InputLabel htmlFor={`phone`} value={`Phone`} />
              <TextInput name={`phone`} id={`phone`} type={`tel`} value={data.phone} onChange={handleInput} className={`mt-2 w-full`} />
              <InputError className={`mt-2`} message={errors.phone} />
            </div>
            <div className={`col-span-2`}>
              <InputLabel htmlFor={`subject`} value={`Subject`} />
              <TextInput
                name={`subject`}
                id={`subject`}
                type={`text`}
                disabled={product?.length > 0}
                value={data.subject}
                onChange={handleInput}
                className={twMerge("mt-2 w-full ", product?.length > 0 && "cursor-not-allowed opacity-50")}
              />
              <InputError className={`mt-2`} message={errors.subject} />
            </div>
          </div>

          <div>
            <InputLabel htmlFor={`message`} value={`Message`} />
            <Textarea name={`message`} id={`message`} onChange={handleInput} value={data.message} className={`mt-2 min-h-[175px] w-full`} />
            <InputError className={`mt-2`} message={errors.message} />
          </div>
          <div className={`flex items-center space-x-4`}>
            <PrimaryButton disabled={loading}>Send</PrimaryButton>
            {loading && (
              <span>
                <svg className={`text-primary-500`} width="24" height="24" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" strokeLinecap="round">
                      <animate
                        attributeName="stroke-dasharray"
                        dur="1.5s"
                        calcMode="spline"
                        values="0 150;42 150;42 150;42 150"
                        keyTimes="0;0.475;0.95;1"
                        keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-dashoffset"
                        dur="1.5s"
                        calcMode="spline"
                        values="0;-16;-59;-59"
                        keyTimes="0;0.475;0.95;1"
                        keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" dur="1.2s" values="0 12 12;360 12 12" repeatCount="indefinite" />
                  </g>
                </svg>
              </span>
            )}
          </div>
        </form>
      </Panel>
    </>
  )
}

export default QuoteForm
