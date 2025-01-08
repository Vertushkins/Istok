import "./footer.css";
import logo from "../../../assets/img/logo.png";
import Navigation from "../navigation/Navigation";

const Footer = () => {
    return(
        <footer>
            <div className="footer-item">
                <span id="email">aqua24@mail.ru</span>
                <span>Администрация сайта</span>
            </div>
            <div className="footer-item">
                <img src={logo} />
                <span>Политика конфиденциальности</span>
                <span>© 2024</span>
            </div>
            <div className="footer-item">
                <Navigation id={"footer"}/>
            </div>
        </footer>
    );
}

export default Footer;