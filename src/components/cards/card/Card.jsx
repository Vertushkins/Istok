import "./card.css";
import eye from "../../../assets/img/eye.png";
import comment from "../../../assets/img/comment.png";
import like from "../../../assets/img/like.png";

const Card = ({title, img, text, likes, dislikes, veiws, comments}) => {
    return(
        <div className="card">
            <h3>{title}</h3>
            <div className="description">
                <img className="cover" src={img} alt=""/>
                <span>{text}</span>
            </div>
            <div className="statistics">
                <div className="general">
                    <div className="frag">
                        <img className="icon" src={eye}/>
                        <span>{veiws}</span>
                    </div>
                    <div className="frag">
                        <img className="icon" src={comment}/>
                        <span>{comments}</span>
                    </div>
                </div>
                <div className="raiting">
                    <div className="frag">
                        <img className="icon" src={like}/>
                        <span>{likes}</span>
                    </div>
                    <div className="frag">
                        <img className="icon dislike" src={like}/>
                        <span>{dislikes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;