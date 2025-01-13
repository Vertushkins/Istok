import Page from "../skeleton/page/Page";
import Content from "../content/Content";
import Container from "../cards/container/Container";
import {SUGGESTIONS_ARTICLES} from "../../data/suggestions.js";

const Suggestions = () => {
    return(
        <Page name="suggestions">
            <Content>
                <h1>ПРЕДЛОЖЕНИЯ</h1>
                <p>У вас есть идеи, как можно улучшить водоснабжение нашего города? Мы рады выслушать ваши предложения! Поделитесь своими мыслями, заполнив форму ниже. Ваши предложения помогут нам сделать наш сервис более удобным и эффективным.</p>
            </Content>

            <Content>
                <h2>ВАШЕ ПРЕДЛОЖЕНИЕ</h2>
                <p>Если у Вас есть идея, которая поможет нам улучшить водоснабжение в Элисте,
заполните форму и мы обязательно рассмотрим ее и отправим на голосование.
Возможно, именно Ваша идея сделает нам город еще лучше!</p>
            </Content>

            <Content>
                <Container data={SUGGESTIONS_ARTICLES} />
            </Content>
        </Page>
    );
}

export default Suggestions;