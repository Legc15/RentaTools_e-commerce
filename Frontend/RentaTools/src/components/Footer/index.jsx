import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/imagenesGaleria/Logo-RentaTools.svg.svg";
import "./styles.css";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-copyright-container">
                <div className="isologotipo">
                    <img src={logo}></img>
                </div>

                <div className="copyrightPolicies">
                    <div><p className="copyright">© 2023 RENTATOOLS LTD.</p></div>
                    <div className="responsive-policies"></div>
                    <Link to="/policies">Términos y condiciones</Link>
                </div>
            </div>

            <div className="socialMedia">
                <div><FontAwesomeIcon icon={faFacebook} /></div>
                <div><FontAwesomeIcon icon={faInstagram} /></div>
                <div><FontAwesomeIcon icon={faXTwitter} /></div>
            </div>
        </div>
    )
}
export default Footer;