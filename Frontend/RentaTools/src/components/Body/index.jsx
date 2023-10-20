import { Categories } from "../Categories"
import { Recommended } from "../Recommended"
import { Searchbar } from "../Searchbar"
import "./styles.css"

const Body = () => {
  return (
    <div className="body-container">
      <Searchbar />
      <Categories />
      <Recommended />
    </div>
  )
}

export default Body
