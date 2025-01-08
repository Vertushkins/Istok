import "./page.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";

const Page = (props) => {
    return(
        <>
        <Header page={props.name} />

        <main>
            {props.children}
        </main>

        <Footer />
        </>
    );
}

export default Page;