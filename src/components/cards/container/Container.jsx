import "./container.css";
import Card from "../card/Card";

const Container = ({data}) => {
    return(
        <div className="container">
            {
                data.map((article) => (
                    <Card
                        key={article.id}
                        title={article.title}
                        img={article.img}
                        text={article.text}
                        likes={article.likes}
                        dislikes={article.dislikes}
                        veiws={article.veiws}
                        comments={article.comments}
                    />
                ))
            }
        </div>
    );
}

export default Container;