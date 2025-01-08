import Page from "../skeleton/page/Page";
import Content from "../content/Content";
import Container from "../cards/container/Container";

const News = () => {
    console.log("news");
    return(
        <Page name="news">
            <Content>
                <h1>НОВОСТИ</h1>
            </Content>

            <Content>
                <Container />
            </Content>
        </Page>
    );
}

export default News;