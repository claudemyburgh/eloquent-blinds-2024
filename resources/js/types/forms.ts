export interface ContactsProps {
  data: {
    label: string
    value: string
  }
}

export interface QuoteFromProps {
  first_name: string
  last_name: string
  email: string
  phone: string
  message: string
  subject: string
}

export interface SubjectProp {
  subject?: string
  className?: string
}
