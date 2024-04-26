import { GalleryProps } from "@/types/datatable/index"

export type CategoryProps = {
  id?: number
  title: string
  slug: string
  parent_id: string
  excerpt: string
  body: string
  live: string
  popular: string
  galleries?: GalleryProps[] | []
}
export type CategoryType = {
  category: CategoryProps
}
