import { useState } from "react"

export default function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDateChange = (e, dateName) => {
    const date = new Date(e["$d"])
    setFormData({ ...formData, [dateName]: date })
  }

  const handleSubmit = (e, submitFunction) => {
    e.preventDefault()
    submitFunction()
  }

  return { formData, setFormData, handleDateChange, handleInputChange, handleSubmit }
}
