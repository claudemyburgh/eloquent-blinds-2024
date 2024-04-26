import React, { forwardRef, SelectHTMLAttributes, useEffect, useImperativeHandle, useRef } from "react"
import { twMerge } from "tailwind-merge"

interface Props {
  isFocused?: boolean
  options?: OptionProp[]
  showValue?: boolean
}

type OptionProp = {
  value: string
  label: string
}

export default forwardRef(function SelectInput(
  { className = "", isFocused = false, children, showValue = false, options = [], ...props }: SelectHTMLAttributes<HTMLSelectElement> & Props,
  ref
) {
  const localRef = useRef<HTMLSelectElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }))

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus()
    }
  }, [])

  return (
    <select
      {...props}
      className={twMerge(
        "rounded-md border-gray-300 text-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-600",
        className
      )}
      ref={localRef}
    >
      {children}
    </select>
  )
})
