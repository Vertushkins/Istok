import "./banner.css";

const Banner = (props) => {
    return(
        <div className="banner">
            <img src={props.img}/>
            {props.children}
        </div>
    );
}

export default Banner;