import Page from "../skeleton/page/Page";
import Content from "../content/Content";
import Container from "../cards/container/Container";
import {NEWS_ARTICLES} from "../../data/news.js";

const News = () => {
    return(
        <Page name="news">
            <Content>
                <h1>НОВОСТИ</h1>
            </Content>

            <Content>
                <Container data={NEWS_ARTICLES} />
            </Content>
        </Page>
    );
}

export default News;