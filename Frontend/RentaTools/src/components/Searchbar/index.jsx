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
import Autocomplete from "@mui/material/Autocomplete"
import dayjs from "dayjs"
import es from "dayjs/locale/es"

const initialState = {
  search: "",
  reservationFrom: "",
  reservationTo: "",
}

export const Searchbar = () => {
  const { formData, setFormData, handleDateChange, handleSubmit } = useForm(initialState)

  const [suggestions, setSuggestions] = useState([])
  const [results, setResults] = useState([])
  const [isSearchInitiated, setIsSearchInitiated] = useState(false)

  const handleSearch = async () => {
    setIsSearchInitiated(false)
    await getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.PRODUCTS_SEARCH, searchBar: formData.search }).then((response) =>
      setResults(response)
    )
    setIsSearchInitiated(true)
  }

  const handleInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    await getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.SUGGESTIONS, barString: formData.search }).then((response) =>
      setSuggestions(response)
    )
  }

  return (
    <>
      {" "}
      <div className="searchbar-container">
        <h1 className="searchbar-title">Encontrá la herramienta que estás buscando!</h1>
        <form onSubmit={(e) => handleSubmit(e, () => handleSearch())} className="searchbar-bars">
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={suggestions.map((suggestion) => suggestion)}
            renderInput={(params) => (
              <TextField
                {...params}
                id="search-bar"
                className="searchbar-input text-input"
                label="Ingresá tu búsqueda"
                name="search"
                value={formData.searchBar}
                onChange={handleInputChange}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />

          <LocalizationProvider adapterLocale={es} dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Desde"
              name="reservationFrom"
              className="searchbar-input date-input"
              slotProps={{ textField: { size: "small" } }}
              onChange={(e) => handleDateChange(e, "reservationFrom")}
              minDate={dayjs()}
            />
            <DatePicker
              label="Hasta"
              name="reservationTo"
              className="searchbar-input date-input"
              slotProps={{ textField: { size: "small" } }}
              onChange={(e) => handleDateChange(e, "reservationTo")}
              minDate={dayjs(formData.reservationFrom).add(1, "d")}
            />
          </LocalizationProvider>
          <Button variant="contained" className="boton" startIcon={<SearchIcon />} type="submit">
            Buscar
          </Button>
        </form>

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
