import "./styles.css"
import logo from "../../assets/imagenesGaleria/Logo-RentaTools.svg.svg"
import HeaderButton from "../button"
import { Link, useNavigate } from "react-router-dom"
import user from "../../assets/imagenesGaleria/userIcon.svg"
import { useState } from "react"
import Swal from "sweetalert2/dist/sweetalert2"
import CustomizedMenus from "../Menu"

const userFalso = {
  name: "Juan",
  lastName: "Perez",
  photo: user,
}

const Header = () => {
  const isUserLogged = localStorage.getItem("role")

  const [isLoggedin, setIsLoggedin] = useState(isUserLogged)
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
                  {userFalso.name[0]}. {userFalso.lastName[0]}.
                </h3>
                <h6>Hola Juan Carlos!</h6>
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
