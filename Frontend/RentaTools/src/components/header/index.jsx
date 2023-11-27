import "./styles.css"
import logo from "../../assets/imagenesGaleria/Logo-RentaTools.svg.svg"
import HeaderButton from "../button"
import { Link, useNavigate } from "react-router-dom"
//import userIcon from "../../assets/imagenesGaleria/userIcon.svg"
import { useEffect, useState } from "react"
import Swal from "sweetalert2/dist/sweetalert2"
import CustomizedMenus from "../Menu"
import { getInformationFromEndpoints } from "../../api/requestHandlers"



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
        localStorage.removeItem("firstName")
        localStorage.removeItem("lastName")
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

  const [name, setName] = useState(localStorage.getItem("name") || '');
  const [lastName, setLastName] = useState(localStorage.getItem("lastName") || '');
  useEffect(() => {
    const userId = localStorage.getItem("userId")
    if (userId) {
      fetchUserData(userId);
    }
    
    },[] );

    async function fetchUserData(userId) {
      const userData = await getInformationFromEndpoints({
          endpoint: 'USER_ID',
          id: userId,
      });

      setName(userData.name);
      setLastName(userData.lastName);
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
                  {name? name[0]: ''}. {lastName? lastName[0]: ''}.
                </h3>
                <h6>Hola {name} {lastName}!</h6>
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
