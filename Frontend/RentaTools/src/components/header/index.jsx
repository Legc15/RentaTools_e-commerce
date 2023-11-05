import "./styles.css";
import logo from "../../assets/imagenesGaleria/Logo-RentaTools.svg.svg";
import HeaderButton from "../button";
import { Link } from "react-router-dom";
import user from "../../assets/imagenesGaleria/userIcon.svg";

const userFalso = {
  name: "Juan",
  lastName: "Perez",
  photo: user,
};

const Header = () => {
  const isUserLogged = true;

  return (
    <div className="header-container">
      <Link to="/">
        <div className="logo-container">
          <div className="logo">
            <img src={logo}></img>
          </div>

          <div className="nombre-frase">
            <h1>RentaTools</h1>
            <h2>“Aquí se inicia la construcción”</h2>
          </div>
        </div>
      </Link>

      <div className="nav-bar">
        {isUserLogged ? (
          <>
            <div className="header-box">
              <div className="user-container">
                <img src={userFalso.photo} alt="hola" className="avatar" />{" "}
                <h3>
                  {userFalso.name[0]}. {userFalso.lastName[0]}.
                </h3>
              </div>
              <HeaderButton
                className="cerrar-sesion"
                buttonLabel="Cerrar sesión"
              />
            </div>
          </>
        ) : (
          <ul>
            <li>
              <HeaderButton
                className="crear-cuenta"
                buttonLabel="Crear Cuenta"
              />
            </li>
            <li>
              <HeaderButton
                className="iniciar-sesion"
                buttonLabel="Iniciar sesion"
              />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Header;
