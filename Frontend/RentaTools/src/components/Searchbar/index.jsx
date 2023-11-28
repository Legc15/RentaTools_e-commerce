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
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import ProductList from "../ProductList"
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
  const [results, setResults] = useState([])
  const [isSearchInitiated, setIsSearchInitiated] = useState(false)

  const handleSearch = async () => {
    setIsSearchInitiated(false)
    await getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.PRODUCTS_SEARCH, searchBar: formData.searchBar }).then((response) =>
      setResults(response)
    )
    setIsSearchInitiated(true)
  }

  const handleInputChange = async (e) => {
    setIsShowSuggestions(true)
    setFormData({ ...formData, [e.target.name]: e.target.value })
    await getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.SUGGESTIONS, barString: formData.searchBar }).then((response) =>
      setSuggestions(response)
    )
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
            name="searchBar"
            value={formData.searchBar}
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
            {suggestions.map((suggestion, index) => (
              <li className="suggestion" onClick={() => setFormData({ ...formData, searchBar: suggestion })} key={index}>
                {suggestion}
              </li>
            ))}
          </div>
        ) : (
          ""
        )}

        {isSearchInitiated ? (
          <>
            <h1 className="title">RESULTADOS</h1>
            {results.length ? <ProductList products={results} /> : <h3>No se encontraron resultados.</h3>}
            <hr />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  )
}
