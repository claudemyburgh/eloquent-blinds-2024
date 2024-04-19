import { ReactNode } from "react"
import CategoriesListProps from "@/types/datatable/categories-list-props"

export interface User {
  id: number
  name?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  email_verified_at: string
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
  auth: {
    user: User
  }
  csrf: string
  categories_all: CategoriesListProps
  flash: string | null
  emails: {
    unread: number
  }
}

export interface ChildrenProps {
  children?: ReactNode | JSX.Element | undefined
  className?: string
}
