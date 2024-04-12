import {GalleryProps} from "@/types/datatable/index";

export default interface CategoryProps {
  category: {
    id?: number
    title: string
    slug: string
    parent_id: string
    excerpt: string
    body: string
    live: string
    popular: string
    galleries?: GalleryProps[]
  }
}
