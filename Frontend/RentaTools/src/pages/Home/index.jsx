import { Categories } from "../../components/Categories"
import { Recommended } from "../../components/Recommended"
import { Searchbar } from "../../components/Searchbar"
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
