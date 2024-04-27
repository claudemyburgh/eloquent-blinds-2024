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
  guarantee: string
  galleries: GalleryProps[]
  product_range: string
  supplier: string
  supplier_code: string
}

export type ProductProps = {
  product: ProductType
}
