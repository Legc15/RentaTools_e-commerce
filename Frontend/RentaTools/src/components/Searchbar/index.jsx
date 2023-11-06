/* eslint-disable no-console */
import { useState } from "react"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import "./styles.css"

export const Searchbar = () => {
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
  }
  return (
    <div>
      {" "}
      <div className="searchbar-container">
        <h1 className="searchbar-title">Encontrá la herramienta que estás buscando!</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="search-bar"
            className="searchbar-input"
            label="Ingresá tu búsqueda"
            variant="outlined"
            placeholder="Search..."
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "#FFA833" }} />
          </IconButton>
        </form>
      </div>
    </div>
  )
}
