import "./navigation.css"
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return(
        <nav id={props.id}>
            <ul>
                <li className={(props.choosed === "about") ? "choosed" : ""}><Link to="/Istok/">О проекте</Link></li>
                <li className={(props.choosed === "news") ? "choosed" : ""}><Link to="/Istok/news">Новости</Link></li>
                <li className={(props.choosed === "appeals") ? "choosed" : ""}><Link to="/Istok/appeals">Обращения</Link></li>
                <li className={(props.choosed === "suggestions") ? "choosed" : ""}><Link to="/Istok/suggestions">Предложения</Link></li>
                <li className={(props.choosed === "account") ? "choosed" : ""}><Link to="/Istok/account">Личный кабинет</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;