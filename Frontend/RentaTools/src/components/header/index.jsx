import "./styles.css"
import logo from "../../assets/imagenesGaleria/Logo-RentaTools.svg.svg"
import HeaderButton from "../button"
import { Link, useNavigate } from "react-router-dom"
import user from "../../assets/imagenesGaleria/userIcon.svg"
import { useEffect, useState } from "react"
import Swal from "sweetalert2/dist/sweetalert2"
import CustomizedMenus from "../Menu"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { getUserId } from "../../utils/localStorageHandler"

const Header = () => {
  const isUserLogged = localStorage.getItem("role")

  const [isLoggedin, setIsLoggedin] = useState(isUserLogged)
  const [userInfo, setUserInfo] = useState({})
  const navigate = useNavigate()

  const handleLogOut = () => {
    Swal.fire({
      text: "Cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("role")
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        setIsLoggedin(false)
        location.assign("/")
      }
    })
  }

  useEffect(() => {
    getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.USER_ID, id: getUserId() }).then((response) => {
      setUserInfo(response)
    })
  }, [])

  const handleSignIn = () => {
    navigate("/signIn")
  }

  const handleSignUp = () => {
    navigate("/signUp")
  }

  return (
    <div className="header-container">
      <Link to="/">
        <div className="logo-container">
          <div className="logo">
            <img className="logo-img" src={logo}></img>
          </div>

          <div className="nombre-frase">
            <h1>RentaTools</h1>
            <h2>“Aquí se inicia la construcción”</h2>
          </div>
        </div>
      </Link>

      <div className="nav-bar">
        {isLoggedin ? (
          <>
            <div className="header-box">
              <div className="user-container">
                <h3>
                  {userInfo.name[0]}. {userInfo.lastName[0]}.
                </h3>
                <h6>Hola {userInfo.name}!</h6>
              </div>
              <CustomizedMenus handleLogOut={handleLogOut} />
            </div>
          </>
        ) : (
          <ul>
            <li>
              <HeaderButton className="crear-cuenta" buttonLabel="Crear Cuenta" onClick={handleSignUp} />
            </li>
            <li>
              <HeaderButton className="iniciar-sesion" buttonLabel="Iniciar sesion" onClick={handleSignIn} />
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
export default Header
