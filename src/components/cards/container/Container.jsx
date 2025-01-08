import "./container.css";
import Card from "../card/Card";

const Container = () => {
    return(
        <div className="container">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Container;