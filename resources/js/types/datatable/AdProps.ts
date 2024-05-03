import { Media } from "@/types/datatable/Media"

export default interface AdProps {
  ad: {
    id?: number
    title: string
    slug: string
    description: string
    parent_id: string
    media: Media[]
  }
}
