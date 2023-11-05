/* eslint-disable react/prop-types */
import Button from "@mui/material/Button"

const HeaderButton = ({ className, buttonLabel, onClick }) => {
  return (
    <Button variant="contained" className={"button " + className} onClick={onClick}>
      {buttonLabel}
    </Button>
  )
}

export default HeaderButton
