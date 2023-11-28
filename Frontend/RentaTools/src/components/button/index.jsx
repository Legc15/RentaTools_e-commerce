/* eslint-disable react/prop-types */
import Button from "@mui/material/Button"

const HeaderButton = ({ className, buttonLabel, type, onClick, disabled }) => {
  return (
    <Button variant="contained" className={"button " + className}  type={type} onClick={onClick} disabled ={disabled}>
      {buttonLabel}
    </Button>
  )
}

export default HeaderButton
