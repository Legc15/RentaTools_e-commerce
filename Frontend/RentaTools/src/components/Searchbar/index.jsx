import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import "./styles.css"

export const Searchbar = () => {
  return (
    <div>
      {" "}
      <div className="searchbar-container">
        <h1 className="searchbar-title">Encontrá la herramienta que estás buscando!</h1>
        <form>
          <TextField
            id="search-bar"
            className="searchbar-input"
            label="Ingresá tu búsqueda"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "#FFA833" }} />
          </IconButton>
        </form>
      </div>
    </div>
  )
}
