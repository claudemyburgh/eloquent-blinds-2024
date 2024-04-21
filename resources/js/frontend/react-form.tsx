import { createRoot } from "react-dom/client"
import QuoteForm from "@/frontend/components/QuoteForm"

let form = document.getElementById("quote-form")
if (form) {
  createRoot(form).render(<QuoteForm />)
}
