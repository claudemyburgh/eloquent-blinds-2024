import { GalleryProps } from "@/types/datatable/index"

export type ProductType = {
  id: number
  title: string
  slug: string
  category_id: string
  excerpt: string
  body: string
  live: string
  popular: string
  galleries?: GalleryProps[]
}

export type ProductProps = {
  product: ProductType
}
