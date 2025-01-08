import Banner from "../../main_banner/Banner";
import Bar from "./bar/Bar";
import banner_1 from "../../..//assets/img/banner_1.png";
import banner_2 from "../../..//assets/img/banner_2.png";

const Header = (props) => {
    return(
        <header>
            <Banner img={(props.page === "about")? banner_1 : banner_2}>
                <Bar choosed={props.page} />
            </Banner>
        </header>
    );
}

export default Header;