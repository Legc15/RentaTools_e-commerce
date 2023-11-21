/* eslint-disable no-console */
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import "./styles.css"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { Button } from "@mui/material"
import useForm from "../../hooks/useForm"
const initialState = {
  search: "",
  reservationFrom: "",
  reservationTo: "",
}

export const Searchbar = () => {
  const { formData, handleInputChange, handleDateChange, handleSubmit } = useForm(initialState)

  const handleSearch = () => {
    console.log(formData)
  }
  return (
    <div>
      {" "}
      <div className="searchbar-container">
        <h1 className="searchbar-title">Encontrá la herramienta que estás buscando!</h1>

        <form onSubmit={(e) => handleSubmit(e, () => handleSearch())}>
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
      </div>
    </div>
  )
}
