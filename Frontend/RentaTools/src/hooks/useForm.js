import { useState } from "react"

export default function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, submitFunction) => {
    e.preventDefault()
    submitFunction()
  }

  return { formData, setFormData, handleInputChange, handleSubmit }
}
