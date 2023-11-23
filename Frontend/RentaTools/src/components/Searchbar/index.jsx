/* eslint-disable no-console */
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import "./styles.css"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { Button } from "@mui/material"
import useForm from "../../hooks/useForm"
import { useState } from "react"
const initialState = {
  search: "",
  reservationFrom: "",
  reservationTo: "",
}

export const Searchbar = () => {
  const { formData, setFormData, handleDateChange, handleSubmit } = useForm(initialState)
  const suggestionsArray = [
    "Martillo de demolición",
    "Martillo de demolición hexagonal",
    "Taladro de martillo giratorio",
    "Taladro de martillo giratorio inalámbrico",
  ]
  const [suggestions, setSuggestions] = useState(suggestionsArray)
  const [isShowSuggestions, setIsShowSuggestions] = useState(false)
  const handleSearch = () => {
    console.log(formData)
  }

  const handleInputChange = (e) => {
    setIsShowSuggestions(true)
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSuggestions(suggestions.filter((sugg) => sugg.includes(formData.search)))
  }

  return (
    <>
      {" "}
      <div className="searchbar-container">
        <h1 className="searchbar-title">Encontrá la herramienta que estás buscando!</h1>
        <form onSubmit={(e) => handleSubmit(e, () => handleSearch())} className="searchbar-bars">
          <TextField
            id="search-bar"
            className="searchbar-input text-input"
            label="Ingresá tu búsqueda"
            variant="outlined"
            placeholder="Search..."
            size="small"
            name="search"
            onChange={handleInputChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Desde"
              name="reservationFrom"
              className="searchbar-input date-input"
              slotProps={{ textField: { size: "small" } }}
              onChange={(e) => handleDateChange(e, "reservationFrom")}
            />
            <DatePicker
              label="Hasta"
              name="reservationTo"
              className="searchbar-input date-input"
              slotProps={{ textField: { size: "small" } }}
              onChange={(e) => handleDateChange(e, "reservationTo")}
            />
          </LocalizationProvider>
          <Button variant="contained" startIcon={<SearchIcon />} type="submit">
            Buscar
          </Button>
        </form>
        {isShowSuggestions ? (
          <div className="suggestions">
            <h6 className="suggestions-title">Sugerencias:</h6>
            {suggestions.map((suggestions, index) => (
              <li key={index}>{suggestions}</li>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}
