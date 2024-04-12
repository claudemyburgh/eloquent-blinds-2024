import {GalleryProps} from "@/types/datatable/index";

export default interface ProductProps {
  product: {
    id?: number
    title: string
    slug: string
    category_id: string
    excerpt: string
    body: string
    live: string
    popular: string
    galleries?: GalleryProps[]

  }

}
