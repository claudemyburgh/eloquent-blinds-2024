import { Media } from "@/types/datatable/Media"

export type MetaTagsProps = {
  tag: MetaTags
}

export type MetaTags = {
  title: string
  description: string
  image?: Media
}
