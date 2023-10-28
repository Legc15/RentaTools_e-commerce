/* eslint-disable react/prop-types */
import Button from "@mui/material/Button"

const HeaderButton = ({ className, buttonLabel }) => {
  return (
    <Button variant="contained" className={"button " + className}>
      {buttonLabel}
    </Button>
  )
}

export default HeaderButton
