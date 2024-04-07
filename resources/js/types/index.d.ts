import {ReactNode} from "react"

export interface User {
    id: number
    name?: string
    first_name: string
    last_name: string
    email: string
    phone: string
    email_verified_at: string
}

export interface CategoriesProps {
    categories_all: {
        title: string
        slug: string
        parent_id: string
        excerpt: string
        description: string
        body: string
        live: string
        popular: string
    }
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User
    }
    csrf: string
    categories_all: CategoriesProps
    flash: string | null
    emails: {
        unread: number
    }
}

export interface ChildrenProps {
    children?: ReactNode | JSX.Element | undefined
    className?: string
}
