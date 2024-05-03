export interface Media {
  id: number
  model_type: string
  model_id: number
  uuid: string
  collection_name: "tiny" | "thumb" | "small" | "medium" | "large" | "tail" | "card" | "screen" | "ads" | "meta"
  name: string
  file_name: string
  mime_type: string
  disk: string
  conversions_disk: string
  size: number
  order_column: number
  original_url: string
  preview_url: string
}
