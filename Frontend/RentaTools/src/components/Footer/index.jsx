import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/imagenesGaleria/Logo-RentaTools.svg.svg";
import "./styles.css";



const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-copyright-container">
                <div className="isologotipo">
                    <img src={logo}></img>
                </div>

                <div >
                    <p className="copyright">© 2023 RENTATOOLS LTD.</p>
                    <p className="copyright-responsive">© 2023</p>
                </div>
            </div>

            <div className="socialMedia">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faXTwitter} />
            </div>
        </div>
    )
}
export default Footer;