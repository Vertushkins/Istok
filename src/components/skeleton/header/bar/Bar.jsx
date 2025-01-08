import "./bar.css";
import Navigation from "../../navigation/Navigation";

const Bar = (props) => {
    return(
        <>
        
        <Navigation id={"bar"} choosed={props.choosed}/>
        </>
    );
}

export default Bar;